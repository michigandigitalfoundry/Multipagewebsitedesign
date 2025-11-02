import { CheckCircle, Send, DollarSign } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Helmet } from 'react-helmet';

export default function QuotePage() {
  const services = [
    {
      id: 'website',
      name: 'Custom Website',
      price: '$2,500',
      description: 'Professional website that converts visitors into customers'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Website',
      price: '$2,500+',
      description: 'Online store with shopping cart and payment processing'
    },
    {
      id: 'booking',
      name: 'Booking System Website',
      price: '$2,500+',
      description: 'Website with online scheduling and appointment booking'
    },
    {
      id: 'seo',
      name: 'Local SEO',
      price: '$1,000/month',
      description: 'Rank #1 in Google for local searches in Metro Detroit'
    },
    {
      id: 'socialMedia',
      name: 'Social Media Management',
      price: '$499/month',
      description: 'Daily posts on 4 platforms with professional content'
    },
    {
      id: 'branding',
      name: 'Logo & Branding',
      price: 'Custom Quote',
      description: 'Custom logo design and complete brand identity'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Get A Quote | Michigan Digital Foundry - Warren MI Digital Marketing</title>
        <meta name="description" content="Request a free quote for website design, SEO, and digital marketing services in Warren MI. Custom plans for Metro Detroit businesses. Call (313) 251-2940" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Get Your Free <span className="text-orange-500">Growth Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your business and we'll create a custom plan to get you more customers. No pressure, just a clear roadmap to growth.
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Price Estimator Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl mb-4 text-gray-900">Our Services</h3>
                  <div className="space-y-4 mb-6">
                    {services.map((service) => (
                      <div key={service.id} className="border-b border-gray-200 pb-3 last:border-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-gray-900">{service.name}</h4>
                          <span className="text-orange-600 whitespace-nowrap ml-2">{service.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-orange-600 mb-2">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-sm">Free Consultation</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      We'll provide a detailed quote based on your specific needs within 24 hours.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Quote Request Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-3xl mb-2 text-gray-900">Request Your Custom Quote</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you with a detailed proposal within 24 hours.</p>
                  
                  <form action="https://formspree.io/f/xvgvvjjq" method="POST" className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-xl mb-4 text-gray-900">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                            Your Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="John Smith"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                            Phone Number *
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="(313) 123-4567"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>

                        <div>
                          <label htmlFor="businessName" className="block text-sm mb-2 text-gray-700">
                            Business Name *
                          </label>
                          <input
                            id="businessName"
                            name="businessName"
                            type="text"
                            required
                            placeholder="ABC Services"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="website" className="block text-sm mb-2 text-gray-700">
                            Current Website (if any)
                          </label>
                          <input
                            id="website"
                            name="website"
                            type="url"
                            placeholder="https://yourwebsite.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Services Selection */}
                    <div>
                      <h3 className="text-xl mb-4 text-gray-900">What Services Are You Interested In? *</h3>
                      <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
                      
                      <div className="space-y-3">
                        {services.map((service) => (
                          <label
                            key={service.id}
                            className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-600 transition-colors"
                          >
                            <input
                              type="checkbox"
                              name="services[]"
                              value={service.name}
                              className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <span className="text-gray-900">{service.name}</span>
                                <span className="text-orange-600 text-sm whitespace-nowrap ml-2">{service.price}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label htmlFor="projectDetails" className="block text-sm mb-2 text-gray-700">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        required
                        placeholder="What are your goals? What problems are you trying to solve? Any specific features or requirements?"
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      />
                    </div>

                    {/* Timeline & Budget */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="timeline" className="block text-sm mb-2 text-gray-700">
                          Desired Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">ASAP (1-2 weeks)</option>
                          <option value="soon">Soon (3-4 weeks)</option>
                          <option value="flexible">Flexible (1-2 months)</option>
                          <option value="planning">Just Planning</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm mb-2 text-gray-700">
                          Estimated Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-3k">Under $3,000</option>
                          <option value="3k-5k">$3,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-plus">$10,000+</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6"
                    >
                      Request Free Quote <Send className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      We'll respond with a detailed proposal within 24 hours. Usually much faster.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
              Why Metro Detroit Businesses <span className="text-orange-600">Choose Us</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl mb-2 text-gray-900">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Most websites launched within 2-3 weeks. We move fast so you can start getting customers sooner.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl mb-2 text-gray-900">Local Expertise</h3>
                <p className="text-gray-600">
                  We understand Metro Detroit. We know your customers and how to reach them effectively.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl mb-2 text-gray-900">Proven Results</h3>
                <p className="text-gray-600">
                  Our clients see 3-4X more leads within 90 days. Real results, not empty promises.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl mb-6">
              Prefer To Talk First?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Call us now for a free consultation. We'll discuss your needs and provide guidance—no commitment required.
            </p>
            
            <div className="text-2xl mb-4">
              <a href="tel:3132512940" className="underline hover:text-orange-200">(313) 251-2940</a>
            </div>
            <div className="text-orange-200">Warren, MI • Serving All Metro Detroit</div>
          </div>
        </section>
      </div>
    </>
  );
}
