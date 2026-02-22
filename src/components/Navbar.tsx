import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Accueil',
    path: '/'
  },
  {
    name: 'À propos',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'FAQ',
    path: '/faq'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/WhatsApp_Image_2026-02-21_at_10.51.43_AM.jpg"
              alt="NKP Consulting Logo"
              className="h-12 w-auto" />

            <span className="font-heading font-bold text-xl text-nkp-dark hidden sm:block">
              NKP Consulting
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-nkp-blue ${location.pathname === link.path ? 'text-nkp-blue font-semibold' : 'text-gray-600'}`}>

                {link.name}
              </Link>
            )}
            <Link to="/contact">
              <Button size="sm">S'inscrire</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-nkp-blue focus:outline-none"
              aria-label="Toggle menu">

              {isOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen &&
      <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-nkp-light text-nkp-blue' : 'text-gray-700 hover:bg-gray-50 hover:text-nkp-blue'}`}>

                {link.name}
              </Link>
          )}
            <div className="pt-4">
              <Link to="/contact" className="block w-full">
                <Button fullWidth>S'inscrire maintenant</Button>
              </Link>
            </div>
          </div>
        </div>
      }
    </nav>);

}