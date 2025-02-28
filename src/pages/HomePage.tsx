import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Star } from 'lucide-react';

const HomePage = () => {
  // Sample gigs data
  const popularGigs = [
    {
      id: 1,
      title: "I will design modern minimalist logo design",
      price: 25,
      rating: 4.9,
      reviews: 2543,
      seller: {
        name: "JohnDesigns",
        level: "Level 2 Seller",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 2,
      title: "I will create custom WordPress website design",
      price: 120,
      rating: 4.8,
      reviews: 1876,
      seller: {
        name: "WebMaster",
        level: "Top Rated Seller",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "I will be your social media manager and content creator",
      price: 150,
      rating: 4.7,
      reviews: 1243,
      seller: {
        name: "SocialPro",
        level: "Level 2 Seller",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 4,
      title: "I will create stunning 3D animation and visual effects",
      price: 200,
      rating: 5.0,
      reviews: 987,
      seller: {
        name: "3DWizard",
        level: "Top Rated Seller",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 5,
      title: "I will write SEO optimized blog articles and content",
      price: 60,
      rating: 4.9,
      reviews: 1432,
      seller: {
        name: "ContentQueen",
        level: "Level 2 Seller",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "I will develop a full-stack web application",
      price: 350,
      rating: 4.8,
      reviews: 756,
      seller: {
        name: "CodeMaster",
        level: "Top Rated Seller",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 7,
      title: "I will create professional voice over in English",
      price: 45,
      rating: 4.9,
      reviews: 2134,
      seller: {
        name: "VoiceArtist",
        level: "Level 2 Seller",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 8,
      title: "I will translate your content from English to Spanish",
      price: 30,
      rating: 4.7,
      reviews: 1543,
      seller: {
        name: "LinguaPro",
        level: "Level 1 Seller",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
    }
  ];

  // Popular services categories
  const popularServices = [
    { name: "Logo Design", icon: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "WordPress", icon: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "Voice Over", icon: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "Video Editing", icon: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "Social Media", icon: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "SEO", icon: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "Illustration", icon: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { name: "Translation", icon: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find the perfect <span className="italic">freelance</span> services for your business
              </h1>
              <div className="relative max-w-xl">
                <input
                  type="text"
                  placeholder="Search for any service..."
                  className="w-full border border-gray-300 rounded-md py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <button className="absolute inset-y-0 right-0 px-4 py-3 bg-green-500 text-white rounded-r-md">
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap">
                <span className="text-gray-600 mr-2">Popular:</span>
                <div className="flex flex-wrap">
                  <a href="#" className="text-gray-700 hover:underline mr-4 mb-2">Website Design</a>
                  <a href="#" className="text-gray-700 hover:underline mr-4 mb-2">WordPress</a>
                  <a href="#" className="text-gray-700 hover:underline mr-4 mb-2">Logo Design</a>
                  <a href="#" className="text-gray-700 hover:underline mb-2">Video Editing</a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                alt="Freelancers working" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-500 mb-6">Trusted by:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <span className="text-gray-400 font-bold text-xl">FACEBOOK</span>
              <span className="text-gray-400 font-bold text-xl">GOOGLE</span>
              <span className="text-gray-400 font-bold text-xl">NETFLIX</span>
              <span className="text-gray-400 font-bold text-xl">P&G</span>
              <span className="text-gray-400 font-bold text-xl">PAYPAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Professional Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularServices.map((service, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={service.icon} 
                    alt={service.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                    <div>
                      <p className="text-white text-sm">Most popular in</p>
                      <h3 className="text-white font-bold">{service.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How Fiverr Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-2xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Search for a service</h3>
              <p className="text-gray-600">Find the perfect service for your business from our marketplace.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-2xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a freelancer</h3>
              <p className="text-gray-600">Browse profiles, reviews, and portfolios to find the perfect match.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-2xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get work done</h3>
              <p className="text-gray-600">Communicate directly with your freelancer and get quality work delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Gigs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recently Viewed & More</h2>
            <Link to="/" className="text-green-500 hover:text-green-600 flex items-center">
              See More <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularGigs.map((gig) => (
              <Link to={`/gig/${gig.id}`} key={gig.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={gig.image} 
                    alt={gig.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src={gig.seller.avatar} 
                      alt={gig.seller.name} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="font-medium text-sm">{gig.seller.name}</p>
                      <p className="text-xs text-gray-500">{gig.seller.level}</p>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mb-2 line-clamp-2">{gig.title}</h3>
                  <div className="flex items-center text-sm text-yellow-500 mb-3">
                    <Star size={14} className="fill-current" />
                    <span className="ml-1 text-gray-700">{gig.rating}</span>
                    <span className="ml-1 text-gray-500">({gig.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">Starting at</p>
                    <p className="font-bold">${gig.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Fiverr Business Solutions</h2>
              <p className="text-gray-300 mb-6">Advanced solutions and professional talent for businesses</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <p>Connect to freelancers with proven business experience</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <p>Get matched with the perfect talent by a customer success manager</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-green-400">✓</div>
                  <p>Manage teamwork and boost productivity with one powerful workspace</p>
                </li>
              </ul>
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-medium">
                Explore Fiverr Business
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Business team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Robert Johnson</h3>
                  <p className="text-sm text-gray-500">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Working with freelancers on Fiverr has been an amazing experience. The talent pool is incredible, and we've found some long-term partners for our business."</p>
              <div className="flex items-center mt-4 text-yellow-500">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Sarah Williams</h3>
                  <p className="text-sm text-gray-500">Marketing Director, BrandGrow</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The quality of work I've received on Fiverr has consistently exceeded my expectations. It's my go-to platform for all creative needs."</p>
              <div className="flex items-center mt-4 text-yellow-500">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-gray-500">Founder, DigitalNomad</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"As a small business owner, Fiverr has been a game-changer. I can access professional services at affordable rates and scale my business effectively."</p>
              <div className="flex items-center mt-4 text-yellow-500">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Find the talent needed to get your business growing</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-md font-medium text-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;