import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin as LinkedIn, Instagram, Pointer as Pinterest, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Categories */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Graphics & Design</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Digital Marketing</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Writing & Translation</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Video & Animation</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Music & Audio</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Programming & Tech</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Business</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Lifestyle</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Press & News</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Partnerships</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Intellectual Property Claims</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Help & Support</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Trust & Safety</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Selling on Fiverr</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Buying on Fiverr</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Events</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Forum</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Community Standards</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Podcast</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Affiliates</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Invite a Friend</Link></li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Business Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Fiverr Business</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Fiverr Pro</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Fiverr Studios</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Fiverr Logo Maker</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Fiverr Guides</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Get Inspired</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">ClearVoice</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <div className="mr-6 mb-4 md:mb-0">
                <Link to="/" className="text-2xl font-bold text-green-500">
                  fiverr<span className="text-gray-700">.</span>
                </Link>
              </div>
              <p className="text-gray-500 text-sm">© Fiverr International Ltd. 2023</p>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="flex space-x-4 mb-4 md:mb-0 md:mr-6">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <LinkedIn size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <Pinterest size={20} />
                </a>
              </div>

              <div className="flex items-center text-gray-500">
                <Globe size={20} className="mr-2" />
                <span className="mr-2">English</span>
                <span>$ USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;