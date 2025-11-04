import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, Star, ArrowRight, Zap, Calendar, Users } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Helmet } from 'react-helmet';

export default function WarrenAreaPage() {
  const services = [
    {
      title: 'Website Design',
      price: '$2,500',
      description: 'Custom websites that convert visitors into customers',
      features: [
        'Mobile-optimized design',
        'Booking systems included',
        'Warren-focused SEO',
        'Fast hosting (1st year free)'
      ]
    },
    {
      title: 'Local SEO',
      price: '$800/month',
      description: 'Dominate Warren searches and get more customers',
      features: [
        'Google Business optimization',
        'Warren keyword targeting',
        'Review generation',
        'Monthly ranking reports'
      ]
    },
    {
      title: 'Social Media',
      price: '$499/month',
      description: 'Engage Warren customers on social media',
      features: [
        '12 custom posts per month',
        'Facebook & Instagram',
        'Community engagement',
        'Performance analytics'
      ]
    }
  ];

  const neighborhoods = [
    'Downtown Warren',
    'Warren Woods',
    'West Warren',
    'East Warren',
    'Groesbeck Corridor',
    'Van Dyke Area',
    'Mound Road Area',
    'Ryan Road Area'
  ];

  return (
    <>
      <Helmet>
        <title>Web Design & Digital Marketing Warren MI | Michigan Digital Foundry</title>
        <meta name="description" content="Get more customers with custom websites, local SEO & social media management in Warren, MI. Based locally. Call (313) 251-2940 for free consultation." />
        <meta property="og:title" content="Web Design & Digital Marketing Warren MI | Michigan Digital Foundry" />
        <meta property="og:description" content="Get more customers with custom websites, local SEO & social media management in Warren, MI. Based locally. Call (313) 251-2940 for free consultation." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500">Based in Warren, MI</span>
                </div>
                <h1 className="text-5xl md:text-6xl mb-6">
                  Web Design & Digital Marketing in <span className="text-orange-500">Warren, Michigan</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  We're right here in Warren, helping local businesses get more customers with professional websites, local SEO, and social media that actually works. Your neighbors trust us. You can too.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/quote">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                      Get Free Growth Plan
                    </Button>
                  </Link>
                  <a href="tel:3132512940">
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg w-full sm:w-auto">
                      <Phone className="w-5 h-5 mr-2" />
                      (313) 251-2940
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Warren-Based Agency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Fast Results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Proven Track Record</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="p-8 bg-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl text-gray-900">Warren's Digital Marketing Experts</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Based right here in Warren, we understand the local market. We know what Warren customers are searching for and how to get your business in front of them.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>50+ Warren Businesses</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                      <span>5.0 Rating</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
              Why Warren Businesses <span className="text-orange-600">Choose Us</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We're not some out-of-state agency. We're Warren locals who understand this market inside and out.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Warren-Based</h3>
                <p className="text-gray-600">We're right here in Warren. Meet face-to-face, not over Zoom with strangers.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Fast Results</h3>
                <p className="text-gray-600">Websites in 2 weeks. SEO results in 60 days. We move fast.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Local Expertise</h3>
                <p className="text-gray-600">We know Warren. We know what works here. Your competitors don't stand a chance.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Proven Results</h3>
                <p className="text-gray-600">Our Warren clients get 3-5X more customers. That's not a guess, it's a guarantee.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
              Our Services for <span className="text-orange-600">Warren Businesses</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl mb-2 text-gray-900">{service.title}</h3>
                  <div className="text-3xl mb-4 text-orange-600">{service.price}</div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/quote">
                <Button className="bg-orange-600 hover:bg-orange-700 px-10 py-6 text-xl">
                  Get Free Growth Plan
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12">
              Serving All of <span className="text-orange-500">Warren</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {neighborhoods.map((area) => (
                <div key={area} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  {area}
                </div>
              ))}
            </div>
            
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              From Van Dyke to Mound Road, from 8 Mile to 14 Mile, we serve all Warren businesses. If you're in Warren, we're your digital marketing partner.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
              Warren Business Success Story
            </h2>
            
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-xl text-gray-900">Warren Auto Detailing Business</div>
                  <div className="text-sm text-gray-600">Van Dyke Corridor</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 border border-orange-200">
                  <div className="text-sm text-gray-600 mb-2">BEFORE</div>
                  <div className="text-gray-900 mb-2">5-8 bookings per month</div>
                  <div className="text-gray-600">Page 4 on Google searches</div>
                </div>
                
                <div className="bg-orange-100 rounded-lg p-6 border border-orange-300">
                  <div className="text-sm text-orange-700 mb-2">AFTER 4 MONTHS</div>
                  <div className="text-orange-900 mb-2">34 bookings per month</div>
                  <div className="text-orange-700">#1 for "auto detailing Warren MI"</div>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "These guys are right here in Warren and they get it. My phone started ringing within weeks. Now I'm booked solid two weeks out. Best investment I've made." - Mike T., Warren Business Owner
              </p>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl mb-6">
              Ready to Dominate Warren's Market?
            </h2>
            <p className="text-xl mb-8">
              Let's talk about getting your Warren business more customers. Free consultation, no pressure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                  Get Free Growth Plan
                </Button>
              </Link>
              <a href="tel:3132512940">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-6 text-xl">
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
