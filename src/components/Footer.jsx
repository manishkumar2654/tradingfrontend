import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-xl font-bold text-blue-400 mb-2">TradeSmart</h2>
            <p className="text-gray-400 text-sm">
              TradeSmart is your trusted platform to access trading via Angel One SmartAPI.  
              Secure, fast, and reliable demo and live trading solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/login" className="hover:text-blue-400 transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/tokens" className="hover:text-blue-400 transition">
                  Tokens
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-400 transition">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/rms" className="hover:text-blue-400 transition">
                  Funds (RMS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-400">Email: support@tradesmart.com</p>
            <p className="text-sm text-gray-400">Phone: +91 72230 33012</p>
            <p className="text-sm text-gray-400">Address: Bhopal, Madhya Pradesh, India</p>
          </div>

          {/* Social Links / Advertisement */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-3 text-gray-400">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaGithub size={20} />
              </a>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-md border-l-4 border-blue-400 text-blue-700 text-sm">
              <strong>Tip:</strong> Use demo mode to practice trading safely before going live.
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} TradeSmart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
