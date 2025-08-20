"use client"
// components/Navbar.tsx
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { serviceCategories } from '@/data/services';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const pathname = usePathname();

  // Reset menu state when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  }, [pathname]);

  // Memoized toggle handlers to prevent unnecessary re-renders
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
    setActiveSubmenu(null);
  }, []);

  const toggleSubmenu = useCallback((id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSubmenu(prev => prev === id ? null : id);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-primary">
            MC Aesthetics
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/about" 
              className="px-3 py-2 hover:text-primary"
              aria-current={pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
            
            {/* Aesthetic Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="px-3 py-2 flex items-center hover:text-primary"
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                <span>Aesthetic Services</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'services' && (
                <div 
                  className="absolute left-0 mt-1 w-56 bg-white border shadow-md z-10 rounded-md overflow-hidden"
                  role="menu"
                >
                  <Link 
                    href="/aesthetic-services" 
                    className="block px-4 py-2 hover:bg-gray-50 border-b"
                    role="menuitem"
                  >
                    All Aesthetic Services
                  </Link>
                  
                  {serviceCategories.map((category) => (
                    <div key={category.id} className="relative">
                      {category.subServices && category.subServices.length > 0 ? (
                        <>
                          <button
                            onClick={(e) => toggleSubmenu(category.id, e)}
                            className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-50 border-b"
                            aria-expanded={activeSubmenu === category.id}
                            aria-haspopup="true"
                            role="menuitem"
                          >
                            <span>{category.name}</span>
                            <svg 
                              className={`w-4 h-4 transition-transform ${activeSubmenu === category.id ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          
                          {activeSubmenu === category.id && (
                            <div 
                              className="absolute left-full top-0 w-56 bg-white border shadow-md rounded-md overflow-hidden"
                              role="menu"
                            >
                              {category.subServices.map((subService) => (
                                <Link 
                                  key={subService.id}
                                  href={`/aesthetic-services/${category.slug}/${subService.slug}`}
                                  className="block px-4 py-2 hover:bg-gray-50 border-b"
                                  role="menuitem"
                                >
                                  {subService.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link 
                          href={`/aesthetic-services/${category.slug}`}
                          className="block px-4 py-2 hover:bg-gray-50 border-b"
                          role="menuitem"
                        >
                          {category.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href="/laser-hair" 
              className="px-3 py-2 hover:text-primary"
              aria-current={pathname === '/laser-hair' ? 'page' : undefined}
            >
              Laser Hair
            </Link>
            
            <Link 
              href="/zo-skin-health" 
              className="px-3 py-2 hover:text-primary"
              aria-current={pathname === '/zo-skin-health' ? 'page' : undefined}
            >
              ZO Skin Health
            </Link>
            
            <Link 
              href="/financing" 
              className="px-3 py-2 hover:text-primary"
              aria-current={pathname === '/financing' ? 'page' : undefined}
            >
              Financing
            </Link>
            
            <Link 
              href="/gift-cards" 
              className="px-3 py-2 hover:text-primary"
              aria-current={pathname === '/gift-cards' ? 'page' : undefined}
            >
              Gift Cards
            </Link>
            
            <Link 
              href="/contact" 
              className="px-3 py-2 hover:text-primary"
              aria-current={pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
            
            <Link 
              href="/book" 
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <Link 
            href="/about" 
            className="block px-4 py-2 border-b hover:bg-gray-50"
            aria-current={pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
          
          <button
            onClick={() => toggleDropdown('mobile-services')}
            className="flex items-center justify-between w-full px-4 py-2 border-b hover:bg-gray-50"
            aria-expanded={activeDropdown === 'mobile-services'}
          >
            <span>Aesthetic Services</span>
            <svg 
              className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeDropdown === 'mobile-services' && (
            <div className="bg-gray-50">
              <Link 
                href="/aesthetic-services" 
                className="block px-6 py-2 border-b hover:bg-gray-100"
              >
                All Aesthetic Services
              </Link>
              
              {serviceCategories.map((category) => (
                <div key={category.id}>
                  {category.subServices && category.subServices.length > 0 ? (
                    <>
                      <button
                        onClick={(e) => toggleSubmenu(category.id, e)}
                        className="flex items-center justify-between w-full px-6 py-2 border-b hover:bg-gray-100"
                        aria-expanded={activeSubmenu === category.id}
                      >
                        <span>{category.name}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform ${activeSubmenu === category.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeSubmenu === category.id && (
                        <div className="bg-gray-100">
                          {category.subServices.map((subService) => (
                            <Link 
                              key={subService.id}
                              href={`/aesthetic-services/${category.slug}/${subService.slug}`}
                              className="block px-8 py-2 border-b hover:bg-gray-200 text-sm"
                            >
                              {subService.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={`/aesthetic-services/${category.slug}`}
                      className="block px-6 py-2 border-b hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
          
          <Link 
            href="/laser-hair" 
            className="block px-4 py-2 border-b hover:bg-gray-50"
            aria-current={pathname === '/laser-hair' ? 'page' : undefined}
          >
            Laser Hair
          </Link>
          
          <Link 
            href="/zo-skin-health" 
            className="block px-4 py-2 border-b hover:bg-gray-50"
            aria-current={pathname === '/zo-skin-health' ? 'page' : undefined}
          >
            ZO Skin Health
          </Link>
          
          <Link 
            href="/financing" 
            className="block px-4 py-2 border-b hover:bg-gray-50"
            aria-current={pathname === '/financing' ? 'page' : undefined}
          >
            Financing
          </Link>
          
          <Link 
            href="/gift-cards" 
            className="block px-4 py-2 border-b hover:bg-gray-50"
            aria-current={pathname === '/gift-cards' ? 'page' : undefined}
          >
            Gift Cards
          </Link>
          
          <Link 
            href="/contact" 
            className="block px-4 py-2 border-b hover:bg-gray-50"
            aria-current={pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
          
          <Link 
            href="/book" 
            className="block px-4 py-2 text-primary font-medium hover:bg-gray-50"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
