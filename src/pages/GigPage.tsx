import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Check, Clock, ChevronDown, ChevronUp, Heart, Share2, Flag, MessageSquare } from 'lucide-react';

const GigPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  const [showMore, setShowMore] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('basic');

  // Sample gig data - in a real app, you would fetch this based on the ID
  const gig = {
    id: parseInt(id || '1'),
    title: "I will design modern minimalist logo design",
    description: "I will create a modern, minimalist, and professional logo design for your business or brand. With over 5 years of experience in graphic design, I specialize in creating clean, memorable logos that help businesses stand out in their industry. My designs are versatile and can be used across all your branding materials, from business cards to social media profiles.",
    price: {
      basic: 25,
      standard: 50,
      premium: 100
    },
    deliveryTime: {
      basic: 3,
      standard: 2,
      premium: 1
    },
    revisions: {
      basic: 1,
      standard: 3,
      premium: "Unlimited"
    },
    features: {
      basic: ["Logo in JPG & PNG", "High Resolution", "3D Mockup"],
      standard: ["Logo in JPG & PNG", "High Resolution", "3D Mockup", "Vector Files (AI, EPS, SVG)", "Source Files"],
      premium: ["Logo in JPG & PNG", "High Resolution", "3D Mockup", "Vector Files (AI, EPS, SVG)", "Source Files", "Social Media Kit", "Stationery Design"]
    },
    rating: 4.9,
    reviews: 2543,
    orders: 187,
    seller: {
      name: "JohnDesigns",
      level: "Level 2 Seller",
      memberSince: "Apr 2020",
      country: "United States",
      responseTime: "1 hour",
      languages: ["English", "Spanish"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    ],
    faqs: [
      {
        question: "Do you provide source files?",
        answer: "Yes, I provide all source files with Standard and Premium packages. This includes AI, EPS, and SVG vector files that can be scaled to any size without losing quality."
      },
      {
        question: "How many revisions do I get?",
        answer: "The Basic package includes 1 revision, Standard includes 3 revisions, and Premium includes unlimited revisions until you're completely satisfied with the design."
      },
      {
        question: "What information do you need to start?",
        answer: "To get started, I need your business name, a brief description of your business, your target audience, preferred colors (if any), and any specific design elements you'd like to include or avoid."
      },
      {
        question: "Can I use the logo for commercial purposes?",
        answer: "Absolutely! Once the project is completed and delivered, you own full commercial rights to the logo design."
      }
    ],
    reviews_list: [
      {
        id: 1,
        user: {
          name: "Emily Johnson",
          country: "United Kingdom",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        rating: 5,
        date: "2 weeks ago",
        comment: "Absolutely amazing work! John was very professional and delivered exactly what I was looking for. The logo perfectly represents my brand and I've already received compliments from my customers. Highly recommended!"
      },
      {
        id: 2,
        user: {
          name: "Michael Rodriguez",
          country: "Canada",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        rating: 5,
        date: "1 month ago",
        comment: "Great experience working with John. He understood my vision from the start and delivered a clean, professional logo that perfectly fits my business. Communication was excellent throughout the process."
      },
      {
        id: 3,
        user: {
          name: "Sarah Williams",
          country: "Australia",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        rating: 4,
        date: "2 months ago",
        comment: "Very satisfied with the final result. John was responsive and made all the requested revisions promptly. The only reason for 4 stars instead of 5 is that I would have liked more initial concepts to choose from, but the final design is excellent."
      }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(gig.images[0]);

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <span>FIVERR</span> &gt; <span>GRAPHICS & DESIGN</span> &gt; <span>LOGO DESIGN</span>
        </div>

        {/* Gig Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{gig.title}</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Gig Details */}
          <div className="lg:w-8/12">
            {/* Seller Info (Mobile Only) */}
            <div className="lg:hidden mb-6 flex items-center">
              <img 
                src={gig.seller.avatar} 
                alt={gig.seller.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{gig.seller.name}</h3>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 flex items-center mr-1">
                    <Star size={14} className="fill-current" /> {gig.rating}
                  </span>
                  <span className="text-gray-500">({gig.reviews})</span>
                </div>
              </div>
            </div>

            {/* Gig Images */}
            <div className="mb-8">
              <div className="mb-2">
                <img 
                  src={selectedImage} 
                  alt={gig.title} 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {gig.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`flex-shrink-0 cursor-pointer border-2 ${selectedImage === image ? 'border-green-500' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${gig.title} ${index + 1}`} 
                      className="w-24 h-16 object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Gig Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex space-x-8">
                <button 
                  className={`pb-4 font-medium ${activeTab === 'description' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`pb-4 font-medium ${activeTab === 'about' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('about')}
                >
                  About the Seller
                </button>
                <button 
                  className={`pb-4 font-medium ${activeTab === 'reviews' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
                <button 
                  className={`pb-4 font-medium ${activeTab === 'faqs' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('faqs')}
                >
                  FAQs
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">About This Gig</h2>
                  <div className="text-gray-700 mb-6">
                    <p className="mb-4">{gig.description}</p>
                    <p className="mb-4">My logo design process includes:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                      <li>Understanding your brand, target audience, and industry</li>
                      <li>Creating initial concepts based on your requirements</li>
                      <li>Refining the chosen concept with your feedback</li>
                      <li>Delivering final files in all formats needed for your business</li>
                    </ul>
                    <p>All packages include commercial usage rights, so you can use your logo anywhere for your business.</p>
                    
                    {showMore && (
                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">Why choose my services?</h3>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          <li>5+ years of professional design experience</li>
                          <li>Quick turnaround times</li>
                          <li>Excellent communication throughout the process</li>
                          <li>Satisfaction guaranteed or your money back</li>
                        </ul>
                        <p>I'm committed to providing high-quality designs that help your business stand out. If you have any questions before ordering, feel free to contact me!</p>
                      </div>
                    )}
                    
                    <button 
                      className="text-green-500 font-medium flex items-center mt-4"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? 'Show Less' : 'Show More'}
                      {showMore ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </button>
                  </div>
                </div>
              )}

              {/* About Seller Tab */}
              {activeTab === 'about' && (
                <div>
                  <div className="flex items-start mb-8">
                    <img 
                      src={gig.seller.avatar} 
                      alt={gig.seller.name} 
                      className="w-20 h-20 rounded-full mr-6"
                    />
                    <div>
                      <h2 className="text-xl font-bold mb-1">{gig.seller.name}</h2>
                      <p className="text-gray-600 mb-2">Logo Designer & Brand Identity Specialist</p>
                      <div className="flex items-center text-sm mb-4">
                        <span className="text-yellow-500 flex items-center mr-2">
                          <Star size={14} className="fill-current" /> {gig.rating}
                        </span>
                        <span className="text-gray-500">({gig.reviews} reviews)</span>
                      </div>
                      <button className="border border-gray-300 rounded px-4 py-2 text-sm font-medium hover:bg-gray-50">
                        Contact Me
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-b border-gray-200 py-6">
                    <div>
                      <h3 className="font-semibold mb-4">Seller Information</h3>
                      <ul className="space-y-3">
                        <li className="flex">
                          <span className="text-gray-500 w-32">From</span>
                          <span>{gig.seller.country}</span>
                        </li>
                        <li className="flex">
                          <span className="text-gray-500 w-32">Member since</span>
                          <span>{gig.seller.memberSince}</span>
                        </li>
                        <li className="flex">
                          <span className="text-gray-500 w-32">Avg. response time</span>
                          <span>{gig.seller.responseTime}</span>
                        </li>
                        <li className="flex">
                          <span className="text-gray-500 w-32">Languages</span>
                          <span>{gig.seller.languages.join(', ')}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">About Me</h3>
                      <p className="text-gray-700">
                        I'm a professional graphic designer with over 5 years of experience specializing in logo design and brand identity. I've worked with businesses of all sizes, from startups to established companies, helping them create memorable visual identities that resonate with their audience.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">{gig.reviews} Reviews</h2>
                    <div className="flex items-center mb-6">
                      <div className="mr-8">
                        <div className="flex items-center text-yellow-500 mb-1">
                          <Star size={24} className="fill-current mr-2" />
                          <span className="text-2xl font-bold text-gray-900">{gig.rating}</span>
                        </div>
                        <div className="text-sm text-gray-500">Overall Rating</div>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-500">5 Stars</span>
                            <span className="text-sm text-gray-500">95%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-500">4 Stars</span>
                            <span className="text-sm text-gray-500">4%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '4%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-500">3 Stars</span>
                            <span className="text-sm text-gray-500">1%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '1%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-500">2 Stars</span>
                            <span className="text-sm text-gray-500">0%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '0%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-500">1 Star</span>
                            <span className="text-sm text-gray-500">0%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '0%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {gig.reviews_list.map((review) => (
                      <div key={review.id} className="border-t border-gray-200 pt-6">
                        <div className="flex items-start">
                          <img 
                            src={review.user.avatar} 
                            alt={review.user.name} 
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between mb-2">
                              <h3 className="font-semibold">{review.user.name}</h3>
                              <div className="text-gray-500 text-sm">{review.date}</div>
                            </div>
                            <div className="flex items-center mb-1">
                              <div className="flex text-yellow-500 mr-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    size={14} 
                                    className={i < review.rating ? 'fill-current' : 'text-gray-300'} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.user.country}</span>
                            </div>
                            <p className="text-gray-700 mt-2">{review.comment}</p>
                            <div className="flex mt-4">
                              <button className="text-gray-500 text-sm flex items-center mr-4 hover:text-gray-700">
                                Helpful <span className="ml-1">(0)</span>
                              </button>
                              <button className="text-gray-500 text-sm flex items-center hover:text-gray-700">
                                Not Helpful <span className="ml-1">(0)</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs Tab */}
              {activeTab === 'faqs' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {gig.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="lg:w-4/12">
            <div className="sticky top-24">
              {/* Pricing Tabs */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="flex border-b">
                  <button 
                    className={`flex-1 py-3 font-medium text-center ${selectedPackage === 'basic' ? 'bg-white text-green-500 border-b-2 border-green-500' : 'bg-gray-50 text-gray-500'}`}
                    onClick={() => setSelectedPackage('basic')}
                  >
                    Basic
                  </button>
                  <button 
                    className={`flex-1 py-3 font-medium text-center ${selectedPackage === 'standard' ? 'bg-white text-green-500 border-b-2 border-green-500' : 'bg-gray-50 text-gray-500'}`}
                    onClick={() => setSelectedPackage('standard')}
                  >
                    Standard
                  </button>
                  <button 
                    className={`flex-1 py-3 font-medium text-center ${selectedPackage === 'premium' ? 'bg-white text-green-500 border-b-2 border-green-500' : 'bg-gray-50 text-gray-500'}`}
                    onClick={() => setSelectedPackage('premium')}
                  >
                    Premium
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg capitalize">{selectedPackage}</h3>
                    <span className="text-2xl font-bold">${gig.price[selectedPackage as keyof typeof gig.price]}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {selectedPackage === 'basic' 
                      ? 'A simple logo design with basic files' 
                      : selectedPackage === 'standard' 
                        ? 'Complete logo design with all necessary files' 
                        : 'Premium logo design with full branding package'}
                  </p>

                  <div className="flex items-center text-gray-700 mb-4">
                    <Clock size={16} className="mr-2" />
                    <span>{gig.deliveryTime[selectedPackage as keyof typeof gig.deliveryTime]} Day Delivery</span>
                  </div>

                  <div className="flex items-center text-gray-700 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>{gig.revisions[selectedPackage as keyof typeof gig.revisions]} Revision{selectedPackage !== 'basic' && 's'}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {gig.features[selectedPackage as keyof typeof gig.features].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded font-medium">
                    Continue (${gig.price[selectedPackage as keyof typeof gig.price]})
                  </button>

                  <div className="flex justify-center mt-4">
                    <button className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
                      <MessageSquare size={14} className="mr-1" />
                      Contact Seller
                    </button>
                  </div>
                </div>
              </div>

              {/* Seller Card */}
              <div className="hidden lg:block bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={gig.seller.avatar} 
                      alt={gig.seller.name} 
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{gig.seller.name}</h3>
                      <p className="text-gray-500 text-sm">{gig.seller.level}</p>
                      <button className="text-green-500 text-sm hover:underline mt-1">
                        Contact Me
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-b border-gray-200 py-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 text-sm mb-1">From</p>
                        <p className="font-medium">{gig.seller.country}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Member since</p>
                        <p className="font-medium">{gig.seller.memberSince}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Avg. response time</p>
                        <p className="font-medium">{gig.seller.responseTime}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Last delivery</p>
                        <p className="font-medium">1 day ago</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm">
                    I'm a professional graphic designer specializing in logo design and brand identity. Let me help you create a memorable visual identity for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Gigs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">People Who Viewed This Service Also Viewed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Sample related gigs - would be dynamically generated in a real app */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={`https://images.unsplash.com/photo-163${item}128221889-82ed6efebfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`} 
                    alt="Related gig" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src={`https://images.unsplash.com/photo-15${item}0648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
                      alt="Seller" 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="font-medium text-sm">DesignPro</p>
                      <p className="text-xs text-gray-500">Level 2 Seller</p>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium mb-2 line-clamp-2">I will create a professional logo design for your business</h3>
                  <div className="flex items-center text-sm text-yellow-500 mb-3">
                    <Star size={14} className="fill-current" />
                    <span className="ml-1 text-gray-700">4.8</span>
                    <span className="ml-1 text-gray-500">(1.2k)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">Starting at</p>
                    <p className="font-bold">${20 + item * 5}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigPage;