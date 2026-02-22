import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-nkp-dark text-white pt-16 pb-8 border-b-8 border-nkp-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/WhatsApp_Image_2026-02-21_at_10.51.43_AM.jpg"
                alt="NKP Consulting Logo"
                className="h-12 w-auto bg-white rounded-full p-1" />

              <span className="font-heading font-bold text-xl">
                NKP Consulting
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre partenaire de confiance pour la formation professionnelle,
              le conseil et les services numériques au Cameroun.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook">

                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram">

                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn">

                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-nkp-light">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-nkp-light">
              Nos Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  Secrétariat Bureautique
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  Impôts & Fiscalité
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  Internet & Cybercafé
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors text-sm">

                  Formations Professionnelles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-nkp-light">
              Contactez-nous
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-nkp-blue mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-nkp-blue mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+237 699 00 00 00</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-nkp-blue mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  nkpconsulting@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NKP Consulting SARL. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>);

}