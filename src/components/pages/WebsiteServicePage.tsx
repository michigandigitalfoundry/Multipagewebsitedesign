import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Smartphone, Zap, Calendar, MapPin, Shield, Clock, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function WebsiteServicePage() {
  const websiteTypes = [
    {
      title: 'Service Business Website',
      bestFor: 'HVAC, Plumbing, Auto Detailing, Contractors',
      features: [
        '5-7 pages',
        'Contact forms',
        'Service areas map',
        'Quote request',
        'Mobile click-to-call',
        'Before/after gallery'
      ],
      price: '$2,500'
    },
    {
      title: 'Booking System Website',
      bestFor: 'Detailers, Salons, Repair Shops',
      features: [
        'Everything above +',
        'Online scheduling',
        'Payment processing',
        'Automated reminders',
        'Customer dashboard',
        'Booking calendar'
      ],
      price: '$2,500',
      popular: true
    },
    {
      title: 'E-Commerce Website',
      bestFor: 'Retail, Parts Sales, Product Businesses',
      features: [
        'Product catalog',
        'Shopping cart',
        'Secure checkout',
        'Inventory management',
        'Order tracking',
        'Customer accounts'
      ],
      price: '$2,500'
    }
  ];

  const includedFeatures = [
    'Custom design that matches your brand',
    'Mobile optimization (78% of searches are on mobile)',
    'Fast hosting included first year ($200 value)',
    'SSL security certificate',
    'Contact forms & quote requests',
    'Google Maps integration',
    'Service area pages (Warren, Detroit, Troy, etc.)',
    'SEO foundation & optimization',
    'Professional stock photos',
    '1 hour training session',
    '30-day support after launch',
    'Analytics & tracking setup'
  ];

  const faqs = [
    {
      question: 'Do I own the website?',
      answer: 'Yes! You own 100% of your website. We build it, hand over all the files, and you own everything. No ongoing fees to keep your website (though you\'ll need hosting, which we include for the first year).'
    },
    {
      question: 'How long does it take?',
      answer: 'Most websites are completed in 2 weeks. We work fast without cutting corners. Day 1: Strategy call. Days 2-7: Design & build. Days 8-12: Your feedback & revisions. Days 13-14: Launch + training.'
    },
    {
      question: 'Can I update it myself?',
      answer: 'Absolutely! We build on user-friendly platforms (Framer, Figma, WordPress) and provide training. If you prefer us to make updates, we offer maintenance packages or can make small changes for free during the first 30 days.'
    },
    {
      question: 'What about hosting?',
      answer: 'Hosting is included for the first year ($200 value). After year 1, hosting costs $200/year, which we can manage for you or you can handle yourself.'
    },
    {
      question: 'Do you write the content?',
      answer: 'Yes! We write conversion-focused copy for every page. We\'ve mastered copywriting and know exactly what makes customers take action. You review and approve everything before launch.'
    },
    {
      question: 'What if I need changes later?',
      answer: 'Minor changes in the first 30 days are free. After that, we offer maintenance packages or hourly rates. Most clients opt for our monthly maintenance ($99/mo) which includes updates, security, and small changes.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                A Website That Actually <span className="text-orange-500">Brings You Customers</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Forget pretty websites that sit there. We build websites that make your phone ring, fill your calendar, and grow your revenue. $2,500. Built in 2 weeks. ROI guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/quote">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    Get Started - $2,500
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg w-full sm:w-auto">
                    See Examples
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>2-Week Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Mobile-Optimized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Booking Systems Included</span>
                </div>
              </div>
            </div>

            {/* Device Mockup */}
            <div className="relative">
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1630522790545-67ad2cb700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc2MjAxNjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern website on laptop"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">New Booking!</div>
                      <div className="text-xs text-gray-600">Warren customer</div>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Website Matters */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            87% Of Customers <span className="text-red-600">Judge Your Business By Your Website</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center bg-white border-red-200">
              <div className="text-4xl mb-3">❌</div>
              <h3 className="text-xl mb-2 text-gray-900">No Website</h3>
              <p className="text-gray-600">= Zero Trust = Customers choose your competitor</p>
            </Card>
            
            <Card className="p-6 text-center bg-white border-red-200">
              <div className="text-4xl mb-3">🐌</div>
              <h3 className="text-xl mb-2 text-gray-900">Slow Website</h3>
              <p className="text-gray-600">= Lost Customers = 40% leave if it takes 3+ seconds</p>
            </Card>
            
            <Card className="p-6 text-center bg-white border-red-200">
              <div className="text-4xl mb-3">😤</div>
              <h3 className="text-xl mb-2 text-gray-900">Hard to Book</h3>
              <p className="text-gray-600">= They Call Your Competitor = Lost revenue</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Our Websites Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            Built For One Thing: <span className="text-orange-600">Converting Visitors Into Customers</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We don't just make pretty websites. We build customer-generating machines optimized for Metro Detroit.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ArrowRight className="w-8 h-8 text-orange-600" />,
                title: 'Conversion-Focused Design',
                description: 'Every button, every section designed to make visitors take action'
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-600" />,
                title: 'Lightning Fast Loading',
                description: 'Under 3 seconds. Mobile-optimized. Customers don\'t wait'
              },
              {
                icon: <Calendar className="w-8 h-8 text-orange-600" />,
                title: 'Online Booking Built-In',
                description: 'Let customers schedule and pay 24/7. No phone tag'
              },
              {
                icon: <MapPin className="w-8 h-8 text-orange-600" />,
                title: 'Local SEO Ready',
                description: 'Optimized for Warren, Detroit, Troy searches from day one'
              },
              {
                icon: <Smartphone className="w-8 h-8 text-orange-600" />,
                title: 'Mobile-First',
                description: 'Looks perfect on phones where 78% of local searches happen'
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-600" />,
                title: 'Easy Updates',
                description: 'Change prices, hours, services yourself. Or we do it free'
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Choose Your <span className="text-orange-600">Website Type</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative ${
                  type.popular ? 'border-2 border-orange-600' : ''
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-sm px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl mb-2 text-gray-900">{type.title}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  Best for: <span className="text-gray-900">{type.bestFor}</span>
                </div>
                
                <div className="text-3xl mb-6 text-orange-600">{type.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, i) => (
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
                Get Started - $2,500
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            What's <span className="text-orange-600">Included</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            From Idea to <span className="text-orange-500">Live Website</span> in 2 Weeks
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { day: 'Day 1', title: 'Strategy Call', description: 'We discuss your business, goals, and target customers' },
              { day: 'Days 2-7', title: 'Design & Build', description: 'We create your custom website with conversion-focused design' },
              { day: 'Days 8-12', title: 'Your Feedback', description: 'Review, request changes, and approve the final version' },
              { day: 'Days 13-14', title: 'Launch + Training', description: 'Go live and learn how to manage your new website' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10" />
                </div>
                <div className="text-orange-500 mb-2">{step.day}</div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Pricing ROI */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Investment & <span className="text-orange-600">Return</span>
          </h2>
          
          <Card className="p-12 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-600">
            <div className="text-6xl mb-4 text-orange-600">$2,500</div>
            <h3 className="text-2xl mb-6 text-gray-900">One-Time Investment</h3>
            <p className="text-xl text-gray-600 mb-8">
              Includes everything. No hidden fees. No monthly charges for the website itself.
            </p>
            
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <div className="text-lg mb-2 text-gray-900">ROI Calculator</div>
              <p className="text-gray-600">
                Just <span className="text-orange-600">2-3 new customers</span> pays for entire website
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Average customer value: $800-$1,200 for most service businesses
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Ready For A Website That Brings You Customers?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/quote">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                Get Started - $2,500
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-6 text-xl">
                Get Free Quote First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
