import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Globe, Bell, MessageSquare, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { name: 'Graphics & Design', subcategories: ['Logo Design', 'Brand Style Guides', 'Business Cards'] },
    { name: 'Digital Marketing', subcategories: ['Social Media', 'SEO', 'Email Marketing'] },
    { name: 'Writing & Translation', subcategories: ['Articles & Blog Posts', 'Translation', 'Proofreading'] },
    { name: 'Video & Animation', subcategories: ['Video Editing', 'Animation', 'Short Video Ads'] },
    { name: 'Music & Audio', subcategories: ['Voice Over', 'Mixing & Mastering', 'Producers & Composers'] },
    { name: 'Programming & Tech', subcategories: ['WordPress', 'Website Development', 'Mobile Apps'] },
    { name: 'Business', subcategories: ['Virtual Assistant', 'Market Research', 'Business Plans'] },
    { name: 'Lifestyle', subcategories: ['Online Tutoring', 'Gaming', 'Astrology & Psychics'] },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-green-500">
              fiverr<span className="text-gray-700">.</span>
            </Link>
          </div>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Find services"
                className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <button className="absolute inset-y-0 right-0 px-4 py-2 bg-green-500 text-white rounded-r-md">
                Search
              </button>
            </div>
          </div>

          {/* Navigation - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Business solutions</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Explore</Link>
            <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
              <Globe size={18} className="mr-1" />
              <span>English</span>
            </div>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Become a Seller</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Sign in</Link>
            <Link to="/" className="px-5 py-2 border border-green-500 text-green-500 rounded hover:bg-green-50">
              Join
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center space-x-4">
            <Search size={24} className="text-gray-600" />
            <Bell size={24} className="text-gray-600" />
            <MessageSquare size={24} className="text-gray-600" />
            <User size={24} className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Categories Navigation - Hidden on Mobile */}
      <div className="hidden lg:block border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between py-3 text-sm">
            {categories.map((category) => (
              <li 
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900">
                  {category.name}
                  <ChevronDown size={16} className="ml-1" />
                </div>
                
                {/* Dropdown Menu */}
                {activeCategory === category.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    {category.subcategories.map((subcategory) => (
                      <Link 
                        key={subcategory}
                        to="/"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full shadow-lg z-50">
          <div className="px-4 py-3 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find services"
                className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-gray-900">Join</Link>
              <Link to="/" className="block text-gray-600 hover:text-gray-900">Sign in</Link>
              <Link to="/" className="block text-gray-600 hover:text-gray-900">Browse Categories</Link>
              <Link to="/" className="block text-gray-600 hover:text-gray-900">Explore</Link>
              <Link to="/" className="block text-gray-600 hover:text-gray-900">Business solutions</Link>
              <Link to="/" className="block text-gray-600 hover:text-gray-900">Become a Seller</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;