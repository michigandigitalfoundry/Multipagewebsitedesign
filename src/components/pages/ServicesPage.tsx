import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export default function ServicesPage() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Custom Websites That Convert',
      benefits: [
        'Built to turn visitors into customers',
        'Mobile-optimized for on-the-go searchers',
        'Fast-loading (under 3 seconds)',
        'Online booking systems built-in',
        'SEO-ready from day one',
        'Easy to update (or we do it)'
      ],
      price: '$2,500 one-time',
      link: '/services/website',
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Rank #1 in Your Area',
      benefits: [
        'Dominate \'near me\' searches',
        'Show up before competitors',
        'Google Business Profile optimization',
        'Local keyword domination',
        'Monthly ranking reports',
        'More organic leads every month'
      ],
      price: '$1,000/month',
      link: '/services/seo',
      color: 'green',
      popular: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: 'Social Media That Builds Authority',
      benefits: [
        'Daily posts + stories on 4 platforms',
        'Professional graphics & content',
        'SEO-optimized captions & hashtags',
        'Engagement with your audience',
        'Consistent brand presence',
        'Turn followers into customers'
      ],
      price: '$499/month',
      link: '/services/social-media',
      color: 'purple'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Services Built For One Thing: <span className="text-orange-500">Getting You More Customers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Website design, local SEO, and social media management for Metro Detroit service businesses. Every service focused on filling your pipeline with qualified leads.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative ${
                  service.popular ? 'border-2 border-orange-600' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-sm px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'blue' ? 'bg-blue-100' :
                  service.color === 'green' ? 'bg-green-100' :
                  'bg-purple-100'
                }`}>
                  {service.icon}
                </div>
                
                <h2 className="text-3xl mb-4 text-gray-900">{service.title}</h2>
                
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-3xl mb-6 text-orange-600">{service.price}</div>
                
                <Link to={service.link}>
                  <Button 
                    className={`w-full group ${
                      service.popular 
                        ? 'bg-orange-600 hover:bg-orange-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
            Everything Works Together To <span className="text-orange-600">Grow Your Business</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Your website converts. SEO brings you traffic. Social media builds trust. Combined = a customer-generating machine.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
              <Card className="p-6 text-center flex-1 w-full">
                <div className="text-2xl mb-2 text-gray-900">Website</div>
                <div className="text-sm text-gray-600">Foundation</div>
              </Card>
              
              <div className="text-orange-600 text-2xl">→</div>
              
              <Card className="p-6 text-center flex-1 w-full">
                <div className="text-2xl mb-2 text-gray-900">SEO</div>
                <div className="text-sm text-gray-600">Traffic</div>
              </Card>
              
              <div className="text-orange-600 text-2xl">→</div>
              
              <Card className="p-6 text-center flex-1 w-full">
                <div className="text-2xl mb-2 text-gray-900">Social Media</div>
                <div className="text-sm text-gray-600">Authority</div>
              </Card>
              
              <div className="text-orange-600 text-2xl">=</div>
              
              <Card className="p-6 text-center flex-1 w-full bg-orange-600 text-white border-orange-600">
                <div className="text-2xl mb-2">MORE CUSTOMERS</div>
                <div className="text-sm text-orange-100">Results</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Every Service Optimized For <span className="text-orange-500">Metro Detroit</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We don't do generic national strategies. Everything is tailored for Warren, Detroit, Troy, and Metro Detroit customers searching locally.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Warren', 'Detroit', 'Troy', 'Sterling Heights', 'Royal Oak', 'Madison Heights', 'Hazel Park', 'Ferndale', 'Southfield', 'Macomb County', 'Oakland County', 'Wayne County'].map((city) => (
              <div key={city} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            What You <span className="text-orange-600">Actually Get</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-white border-green-200">
              <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <div className="text-4xl mb-2 text-gray-900">3-5X</div>
              <h3 className="text-xl mb-3 text-gray-900">Return On Investment</h3>
              <p className="text-gray-600">Every dollar you invest returns 3-5X in new customer revenue within 90 days</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <div className="text-4xl mb-2 text-gray-900">10-50</div>
              <h3 className="text-xl mb-3 text-gray-900">New Customers Per Month</h3>
              <p className="text-gray-600">Consistent flow of qualified leads ready to buy your services</p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-orange-50 to-white border-orange-200">
              <div className="text-4xl mb-2 text-gray-900">90 Days</div>
              <h3 className="text-xl mb-3 text-gray-900">To A Booked Schedule</h3>
              <p className="text-gray-600">Most clients see their calendar filling up within the first 3 months</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready To Grow?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's build a custom growth plan for your business
          </p>
          
          <Link to="/quote">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
              Get Your Free Growth Plan
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
