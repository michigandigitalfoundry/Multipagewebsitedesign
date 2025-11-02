import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Helmet } from 'react-helmet';

export default function ContactPage() {

  return (
    <>
      <Helmet>
        <title>Contact Us | Michigan Digital Foundry - Warren MI Digital Marketing Agency</title>
        <meta name="description" content="Contact Michigan Digital Foundry in Warren, MI. Call (313) 251-2940 for website design, SEO, and digital marketing services across Metro Detroit." />
      </Helmet>
      
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Let's <span className="text-orange-500">Grow Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to get more customers? Reach out and let's build a custom growth plan for your Metro Detroit business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're here to answer your questions and help you grow. Call, email, or fill out the form and we'll respond within 24 hours.
              </p>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">Phone</h3>
                      <a href="tel:3132512940" className="text-orange-600 hover:text-orange-700 text-xl">
                        (313) 251-2940
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Mon-Fri: 9am-6pm EST</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                      <a 
                        href="mailto:info.michigandigitalfoundry@gmail.com" 
                        className="text-blue-600 hover:text-blue-700 break-all"
                      >
                        info.michigandigitalfoundry@gmail.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">Location</h3>
                      <p className="text-gray-600">Warren, Michigan</p>
                      <p className="text-sm text-gray-600 mt-1">Serving All Metro Detroit</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: By Appointment</p>
                    </div>
                  </div>
                </Card>
              </div>


            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h3 className="text-2xl mb-6 text-gray-900">Send Us A Message</h3>
                
                <form action="https://formspree.io/f/xvgvvjjq" method="POST" className="space-y-6">
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
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="Your Business Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6"
                  >
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours. Usually much faster.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Proudly Serving <span className="text-orange-600">Metro Detroit</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're your local digital marketing partner, helping businesses across Warren, Detroit, Troy, and all Metro Detroit communities grow online.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Warren', 'Detroit', 'Troy', 'Sterling Heights', 'Royal Oak',
              'Madison Heights', 'Hazel Park', 'Ferndale', 'Southfield',
              'Dearborn', 'Livonia', 'Westland', 'Macomb County',
              'Oakland County', 'Wayne County'
            ].map((city) => (
              <div
                key={city}
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-gray-700"
              >
                {city}
              </div>
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
            Call us now or schedule a free consultation to discuss your growth plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3132512940">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                <Phone className="w-5 h-5 mr-2" />
                Call (313) 251-2940
              </Button>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
