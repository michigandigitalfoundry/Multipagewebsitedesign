import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, Star, ArrowRight, Zap, Calendar, Users } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Helmet } from 'react-helmet';

export default function MichiganAreaPage() {
  const services = [
    {
      title: 'Website Design',
      price: '$2,500',
      description: 'Custom websites that convert visitors into customers',
      features: [
        'Mobile-optimized design',
        'Booking systems included',
        'Michigan-focused SEO',
        'Fast hosting (1st year free)'
      ]
    },
    {
      title: 'Local SEO',
      price: '$800/month',
      description: 'Dominate Michigan searches and get more customers',
      features: [
        'Google Business optimization',
        'Michigan keyword targeting',
        'Review generation',
        'Monthly ranking reports'
      ]
    },
    {
      title: 'Social Media',
      price: '$499/month',
      description: 'Engage Michigan customers on social media',
      features: [
        '12 custom posts per month',
        'Facebook & Instagram',
        'Community engagement',
        'Performance analytics'
      ]
    }
  ];

  const areas = [
    'Warren',
    'Detroit',
    'Troy',
    'Sterling Heights',
    'Royal Oak',
    'Birmingham',
    'Ann Arbor',
    'Lansing',
    'Grand Rapids',
    'Flint',
    'Dearborn',
    'Livonia'
  ];

  return (
    <>
      <Helmet>
        <title>Web Design & Digital Marketing Michigan | Statewide SEO Services</title>
        <meta name="description" content="Michigan businesses get more customers with custom websites & statewide SEO. Serving all of Michigan. Call (313) 251-2940." />
        <meta property="og:title" content="Web Design & Digital Marketing Michigan | Statewide SEO Services" />
        <meta property="og:description" content="Michigan businesses get more customers with custom websites & statewide SEO. Serving all of Michigan. Call (313) 251-2940." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500">Serving All of Michigan</span>
                </div>
                <h1 className="text-5xl md:text-6xl mb-6">
                  Web Design & Digital Marketing Across <span className="text-orange-500">Michigan</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Michigan businesses need statewide reach. We help companies across the Great Lakes State get more customers with professional websites, statewide SEO, and social media that works from Detroit to Grand Rapids.
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
                    <span>Statewide Coverage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Fast Results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Michigan Expertise</span>
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
                      <div className="text-2xl text-gray-900">Michigan's Digital Marketing Leader</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    We understand Michigan's diverse markets - from urban Detroit to rural communities. We know what Michigan customers are searching for and how to connect them with your business statewide.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>200+ Michigan Businesses</span>
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
              Why Michigan Businesses <span className="text-orange-600">Choose Us</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We're Michigan natives who understand our state's unique markets, from automotive to agriculture, from tech to tourism.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Statewide Reach</h3>
                <p className="text-gray-600">We serve businesses across all of Michigan with local market expertise.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Fast Results</h3>
                <p className="text-gray-600">Websites in 2 weeks. SEO results in 60 days. Michigan-wide efficiency.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Michigan Expertise</h3>
                <p className="text-gray-600">We know Michigan's industries, seasons, and customer behaviors intimately.</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">Proven Statewide Results</h3>
                <p className="text-gray-600">Our Michigan clients dominate their markets from Detroit to the UP.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
              Our Services for <span className="text-orange-600">Michigan Businesses</span>
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
              Serving Businesses Across <span className="text-orange-500">Michigan</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {areas.map((area) => (
                <div key={area} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  {area}
                </div>
              ))}
            </div>
            
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              From the Motor City to the Mitten's thumb, from the Great Lakes to the Upper Peninsula, we help Michigan businesses succeed statewide. If you're in Michigan, we can help you grow.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
              Michigan Business Success Story
            </h2>
            
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-xl text-gray-900">Michigan-Wide Business</div>
                  <div className="text-sm text-gray-600">Statewide Operations</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 border border-orange-200">
                  <div className="text-sm text-gray-600 mb-2">BEFORE</div>
                  <div className="text-gray-900 mb-2">Serving 2 cities</div>
                  <div className="text-gray-600">Limited statewide presence</div>
                </div>
                
                <div className="bg-orange-100 rounded-lg p-6 border border-orange-300">
                  <div className="text-sm text-orange-700 mb-2">AFTER 6 MONTHS</div>
                  <div className="text-orange-900 mb-2">Dominating 12 Michigan markets</div>
                  <div className="text-orange-700">Multiple #1 rankings statewide</div>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "We went from a regional player to the dominant statewide leader in our industry. Our Michigan expansion was powered by their strategic SEO and marketing expertise." - Jennifer L., Michigan Business Owner
              </p>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl mb-6">
              Ready to Dominate Michigan's Market?
            </h2>
            <p className="text-xl mb-8">
              Let's talk about expanding your Michigan business statewide. Free consultation, statewide strategy.
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