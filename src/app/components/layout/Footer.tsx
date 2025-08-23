import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4267B2] text-white py-16">
      {/* Decorative top border */}
      <div className="h-1 bg-white mb-12"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Get in Touch Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/50 pb-2 inline-block">Get in Touch</h2>
            
            {/* Call Us */}
            <div className="flex items-start mb-5 group">
              <div className="mr-4 bg-[#3B5998] p-2 rounded-full group-hover:bg-[#2d4373] transition-colors">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white/90">Call Us</h3>
                <p className="text-white">971-267-2322</p>
              </div>
            </div>
            
            {/* Email Us */}
            <div className="flex items-start mb-5 group">
              <div className="mr-4 bg-[#3B5998] p-2 rounded-full group-hover:bg-[#2d4373] transition-colors">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white/90">Email Us</h3>
                <p className="text-white">admin@mcaestheticsclinic.com</p>
              </div>
            </div>
            
            {/* Our Address */}
            <div className="flex items-start mb-6 group">
              <div className="mr-4 bg-[#3B5998] p-2 rounded-full group-hover:bg-[#2d4373] transition-colors">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white/90">Our Address</h3>
                <p className="text-white">609 NE Baker St. Suite 130</p>
                <p className="text-white">McMinnville OR 97128</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="bg-white text-[#4267B2] w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a 
                href="#" 
                aria-label="Instagram" 
                className="bg-white text-[#4267B2] w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Find Us Here Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/50 pb-2 inline-block">Find Us Here</h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-white mx-auto w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d-123.1986!3d45.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA3JzM0LjIiTiAxMjPCsDExJzU1LjAiVw!5e0!3m2!1sen!2sus!4v1629123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MC Aesthetics Location"
              ></iframe>
            </div>
            <a 
              href="https://goo.gl/maps/yourmaplink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 text-white/80 hover:text-white transition-colors flex items-center justify-center md:justify-start"
            >
              <span>View larger map</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          
          {/* Join Our List Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/50 pb-2 inline-block">Join Our List</h2>
            <p className="mb-6 text-white/90">
              Join our email list for new treatment updates, promotions, special events and more.
            </p>
            
            {/* Newsletter Form */}
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="px-4 py-3 w-full rounded-md border-0 bg-[#3B5998] text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="px-4 py-3 w-full rounded-md border-0 bg-[#3B5998] text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-white text-[#4267B2] px-4 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="MC Aesthetics" className="h-12 w-auto" />
          </div>
          
          <div className="text-white/80 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          
          <div className="text-white/80 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} MC Aesthetics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}