import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
const attemptLog = { timestamp: new Date().toISOString(), success: false, details: {} }; // Log structure for every attempt

try {
const formData = await req.formData();

console.log('Env vars loaded:', {
  resendApiKey: !!process.env.RESEND_API_KEY,
  recaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY,
});

const firstName = formData.get('firstName') as string;
const email = formData.get('email') as string;
const token = formData.get('g-recaptcha-response') as string;

attemptLog.details = { firstName, email, token }; // Log form data for all attempts
console.log('Received form data (attempt logged):', attemptLog.details);

if (!token) {
  attemptLog.details = { ...attemptLog.details, error: 'reCAPTCHA token missing' };
  console.log('Failed attempt:', attemptLog); // Log failed
  return NextResponse.json({ error: 'reCAPTCHA token missing' }, { status: 400 });
}

if (!email) {
  attemptLog.details = { ...attemptLog.details, error: 'Email is required' };
  console.log('Failed attempt:', attemptLog); // Log failed
  return NextResponse.json({ error: 'Email is required' }, { status: 400 });
}

// Verify reCAPTCHA v3 token
const secretKey = process.env.RECAPTCHA_SECRET_KEY;
if (!secretKey) {
  attemptLog.details = { ...attemptLog.details, error: 'reCAPTCHA secret key not configured' };
  console.log('Failed attempt:', attemptLog);
  throw new Error('reCAPTCHA secret key not configured');
}
const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
const verificationResponse = await fetch(verificationUrl, { method: 'POST' });
const verificationData = await verificationResponse.json() as {
  success: boolean;
  score: number;
  action: string;
  'error-codes'?: string[];
};

if (!verificationData.success || verificationData.score < 0.5) { // Adjust threshold if needed
  attemptLog.details = { ...attemptLog.details, verification: verificationData, error: 'reCAPTCHA verification failed (possible bot)' };
  console.log('Failed attempt:', attemptLog); // Log failed verification
  return NextResponse.json({ error: 'reCAPTCHA verification failed (possible bot)', details: verificationData['error-codes'], score: verificationData.score }, { status: 400 });
}

console.log('reCAPTCHA v3 score (passed):', verificationData.score); // Log passing score

// Proceed with Resend email
const resend = new Resend(process.env.RESEND_API_KEY);
const emailResponse = await resend.emails.send({
  from: 'signup@mcaestheticsclinic.com', // Custom verified domain address – update if you want a different one (e.g., 'leads@')
  to: 'admin@mcaestheticsclinic.com',
  subject: `Prescreened Signup for Email Broadcasts from ${firstName || 'Website Visitor'} via MC Aesthetics`,
  html: `
    <h1>New Signup from MC Aesthetics Footer Form</h1>
    <p><strong>This is a prescreened customer from www.mcaestheticsclinic.com who would like to sign up for email broadcasting and promotional events.</strong></p>
    <p><strong>First Name:</strong> ${firstName || 'Not provided'}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p>Reply directly to this email to respond to the subscriber.</p>
  `,
  replyTo: email,
});

if (emailResponse.error) {
  attemptLog.details = { ...attemptLog.details, resendError: emailResponse.error };
  console.log('Failed attempt (email send error):', attemptLog);
  throw new Error(`Resend error: ${emailResponse.error.message || 'Unknown Resend issue'}`); // Improved handling for undefined errors
}

attemptLog.success = true;
attemptLog.details = { ...attemptLog.details, resendResponse: emailResponse };
console.log('Successful attempt:', attemptLog); // Log success

return NextResponse.json({ success: true, message: 'Signup successful and email sent!', data: emailResponse }, { status: 200 });
} catch (error) {
attemptLog.details = { ...attemptLog.details, serverError: (error as Error).message };
console.error('Server error during attempt:', attemptLog); // Log any catch-all errors
return NextResponse.json({ error: 'Failed to send email', details: (error as Error).message }, { status: 500 });
}
}