import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Link } from 'react-router-dom';

export default function WorkPage() {
  const projects = [
    {
      name: 'RoyalTronix',
      url: 'https://www.royaltronix.store',
      type: 'E-Commerce Website',
      description: 'Modern e-commerce store with seamless shopping experience, product showcase, and secure checkout',
      industry: 'Retail',
      features: ['Product Catalog', 'Shopping Cart', 'Secure Checkout', 'Mobile Optimized'],
      color: 'blue'
    },
    {
      name: 'SwiftRooter',
      url: 'https://swiftrooter.framer.website/',
      type: 'Service Business Website',
      description: 'Professional service website with booking system, showcasing services and customer testimonials',
      industry: 'Home Services',
      features: ['Online Booking', 'Service Showcase', 'Contact Forms', 'SEO Optimized'],
      color: 'green'
    },
    {
      name: 'Viral Launch',
      url: 'https://viral-launch.netlify.app/',
      type: 'Marketing Website',
      description: 'High-converting marketing website with modern design and compelling copy',
      industry: 'Digital Marketing',
      features: ['Lead Generation', 'Modern Design', 'Fast Loading', 'Conversion Focused'],
      color: 'purple'
    },
    {
      name: 'The Luxanta',
      url: 'https://theluxanta.com/',
      type: 'Premium Brand Website',
      description: 'Elegant, premium website showcasing luxury products with sophisticated design',
      industry: 'Luxury Goods',
      features: ['Premium Design', 'Brand Showcase', 'Visual Storytelling', 'Mobile First'],
      color: 'orange'
    }
  ];

  const results = [
    {
      metric: '340%',
      label: 'Average Increase in Bookings',
      description: 'Our clients see 3-4X more bookings within 90 days'
    },
    {
      metric: '50+',
      label: 'Businesses Served',
      description: 'Local Metro Detroit businesses we\'ve helped grow'
    },
    {
      metric: '#1',
      label: 'Google Rankings',
      description: 'Average ranking position for local searches'
    },
    {
      metric: '2 Weeks',
      label: 'Average Launch Time',
      description: 'From start to live website, we move fast'
    }
  ];

  const services = [
    'Framer Development',
    'Figma to Code',
    'WordPress Custom',
    'E-Commerce Stores',
    'Booking Systems',
    'Mobile Responsive',
    'SEO Optimized',
    'Conversion Focused'
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Our <span className="text-orange-500">Work</span> Speaks For Itself
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We build websites that don't just look good—they get results. Check out some recent projects from our portfolio.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <div key={service} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${
                  project.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  project.color === 'green' ? 'from-green-500 to-green-600' :
                  project.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                }`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{project.industry}</div>
                      <h3 className="text-2xl text-gray-900">{project.name}</h3>
                      <div className={`text-sm ${
                        project.color === 'blue' ? 'text-blue-600' :
                        project.color === 'green' ? 'text-green-600' :
                        project.color === 'purple' ? 'text-purple-600' :
                        'text-orange-600'
                      }`}>
                        {project.type}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-gray-900 hover:bg-gray-800 group">
                      View Live Site <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-600 inline-block">
              <h3 className="text-2xl mb-2 text-gray-900">🚀 Your Project Could Be Next</h3>
              <p className="text-gray-600 mb-6">
                We've helped 50+ businesses stand out with professional websites that convert
              </p>
              <Link to="/quote">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            More Than Just <span className="text-orange-600">Pretty Websites</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our websites are built to perform. Here's what our clients experience:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="p-8 text-center bg-white">
                <div className="text-5xl mb-2 text-orange-600">{result.metric}</div>
                <h3 className="text-lg mb-2 text-gray-900">{result.label}</h3>
                <p className="text-sm text-gray-600">{result.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            Built With The <span className="text-orange-600">Best Tools</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We use cutting-edge platforms and technologies to build websites that are fast, secure, and scalable
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl mb-2 text-gray-900">Framer</h3>
              <p className="text-gray-600">Beautiful, interactive websites with no-code power and developer flexibility</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl mb-2 text-gray-900">Figma</h3>
              <p className="text-gray-600">Design-first approach, converting designs into pixel-perfect websites</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl mb-2 text-gray-900">WordPress</h3>
              <p className="text-gray-600">Powerful CMS for businesses that need full control and scalability</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            Why Our Websites <span className="text-orange-500">Outperform</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl mb-3">Conversion-Focused Copywriting</h3>
              <p className="text-gray-300">
                We don't just design—we write copy that sells. Every headline, every button, every word is crafted to turn visitors into customers. We've mastered the art of persuasion.
              </p>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl mb-3">Metro Detroit Focus</h3>
              <p className="text-gray-300">
                We build for local businesses. Every website is optimized for Warren, Detroit, Troy, and Metro Detroit searches. Your customers are local—your website should reflect that.
              </p>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl mb-3">Lightning Fast</h3>
              <p className="text-gray-300">
                Under 3-second load times. Mobile-first. Google-friendly. We obsess over speed because we know customers don't wait. Fast websites = more conversions.
              </p>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl mb-3">Data-Driven Design</h3>
              <p className="text-gray-300">
                We don't guess—we use proven strategies. Every design decision is backed by conversion data from 50+ successful projects. You get what works, not what looks cool.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Ready To Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's build a website that brings you customers, not just compliments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                Get Your Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-6 text-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
