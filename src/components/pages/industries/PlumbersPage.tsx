import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Star, ArrowRight, Droplet, Calendar, TrendingUp, Shield } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Helmet } from 'react-helmet';

export default function PlumbersPage() {
  const painPoints = [
    { icon: <Phone className="w-8 h-8 text-red-600" />, title: 'Phone Not Ringing Enough', description: 'Slow days = no revenue' },
    { icon: <Star className="w-8 h-8 text-red-600" />, title: 'Emergency Calls Going to Competitors', description: 'Customers call other plumbers first' },
    { icon: <TrendingUp className="w-8 h-8 text-red-600" />, title: 'No Online Presence', description: 'Customers can\'t find you online' },
    { icon: <Calendar className="w-8 h-8 text-red-600" />, title: 'Can\'t Compete with Big Companies', description: 'Losing jobs to corporate plumbers' }
  ];

  const benefits = [
    { icon: <Phone className="w-8 h-8 text-orange-600" />, title: 'Rank #1 for Emergency Calls', description: 'Be the first plumber customers call at 2am' },
    { icon: <Calendar className="w-8 h-8 text-orange-600" />, title: 'Get 24/7 Online Bookings', description: 'Customers book while you sleep. No more phone tag.' },
    { icon: <Star className="w-8 h-8 text-orange-600" />, title: 'Build Trust with Reviews', description: '5-star reviews = more calls automatically' },
    { icon: <Shield className="w-8 h-8 text-orange-600" />, title: 'Dominate Your Service Area', description: 'Show up first for "plumber near me" searches' }
  ];

  const services = [
    {
      title: 'Plumber Website with Emergency Booking',
      price: '$2,500',
      description: 'Custom website designed to get you plumbing calls',
      features: ['Emergency service page', '24/7 booking system', 'Before/after gallery', 'Mobile click-to-call', 'Service area map', 'Instant quote forms']
    },
    {
      title: 'Plumber Local SEO',
      price: '$800/month',
      description: 'Dominate local plumber searches in Metro Detroit',
      features: ['Google Business optimization', 'Rank for "plumber near me"', 'Review generation system', 'Local citation building', 'Competitor conquest', 'Monthly reports']
    },
    {
      title: 'Social Media Marketing',
      price: '$499/month',
      description: 'Build trust and stay top-of-mind',
      features: ['12 custom posts/month', 'Facebook & Instagram', 'Before/after showcases', 'Community engagement', 'Emergency service promotion', 'Performance tracking']
    }
  ];

  const faqs = [
    {
      question: 'How much do you charge?',
      answer: 'Website: $2,500 one-time. SEO: $800/month. Social Media: $499/month. No long-term contracts. Most plumbers do all three and see 3-5X more service calls within 90 days.'
    },
    {
      question: 'What\'s the ROI for plumbers?',
      answer: 'Average plumbing service call is worth $150-$500. Emergency calls can be $300-$1,000+. Our clients get 20-40 additional calls per month. That\'s $3,000-$20,000 in additional monthly revenue for an $800-$1,300/month investment.'
    },
    {
      question: 'Do I have to sign a contract?',
      answer: 'No long-term contracts. Month-to-month for SEO and social media. The website is yours after we build it. We don\'t lock plumbers into contracts because we know you\'ll stay when you see results.'
    },
    {
      question: 'How fast will I see results?',
      answer: 'Website goes live in 2 weeks and starts generating calls immediately. SEO takes 60-90 days to see significant ranking improvements. Social media builds momentum over 30-60 days. Most plumbers see measurable ROI within the first 90 days.'
    },
    {
      question: 'Do you work with plumbers in Warren/Detroit?',
      answer: 'Yes! We specialize in Metro Detroit plumbers. We know the Warren, Detroit, Troy, Sterling Heights markets inside and out. We understand emergency plumbing demand and know exactly how to position you as the go-to plumber in your area.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plumber Marketing & Web Design | Dominate Local Search</title>
        <meta name="description" content="Plumbers: Dominate 'plumber near me' searches. Get 10-30 new calls per month. Custom websites & SEO. Call (313) 251-2940." />
        <meta property="og:title" content="Plumber Marketing & Web Design | Dominate Local Search" />
        <meta property="og:description" content="Plumbers: Dominate 'plumber near me' searches. Get 10-30 new calls per month. Custom websites & SEO. Call (313) 251-2940." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Droplet className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500">Plumber Marketing Specialists</span>
                </div>
                <h1 className="text-5xl md:text-6xl mb-6">
                  Plumber Websites & Marketing That <span className="text-orange-500">Bring More Calls</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Stop waiting for the phone to ring. Get 10-30 new calls per month with a professional website and local SEO that puts you first on Google when customers search "plumber near me."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/quote">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                      Get More Customers
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
                    <span>10-30 More Calls Per Month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Rank #1 on Google</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No Long-Term Contracts</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="p-8 bg-white">
                  <div className="text-2xl text-gray-900 mb-4">Detroit Plumbing Company Success Story</div>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-2">BEFORE</div>
                      <div className="text-gray-900">5 organic leads per month</div>
                      <div className="text-gray-600">Not in map pack</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-orange-600 mx-auto transform rotate-90" />
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-sm text-green-700 mb-2">AFTER 3 MONTHS</div>
                      <div className="text-green-900">41 organic leads per month</div>
                      <div className="text-green-700">#1 map pack position</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
              Why Plumbers <span className="text-red-600">Struggle to Get Customers</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              You're great at plumbing. But if customers can't find you online, you're invisible.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-6 text-center bg-white border-red-200">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
              How We Help <span className="text-orange-600">Plumbers</span> Get More Calls
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
              Our Services for <span className="text-orange-600">Plumbers</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl mb-2 text-gray-900">{service.title}</h3>
                  <div className="text-3xl mb-4 text-orange-600">{service.price}</div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
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
                  Get More Service Calls
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl mb-6">
              Average Plumber Client Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
                <div className="text-5xl mb-4 text-orange-500">41</div>
                <div className="text-xl mb-2">Leads Per Month</div>
                <div className="text-gray-400">Up from 5 leads/month</div>
              </Card>
              
              <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
                <div className="text-5xl mb-4 text-green-400">$32K</div>
                <div className="text-xl mb-2">Additional Monthly Revenue</div>
                <div className="text-gray-400">Average across our plumber clients</div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
              Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border rounded-lg px-6">
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

        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl mb-6">
              Ready to Get More Plumbing Calls?
            </h2>
            <p className="text-xl mb-8">
              Let's get your phone ringing with qualified plumbing customers. Free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                  Get More Customers
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