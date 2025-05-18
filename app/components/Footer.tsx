'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo/logo.webp"
                width={150}
                height={50}
                alt="Meerami"
                className="w-32"
              />
            </div>
            <p className="text-sm">
              Creating innovative solutions for tomorrow's challenges. We're dedicated to delivering excellence in every project.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-white transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: swizel.meraami@gmail.com</li>
              <li>Available 24/7 for your queries</li>
              <li className="pt-4 text-blue-400 hover:text-blue-300 transition-colors">
                <Link href="/contact">
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Meerami. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 