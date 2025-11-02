import { Link } from 'react-router-dom';
import { Monitor, Search, Palette, ShoppingCart, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Helmet } from 'react-helmet';

export default function WhatWeOfferPage() {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: 'Website Design & Development',
      color: 'blue',
      subcategories: [
        {
          title: 'Mobile/Tablet/Desktop Responsive',
          description: 'Ensure your website looks great and functions perfectly on all devices'
        },
        {
          title: 'Fast-Loading & SEO-Friendly',
          description: 'Boost visibility and user satisfaction with quick-loading, SEO-optimized websites'
        }
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-green-600" />,
      title: 'SEO & Local Listings',
      color: 'green',
      subcategories: [
        {
          title: 'On-Page Optimization',
          description: 'Enhance visibility with expert on-page SEO, optimized content, structure, and tags'
        },
        {
          title: 'Google Maps, Yelp, and Local Citations',
          description: 'Get found by local customers with optimized business listings on Google Maps, Yelp, and directories'
        }
      ]
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: 'Logo Design & Branding',
      color: 'purple',
      subcategories: [
        {
          title: 'Custom Logos',
          description: 'Stand out with professionally designed, one-of-a-kind logos tailored to your brand'
        },
        {
          title: 'Brand Kits',
          description: 'Get a full brand identity package for consistent branding everywhere'
        },
        {
          title: 'Social Media Kits',
          description: 'Stand out on social with branded templates and graphics for all platforms'
        }
      ]
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-600" />,
      title: 'E-Commerce Solutions',
      color: 'orange',
      subcategories: [
        {
          title: 'WooCommerce, Shopify',
          description: "Build and customize your online store on world's leading platforms"
        },
        {
          title: 'Payment Integration',
          description: 'Secure, seamless payment processing for credit cards, digital wallets, and more'
        },
        {
          title: 'Product Upload Help',
          description: "Save time, we'll help upload and organize your products accurately"
        }
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-red-600" />,
      title: 'Custom Functionality',
      color: 'red',
      subcategories: [
        {
          title: 'IDX Real Estate Integration',
          description: 'Seamlessly display MLS property listings with full IDX integration'
        },
        {
          title: 'Booking Systems',
          description: 'Streamline appointment scheduling with easy-to-use, fully integrated booking system'
        },
        {
          title: 'Online Forms, CRM Hooks',
          description: 'Collect leads with custom forms connected directly to your CRM'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>What We Offer | Michigan Digital Foundry - Warren MI Digital Marketing Services</title>
        <meta name="description" content="Complete digital marketing services for Metro Detroit businesses. Website design, SEO, branding, e-commerce, and custom development in Warren, Detroit, Troy, Sterling Heights." />
      </Helmet>
      
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Everything Your Business Needs To <span className="text-orange-500">Dominate Online</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              From website design to SEO, branding to e-commerce—we offer comprehensive digital solutions tailored for Metro Detroit businesses.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="p-8 lg:p-12 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon & Title */}
                    <div className="lg:w-1/3">
                      <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-4 ${
                        service.color === 'blue' ? 'bg-blue-100' :
                        service.color === 'green' ? 'bg-green-100' :
                        service.color === 'purple' ? 'bg-purple-100' :
                        service.color === 'orange' ? 'bg-orange-100' :
                        'bg-red-100'
                      }`}>
                        {service.icon}
                      </div>
                      <h2 className="text-3xl mb-3 text-gray-900">{service.title}</h2>
                    </div>

                    {/* Subcategories */}
                    <div className="lg:w-2/3 space-y-6">
                      {service.subcategories.map((sub, subIndex) => (
                        <div key={subIndex} className="border-l-4 border-orange-600 pl-6">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="text-xl text-gray-900 mb-2">{sub.title}</h3>
                              <p className="text-gray-600">{sub.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready To Get Started?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Let's discuss which services are right for your business. Free consultation, no pressure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg group">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="text-lg mt-8">
              Or call us: <a href="tel:3132512940" className="underline hover:text-orange-200">(313) 251-2940</a>
            </div>
            <div className="text-orange-200 mt-4">Serving Warren, Detroit, Troy, Sterling Heights & All Metro Detroit</div>
          </div>
        </section>
      </div>
    </>
  );
}
