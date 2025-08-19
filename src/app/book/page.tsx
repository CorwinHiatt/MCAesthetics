import React from 'react';

export default function BookPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      <p className="mb-8">
        Schedule your consultation or treatment with our experienced team.
        Please fill out the form below, and we'll contact you to confirm your appointment.
      </p>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your first name"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your last name"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your phone number"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block mb-1 font-medium">Service</label>
            <select id="service" className="w-full px-3 py-2 border rounded-md">
              <option value="">Select a service</option>
              <option value="consultation">Initial Consultation</option>
              <option value="facial">Facial Treatment</option>
              <option value="botox">Botox</option>
              <option value="fillers">Dermal Fillers</option>
              <option value="laser">Laser Hair Removal</option>
              <option value="chemical-peel">Chemical Peel</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block mb-1 font-medium">Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block mb-1 font-medium">Preferred Time</label>
              <select id="time" className="w-full px-3 py-2 border rounded-md">
                <option value="">Select a time</option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 7pm)</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="notes" className="block mb-1 font-medium">Additional Notes</label>
            <textarea 
              id="notes" 
              rows={4} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Any specific concerns or questions?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Request Appointment
          </button>
        </form>
      </div>
      
      <div className="mt-8 text-center text-gray-600">
        <p>
          After submitting your request, our team will contact you within 24 hours to confirm your appointment.
          If you need immediate assistance, please call us at (555) 123-4567.
        </p>
      </div>
    </div>
  );
}