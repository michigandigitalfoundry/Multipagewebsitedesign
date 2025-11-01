import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, MapPin, Search, Star, Phone, BarChart } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function SEOServicePage() {
  const seoServices = [
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: 'Google Business Profile Domination',
      description: 'Optimize your Google listing so you appear in the map pack for every local search'
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-600" />,
      title: 'Warren/Detroit Keyword Targeting',
      description: 'Rank for \'near me\' searches in Warren, Detroit, Troy, Sterling Heights, all Metro Detroit'
    },
    {
      icon: <Search className="w-8 h-8 text-orange-600" />,
      title: 'On-Page SEO Optimization',
      description: 'Make your website Google\'s favorite answer for local searches'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-600" />,
      title: 'Local Citation Building',
      description: 'Get your business listed everywhere customers and Google look'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: 'Review Generation System',
      description: 'More 5-star reviews = higher rankings + more trust'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: 'Content Marketing',
      description: 'Blogs and pages targeting local searches your customers actually make'
    },
    {
      icon: <Search className="w-8 h-8 text-orange-600" />,
      title: 'Competitor Conquest',
      description: 'Outrank competitors stealing your customers'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-600" />,
      title: 'Monthly Ranking Reports',
      description: 'See exactly where you rank and how many leads SEO brings'
    }
  ];

  const caseStudies = [
    {
      business: 'Warren Auto Detailer',
      location: 'Warren, MI',
      before: {
        ranking: 'Page 4',
        leads: '2 leads/month from Google'
      },
      after: {
        ranking: '#1 for "auto detailing Warren MI"',
        leads: '34 leads/month'
      },
      timeframe: '4 months',
      color: 'blue'
    },
    {
      business: 'Detroit Plumber',
      location: 'Detroit, MI',
      before: {
        ranking: 'Not in map pack',
        leads: '5 organic leads/month'
      },
      after: {
        ranking: '#1 map pack position',
        leads: '41 organic leads/month'
      },
      timeframe: '3 months',
      color: 'green'
    },
    {
      business: 'Troy HVAC Company',
      location: 'Troy, MI',
      before: {
        ranking: 'Competitors dominating',
        leads: 'Phone rang 8 times/week'
      },
      after: {
        ranking: '#1 for 23 local keywords',
        leads: 'Phone rings 48 times/week (6X more)'
      },
      timeframe: '5 months',
      color: 'orange'
    }
  ];

  const searchExamples = [
    'auto detailer near me Warren',
    'emergency plumber Detroit MI',
    'hvac repair Troy Michigan',
    'best mechanic Sterling Heights',
    'roof repair Warren MI',
    'carpet cleaning near me Detroit'
  ];

  const faqs = [
    {
      question: 'How long until I see results?',
      answer: 'Most clients start seeing improved rankings in 30-60 days and significant lead increases by month 3. SEO is a marathon, not a sprint. But local SEO is MUCH faster than national SEO. We focus on Metro Detroit, not the whole country, so results come quicker.'
    },
    {
      question: 'What if I\'m in a competitive industry?',
      answer: 'Good news: Even competitive industries have room at the top. We\'ve helped HVAC companies, plumbers, and auto detailers outrank competitors who\'ve been around for decades. Our strategies work even in crowded markets.'
    },
    {
      question: 'Do you guarantee rankings?',
      answer: 'No one can ethically guarantee specific rankings (Google changes constantly), but we guarantee you\'ll see improvement. We\'ve never had a client NOT improve their rankings and leads. If we\'re not getting you results, we\'re not the right fit.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! Month-to-month, no long-term contracts. Most agencies lock you in for 6-12 months. We don\'t. If you\'re not happy, cancel. That said, 95% of our SEO clients stay because they see results.'
    },
    {
      question: 'What\'s the ROI?',
      answer: 'Average client gets 10-30 new customers per month from SEO. At $800-$1,200 average customer value, that\'s $8,000-$36,000 in new revenue monthly. For a $1,000/month investment, the ROI is 8-36X. That\'s why our clients stay.'
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
                Rank #1 When Customers <span className="text-orange-500">Search For You</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                When someone in Warren searches 'auto detailer near me' or Detroit searches 'emergency plumber', YOUR business shows up first. More visibility = More customers. $1,000/month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/quote">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    Get Free SEO Audit
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg w-full sm:w-auto">
                    See Rankings
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Local Search Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Guaranteed Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Month-to-Month (No Contracts)</span>
                </div>
              </div>
            </div>

            {/* Google Search Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b">
                  <Search className="w-6 h-6 text-blue-600" />
                  <input 
                    type="text" 
                    value="plumber near me Warren MI" 
                    readOnly 
                    className="flex-1 text-gray-900 outline-none"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-600 bg-orange-50 p-4 rounded animate-pulse">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-orange-600">Warren, MI</div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg text-blue-600 mb-1">YOUR BUSINESS #1 ⭐</h3>
                    <p className="text-sm text-gray-600">24/7 Emergency Service · Serving Warren & Metro Detroit</p>
                  </div>
                  
                  <div className="opacity-40 p-4 bg-gray-50 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-500">Detroit, MI</div>
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg text-gray-600 mb-1">Competitor Plumbing</h3>
                    <p className="text-sm text-gray-500">Local plumbing services...</p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center space-x-2 text-green-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm">Rankings improving daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Your Competitors Are <span className="text-red-600">Stealing Your Customers</span> On Google
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white border-red-200">
              <div className="text-5xl mb-4 text-red-600">93%</div>
              <h3 className="text-xl mb-2 text-gray-900">Find Local Businesses On Google</h3>
              <p className="text-gray-600">If you're not on Google's first page, you're invisible</p>
            </Card>
            
            <Card className="p-8 text-center bg-white border-red-200">
              <div className="text-5xl mb-4 text-red-600">75%</div>
              <h3 className="text-xl mb-2 text-gray-900">Never Scroll Past Page 1</h3>
              <p className="text-gray-600">Page 2 might as well not exist</p>
            </Card>
            
            <Card className="p-8 text-center bg-white border-red-200">
              <div className="text-5xl mb-4 text-red-600">10X</div>
              <h3 className="text-xl mb-2 text-gray-900">More Leads From Page 1</h3>
              <p className="text-gray-600">Ranking #1 = 10X more leads than page 2</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            How Local SEO <span className="text-orange-600">Gets You Customers</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
              <Card className="p-6 text-center flex-1 w-full">
                <Search className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-sm text-gray-600">Customer searches</div>
                <div className="text-gray-900">"hvac repair Warren MI"</div>
              </Card>
              
              <ArrowRight className="text-orange-600 transform md:rotate-0 rotate-90" />
              
              <Card className="p-6 text-center flex-1 w-full bg-orange-50 border-orange-200">
                <Star className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <div className="text-sm text-gray-600">YOUR business appears</div>
                <div className="text-orange-600">#1 Position</div>
              </Card>
              
              <ArrowRight className="text-orange-600 transform md:rotate-0 rotate-90" />
              
              <Card className="p-6 text-center flex-1 w-full">
                <Phone className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-sm text-gray-600">Customer clicks</div>
                <div className="text-green-600">Calls/Books</div>
              </Card>
            </div>
            
            <p className="text-center text-gray-600 mt-8 text-lg">
              We make sure YOUR business is the first thing customers see when they're ready to buy.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            How We Get You To <span className="text-orange-600">#1</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            We Optimize For <span className="text-orange-500">Every City In Metro Detroit</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your business shows up everywhere customers search
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Warren', 'Detroit', 'Troy', 'Sterling Heights', 'Royal Oak', 'Madison Heights', 'Hazel Park', 'Ferndale', 'Southfield', 'Macomb County', 'Oakland County', 'Wayne County'].map((city) => (
              <div key={city} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            Real Metro Detroit Businesses. <span className="text-orange-600">Real Rankings.</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            These are actual clients we've helped dominate local search
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="text-orange-600 mb-2">{study.business}</div>
                <div className="text-sm text-gray-600 mb-6">{study.location}</div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">BEFORE</div>
                    <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
                      <div className="text-gray-900 mb-1">{study.before.ranking}</div>
                      <div className="text-gray-600">{study.before.leads}</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <ArrowRight className="w-6 h-6 text-orange-600 mx-auto transform rotate-90" />
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">AFTER</div>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                      <div className="text-green-700 mb-1">{study.after.ranking}</div>
                      <div className="text-green-600">{study.after.leads}</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center text-sm text-gray-600">
                  Timeframe: <span className="text-orange-600">{study.timeframe}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-12 text-gray-900">
            Simple, Transparent <span className="text-orange-600">Pricing</span>
          </h2>
          
          <Card className="p-12 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-600">
            <div className="text-6xl mb-4 text-orange-600">$1,000<span className="text-3xl text-gray-600">/month</span></div>
            <h3 className="text-2xl mb-4 text-gray-900">Month-to-Month</h3>
            <p className="text-gray-600 mb-8">No long-term contracts. Cancel anytime.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              {[
                'Google Business optimization',
                'Local keyword rankings (Warren, Detroit, Troy)',
                'On-page SEO',
                'Citation building',
                'Review generation',
                'Monthly content',
                'Competitor analysis',
                'Monthly ranking reports',
                'Strategy calls',
                'No long-term contracts'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <div className="text-lg mb-2 text-gray-900">Most clients see results in 60-90 days</div>
              <div className="text-sm text-gray-600 mb-4">ROI Calculator:</div>
              <div className="text-gray-600">
                $1,000/month → 10-30 new customers/month → <span className="text-orange-600 text-xl">$8,000-$30,000</span> additional revenue
              </div>
            </div>
          </Card>
          
          <Link to="/quote" className="mt-8 inline-block">
            <Button className="bg-orange-600 hover:bg-orange-700 px-10 py-6 text-xl">
              Get Free SEO Audit
            </Button>
          </Link>
        </div>
      </section>

      {/* Search Examples */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            We Make Sure YOUR Business Ranks <span className="text-orange-500">#1 For Searches Like These</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {searchExamples.map((search, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center space-x-3">
                <Search className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-left">{search}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Ready To Dominate Local Search?
          </h2>
          
          <Link to="/quote" className="inline-block mt-8">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-8 text-2xl">
              Get Free SEO Audit (Shows Exactly How To Rank #1)
            </Button>
          </Link>
          
          <div className="mt-6 text-xl">
            Or call: <a href="tel:5863658389" className="underline hover:text-orange-200">(586) 365-8389</a>
          </div>
        </div>
      </section>
    </div>
  );
}
