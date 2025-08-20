"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Reset mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest('header') && !target.closest('#mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="border-8 border-purple-800 mb-16" style={{ borderWidth: '12px' }}>
      <header className="relative bg-white shadow-lg" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center" style={{ minHeight: '150px' }}>
            {/* Logo and Mobile Menu Toggle */}
            <div className="flex justify-between items-center mb-8 md:mb-0">
              <Link href="/" className="text-6xl font-bold text-purple-800 relative z-10" style={{ fontSize: '4rem' }}>
                MC Aesthetics
              </Link>

              {/* Mobile menu button */}
              <button 
                id="mobile-menu-button"
                className="md:hidden relative z-10 p-6 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                style={{ padding: '24px' }}
              >
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '48px', height: '48px' }}>
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation - Simplified with mega menu approach */}
            <nav className="hidden md:block">
              <div className="flex flex-wrap items-center justify-end gap-4">
                <Link 
                  href="/about" 
                  className={`px-6 py-4 rounded-md hover:bg-purple-100 transition-colors text-2xl ${pathname === '/about' ? 'text-purple-800 font-medium' : ''}`}
                  aria-current={pathname === '/about' ? 'page' : undefined}
                  style={{ padding: '16px 24px', fontSize: '1.5rem' }}
                >
                  About
                </Link>
                
                {/* Services Section - Mega Menu Style */}
                <div className="group relative">
                  <button
                    className={`px-6 py-4 rounded-md hover:bg-purple-100 transition-colors text-2xl group-hover:bg-purple-100 ${pathname.includes('/services') || pathname.includes('/aesthetic-services') || pathname.includes('/laser-hair') || pathname.includes('/zo-skin-health') ? 'text-purple-800 font-medium' : ''}`}
                    style={{ padding: '16px 24px', fontSize: '1.5rem' }}
                  >
                    Services
                  </button>
                  
                  {/* Mega Menu - Shows on hover */}
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl z-20 rounded-md overflow-hidden hidden group-hover:block">
                    <div className="p-4">
                      <Link 
                        href="/aesthetic-services" 
                        className={`block py-3 text-xl hover:text-purple-800 ${pathname === '/aesthetic-services' ? 'text-purple-800 font-medium' : ''}`}
                        style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '1.25rem' }}
                      >
                        Aesthetic Services
                      </Link>
                      
                      <Link 
                        href="/laser-hair" 
                        className={`block py-3 text-xl hover:text-purple-800 ${pathname === '/laser-hair' ? 'text-purple-800 font-medium' : ''}`}
                        style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '1.25rem' }}
                      >
                        Laser Hair
                      </Link>
                      
                      <Link 
                        href="/zo-skin-health" 
                        className={`block py-3 text-xl hover:text-purple-800 ${pathname === '/zo-skin-health' ? 'text-purple-800 font-medium' : ''}`}
                        style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '1.25rem' }}
                      >
                        ZO Skin Health
                      </Link>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/financing" 
                  className={`px-6 py-4 rounded-md hover:bg-purple-100 transition-colors text-2xl ${pathname === '/financing' ? 'text-purple-800 font-medium' : ''}`}
                  aria-current={pathname === '/financing' ? 'page' : undefined}
                  style={{ padding: '16px 24px', fontSize: '1.5rem' }}
                >
                  Financing
                </Link>
                
                <Link 
                  href="/gift-cards" 
                  className={`px-6 py-4 rounded-md hover:bg-purple-100 transition-colors text-2xl ${pathname === '/gift-cards' ? 'text-purple-800 font-medium' : ''}`}
                  aria-current={pathname === '/gift-cards' ? 'page' : undefined}
                  style={{ padding: '16px 24px', fontSize: '1.5rem' }}
                >
                  Gift Cards
                </Link>
                
                <Link 
                  href="/contact" 
                  className={`px-6 py-4 rounded-md hover:bg-purple-100 transition-colors text-2xl ${pathname === '/contact' ? 'text-purple-800 font-medium' : ''}`}
                  aria-current={pathname === '/contact' ? 'page' : undefined}
                  style={{ padding: '16px 24px', fontSize: '1.5rem' }}
                >
                  Contact
                </Link>
                
                <Link 
                  href="/book" 
                  className="ml-4 px-8 py-4 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-colors font-medium text-2xl"
                  style={{ padding: '16px 32px', fontSize: '1.5rem', marginLeft: '16px' }}
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="pt-20 pb-6 h-full overflow-y-auto">
              <div className="container mx-auto px-8">
                {/* Close button */}
                <button 
                  className="absolute top-8 right-8 p-4 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  style={{ padding: '16px', top: '32px', right: '32px' }}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '40px', height: '40px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Mobile menu links - Simplified with section headers */}
                <nav className="space-y-6">
                  <Link 
                    href="/about" 
                    className="block py-5 text-3xl font-medium border-b border-gray-200"
                    style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '2rem' }}
                  >
                    About
                  </Link>
                  
                  {/* Services Section - with clear section header */}
                  <div>
                    <h2 className="py-5 text-3xl font-medium border-b border-gray-200 text-purple-800"
                        style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '2rem' }}>
                      Services
                    </h2>
                    
                    <div className="py-4 pl-6">
                      <Link 
                        href="/aesthetic-services" 
                        className="block py-4 text-2xl"
                        style={{ paddingTop: '16px', paddingBottom: '16px', fontSize: '1.5rem' }}
                      >
                        Aesthetic Services
                      </Link>
                      
                      <Link 
                        href="/laser-hair" 
                        className="block py-4 text-2xl"
                        style={{ paddingTop: '16px', paddingBottom: '16px', fontSize: '1.5rem' }}
                      >
                        Laser Hair
                      </Link>
                      
                      <Link 
                        href="/zo-skin-health" 
                        className="block py-4 text-2xl"
                        style={{ paddingTop: '16px', paddingBottom: '16px', fontSize: '1.5rem' }}
                      >
                        ZO Skin Health
                      </Link>
                    </div>
                  </div>
                  
                  <Link 
                    href="/financing" 
                    className="block py-5 text-3xl font-medium border-b border-gray-200"
                    style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '2rem' }}
                  >
                    Financing
                  </Link>
                  
                  <Link 
                    href="/gift-cards" 
                    className="block py-5 text-3xl font-medium border-b border-gray-200"
                    style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '2rem' }}
                  >
                    Gift Cards
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="block py-5 text-3xl font-medium border-b border-gray-200"
                    style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '2rem' }}
                  >
                    Contact
                  </Link>
                  
                  <Link 
                    href="/book" 
                    className="block py-5 mt-6 bg-purple-800 text-white text-center rounded-md text-3xl font-medium"
                    style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '2rem', marginTop: '24px' }}
                  >
                    Book Now
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
