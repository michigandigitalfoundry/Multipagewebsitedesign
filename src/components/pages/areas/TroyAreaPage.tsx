import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, Star, ArrowRight, Zap, Calendar, Users } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Helmet } from 'react-helmet';

export default function TroyAreaPage() {
  const services = [
    {
      title: 'Website Design',
      price: '$2,500',
      description: 'Custom websites that convert visitors into customers',
      features: [
        'Mobile-optimized design',
        'Booking systems included',
        'Troy-focused SEO',
        'Fast hosting (1st year free)'
      ]
    },
    {
      title: 'Local SEO',
      price: '$800/month',
      description: 'Dominate Troy searches and get more customers',
      features: [
        'Google Business optimization',
        'Troy keyword targeting',
        'Review generation',
        'Monthly ranking reports'
      ]
    },
    {
      title: 'Social Media',
      price: '$499/month',
      description: 'Engage Troy customers on social media',
      features: [
        '12 custom posts per month',
        'Facebook & Instagram',
        'Community engagement',
        'Performance analytics'
      ]
    }
  ];

  const neighborhoods = [
    'Big Beaver',
    'Somerset Collection Area',
    'Corporate Drive',
    'Troy Tech Center',
    'Northfield',
    'Coolidge Corridor',
    'Livernois Area',
    'Rochester Road'
  ];

  return (
    <>
      <Helmet>
        <title>Web Design & Digital Marketing Troy MI | SEO & Websites</title>
        <meta name="description" content="Troy businesses: Get custom websites & local SEO that bring more customers. Professional service. Call (313) 251-2940." />
        <meta property="og:title" content="Web Design & Digital Marketing Troy MI | SEO & Websites" />
        <meta property="og:description" content="Troy businesses: Get custom websites & local SEO that bring more customers. Professional service. Call (313) 251-2940." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500">Serving Troy, MI</span>
                </div>
                <h1 className="text-5xl md:text-6xl mb-6">
                  Web Design & Digital Marketing in <span className="text-orange-500">Troy, Michigan</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Troy businesses need Troy-quality digital marketing. We help successful companies get more customers with professional websites, local SEO, and social media that delivers results.
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
                    <span>Troy Specialists</span>
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
                      <div className="text-2xl text-gray-900">Troy's Digital Marketing Experts</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    We understand Troy's business-focused market. We know what Troy customers are searching for and how to get your business found by the right prospects.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>75+ Troy Businesses</span>
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
              Why Troy Businesses <span className="text-orange-600">Choose Us</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We understand Troy's professional market and know how to position your business for maximum visibility and growth.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Troy Focused</h3>
                <p className="text-gray-600">We specialize in Troy's corporate market and know what works for professional services.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Fast Results</h3>
                <p className="text-gray-600">Websites in 2 weeks. SEO results in 60 days. Professional speed for Troy businesses.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Local Expertise</h3>
                <p className="text-gray-600">We know Troy's business districts and how to reach your target customers effectively.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Proven Results</h3>
                <p className="text-gray-600">Our Troy clients get 3-5X more customers with our targeted approach.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
              Our Services for <span className="text-orange-600">Troy Businesses</span>
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
              Serving All of <span className="text-orange-500">Troy</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {neighborhoods.map((area) => (
                <div key={area} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  {area}
                </div>
              ))}
            </div>
            
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              From Big Beaver to Rochester Road, from Somerset Collection to Troy Tech Center, we serve all Troy businesses. If you're in Troy, we can help you grow.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
              Troy Business Success Story
            </h2>
            
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-xl text-gray-900">Troy HVAC Company</div>
                  <div className="text-sm text-gray-600">Corporate Drive Area</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 border border-orange-200">
                  <div className="text-sm text-gray-600 mb-2">BEFORE</div>
                  <div className="text-gray-900 mb-2">Phone rang 8 times/week</div>
                  <div className="text-gray-600">Struggling to compete</div>
                </div>
                
                <div className="bg-orange-100 rounded-lg p-6 border border-orange-300">
                  <div className="text-sm text-orange-700 mb-2">AFTER 5 MONTHS</div>
                  <div className="text-orange-900 mb-2">Phone rings 48 times/week (6X more)</div>
                  <div className="text-orange-700">#1 for 23 local keywords</div>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "We went from competing for scraps to being the go-to HVAC company in Troy. The increase in calls has been incredible and the quality leads keep coming." - David M., Troy Business Owner
              </p>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl mb-6">
              Ready to Dominate Troy's Market?
            </h2>
            <p className="text-xl mb-8">
              Let's talk about getting your Troy business more customers. Free consultation, no pressure.
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