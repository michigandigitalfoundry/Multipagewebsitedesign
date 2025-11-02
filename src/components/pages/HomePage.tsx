import { Link } from 'react-router-dom';
import { Phone, Calendar, DollarSign, TrendingUp, MapPin, AlertCircle, CheckCircle, ArrowRight, Star, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Michigan Digital Foundry | Warren MI Digital Marketing & Website Design</title>
        <meta name="description" content="Get more customers with Michigan Digital Foundry. Website design, local SEO, and social media management for Warren, Detroit, Troy, Sterling Heights businesses. Call (313) 251-2940" />
      </Helmet>
      
      <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
                Get More Customers. <span className="text-orange-500">Period.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                We build websites, run SEO, and manage social media for Warren & Metro Detroit businesses. Your phone rings more. You close more deals. That's it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/quote">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    Get Free Growth Plan
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg w-full sm:w-auto group">
                    See Real Results <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Crect width='24' height='14' y='5' fill='%23002868'/%3E%3Crect width='24' height='7' y='12' fill='%23BF0A30'/%3E%3C/svg%3E" alt="Michigan" className="w-6 h-6" />
                  <span>Serving Warren, Detroit, Troy & All Metro Detroit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>More Leads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>More Bookings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>More Sales</span>
                </div>
              </div>
            </div>

            {/* Animated Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="text-gray-900">Your Business Dashboard</h3>
                  <div className="text-green-600 flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Live</span>
                  </div>
                </div>
                
                {/* Notification Cards */}
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-3 animate-pulse">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">New Lead Call</div>
                      <div className="text-xs text-gray-600">Warren customer requesting quote</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Booking Confirmed</div>
                      <div className="text-xs text-gray-600">Detroit client - Tomorrow 2pm</div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Sale Closed</div>
                      <div className="text-xs text-gray-600">Troy customer - $1,850</div>
                    </div>
                  </div>
                </div>

                {/* Sales Graph */}
                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">Monthly Revenue</div>
                  <div className="flex items-end space-x-2 h-24">
                    <div className="flex-1 bg-gray-200 rounded-t" style={{ height: '40%' }}></div>
                    <div className="flex-1 bg-gray-300 rounded-t" style={{ height: '55%' }}></div>
                    <div className="flex-1 bg-orange-300 rounded-t" style={{ height: '70%' }}></div>
                    <div className="flex-1 bg-orange-400 rounded-t" style={{ height: '85%' }}></div>
                    <div className="flex-1 bg-orange-600 rounded-t animate-pulse" style={{ height: '100%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Last 5 months - Trending Up 📈</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Your Competitors Are <span className="text-red-600">Stealing Your Customers</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-red-200 bg-white">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl mb-2 text-gray-900">87%</div>
              <p className="text-gray-600">of customers find local businesses online</p>
            </Card>
            
            <Card className="p-6 text-center border-red-200 bg-white">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <div className="text-xl mb-2 text-gray-900">Your Competitors</div>
              <p className="text-gray-600">rank #1 on Google while you're invisible</p>
            </Card>
            
            <Card className="p-6 text-center border-red-200 bg-white">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <div className="text-xl mb-2 text-gray-900">No Website</div>
              <p className="text-gray-600">= No trust = No customers</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            We Fix One Thing: <span className="text-orange-600">Get You More Customers</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Not tech talk. Not confusing metrics. Just more people calling, booking, and buying from you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/services" className="group">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">More Phone Calls</h3>
                <p className="text-gray-600">Your phone rings with qualified customers ready to buy, not tire-kickers</p>
              </Card>
            </Link>
            
            <Link to="/services" className="group">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">More Bookings</h3>
                <p className="text-gray-600">Your schedule fills up with high-value appointments on autopilot</p>
              </Card>
            </Link>
            
            <Link to="/services" className="group">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <DollarSign className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">More Revenue</h3>
                <p className="text-gray-600">Every dollar you invest returns 3-5X in new customer revenue</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Authority Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-2xl p-8 flex items-center justify-center">
                <MapPin className="w-32 h-32 text-orange-500 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📍</div>
                  <div className="text-sm">Metro Detroit</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">
                Proudly Serving Metro Detroit Since <span className="text-orange-500">2023</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're not some out-of-state agency. We're your neighbors in Warren, Michigan, and we're invested in local business success.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Warren', 'Detroit', 'Troy', 'Sterling Heights', 'Royal Oak', 'Macomb County', 'Oakland County', 'Wayne County'].map((city) => (
                  <div key={city} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            Real Metro Detroit Businesses. <span className="text-orange-600">Real Results.</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            These aren't made-up numbers. These are actual clients we've helped grow.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white">
              <div className="text-orange-600 mb-4">Detroit Auto Detailer</div>
              <div className="text-5xl mb-4 text-gray-900">+340%</div>
              <h3 className="text-xl mb-4 text-gray-900">More Bookings in 90 Days</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Before:</span>
                  <span>8 bookings/month</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <div className="flex justify-between">
                  <span>After:</span>
                  <span className="text-orange-600">35 bookings/month</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <div className="text-orange-600 mb-4">Warren HVAC Company</div>
              <div className="text-5xl mb-4 text-gray-900">4X</div>
              <h3 className="text-xl mb-4 text-gray-900">More Phone Calls</h3>
              <div className="flex items-center justify-center space-x-4 my-6">
                <Phone className="w-12 h-12 text-gray-400" />
                <ArrowRight className="w-8 h-8 text-orange-600" />
                <div className="flex space-x-1">
                  <Phone className="w-12 h-12 text-orange-600 animate-pulse" />
                  <Phone className="w-12 h-12 text-orange-600 animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
              <p className="text-sm text-gray-600">From 12 calls/week to 48 calls/week from qualified customers</p>
            </Card>
            
            <Card className="p-8 bg-white">
              <div className="text-orange-600 mb-4">Troy Plumber</div>
              <div className="text-5xl mb-4 text-gray-900">#1</div>
              <h3 className="text-xl mb-4 text-gray-900">From Page 5 to Google #1</h3>
              <div className="bg-gray-100 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded flex items-center justify-center text-xs">1</div>
                  <div className="text-gray-900">YOUR BUSINESS ⭐⭐⭐⭐⭐</div>
                </div>
                <div className="flex items-center space-x-2 opacity-50">
                  <div className="w-6 h-6 bg-gray-300 text-white rounded flex items-center justify-center text-xs">2</div>
                  <div className="text-gray-600">Competitor A</div>
                </div>
                <div className="flex items-center space-x-2 opacity-50">
                  <div className="w-6 h-6 bg-gray-300 text-white rounded flex items-center justify-center text-xs">3</div>
                  <div className="text-gray-600">Competitor B</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">Now dominates "plumber near me" searches across Metro Detroit</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            Three Services. One Goal: <span className="text-orange-600">Fill Your Pipeline.</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We don't overwhelm you with 47 services. We do three things exceptionally well.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-orange-600 relative">
              <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-2 text-gray-900">Custom Websites</h3>
              <div className="text-3xl mb-4 text-orange-600">$2,500</div>
              <p className="text-gray-600 mb-6">
                A Website That Actually Brings You Customers. Not just pretty. Built to convert visitors into paying customers 24/7. Booking systems, mobile-optimized, fast-loading, SEO-ready.
              </p>
              <Link to="/services/website">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-2 text-gray-900">Local SEO</h3>
              <div className="text-3xl mb-4 text-orange-600">$1,000<span className="text-lg text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">
                Rank #1 When Customers Search For You. Dominate 'near me' searches in Warren, Detroit, Troy. Your business shows up first when customers are ready to buy.
              </p>
              <Link to="/services/seo">
                <Button variant="outline" className="w-full group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-2 text-gray-900">Social Media Growth</h3>
              <div className="text-3xl mb-4 text-orange-600">$499<span className="text-lg text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">
                Build Authority & Stay Top-of-Mind. 4 platforms. Daily posts + stories. Professional content. Your brand everywhere customers look.
              </p>
              <Link to="/services/social-media">
                <Button variant="outline" className="w-full group">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-16 text-gray-900">
            Simple. Fast. <span className="text-orange-600">Profitable.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-7xl text-orange-600 mb-4">01</div>
              <h3 className="text-2xl mb-3 text-gray-900">Free Growth Audit (15 min)</h3>
              <p className="text-gray-600">
                We analyze your current situation and show exactly how to get more customers
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-7xl text-orange-600 mb-4">02</div>
              <h3 className="text-2xl mb-3 text-gray-900">We Build & Launch (1-2 weeks)</h3>
              <p className="text-gray-600">
                Fast execution. No waiting months. You're live and getting leads quickly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-7xl text-orange-600 mb-4">03</div>
              <h3 className="text-2xl mb-3 text-gray-900">Watch Your Business Grow</h3>
              <p className="text-gray-600">
                More calls. More bookings. More revenue. We handle everything technical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Hear From <span className="text-orange-600">Metro Detroit Business Owners</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mike's Auto Detailing", location: "Warren, MI", quote: "Bookings doubled in 60 days" },
              { name: "A+ HVAC Services", location: "Detroit, MI", quote: "Phone rings 4X more than before" },
              { name: "Troy Emergency Plumbing", location: "Troy, MI", quote: "From invisible to #1 on Google" }
            ].map((testimonial, i) => (
              <Card key={i} className="relative overflow-hidden aspect-video bg-gray-900 flex items-center justify-center group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-900/20"></div>
                <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-300 mb-2">{testimonial.location}</div>
                  <div className="text-sm italic">"{testimonial.quote}"</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-6">
            Found By Customers <span className="text-orange-500">Across Metro Detroit</span>
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            When someone in Warren searches 'auto detailer near me' or Detroit searches 'emergency plumber', YOUR business shows up first. That's what we do.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  value="plumber near me Warren MI" 
                  readOnly 
                  className="flex-1 text-gray-900 outline-none"
                />
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 bg-orange-50 p-4 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-orange-600">Ad · Warren, MI</div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg text-blue-600 mb-1">YOUR BUSINESS - Emergency Plumbing</h3>
                  <p className="text-sm text-gray-600">24/7 Service · Warren, Detroit, Troy · Call Now: (586) 365-8389 · Book Online!</p>
                </div>
                
                <div className="opacity-50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">Warren, MI</div>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg text-gray-600 mb-1">Competitor Plumbing Co</h3>
                  <p className="text-sm text-gray-500">Local plumbing services...</p>
                </div>
                
                <div className="opacity-30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">Detroit, MI</div>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg text-gray-600 mb-1">Another Plumber</h3>
                  <p className="text-sm text-gray-500">Plumbing and repairs...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Michigan Metro Detroit Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-6 text-gray-900">
            Proudly Serving <span className="text-orange-600">Metro Detroit Since 2023</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From Warren to Detroit, Troy to Sterling Heights, Royal Oak to Macomb County—we're your local digital marketing partner helping Michigan businesses thrive.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Detroit Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1730137568296-a25fd5a3bc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEZXRyb2l0JTIwZG93bnRvd24lMjBza3lsaW5lfGVufDF8fHx8MTc2MjA5ODMxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Detroit Downtown Skyline"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl mb-2">Detroit & Metro Area</h3>
                <p className="text-sm text-gray-300">Your Local Digital Marketing Partner</p>
              </div>
            </div>

            {/* Michigan Map with Location Pins */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1722888896502-89037c8264a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNoaWdhbiUyMHN0YXRlJTIwbWFwfGVufDF8fHx8MTc2MjA5ODMxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Michigan State Map"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent"></div>
              
              {/* Location Pins Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md max-h-96">
                  {/* Warren */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-orange-600 fill-orange-600 drop-shadow-lg" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold">
                        Warren
                      </div>
                    </div>
                  </div>
                  
                  {/* Detroit */}
                  <div className="absolute top-1/3 left-1/3">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-orange-600 fill-orange-600 drop-shadow-lg" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold">
                        Detroit
                      </div>
                    </div>
                  </div>
                  
                  {/* Troy */}
                  <div className="absolute top-1/4 left-2/3">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-orange-600 fill-orange-600 drop-shadow-lg" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold">
                        Troy
                      </div>
                    </div>
                  </div>
                  
                  {/* Sterling Heights */}
                  <div className="absolute top-1/4 left-1/2 transform translate-x-4">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-orange-600 fill-orange-600 drop-shadow-lg" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold text-center">
                        Sterling<br/>Heights
                      </div>
                    </div>
                  </div>
                  
                  {/* Royal Oak */}
                  <div className="absolute top-2/5 right-1/3">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-orange-600 fill-orange-600 drop-shadow-lg" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg text-xs font-semibold">
                        Royal Oak
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Ready For More Customers?
          </h2>
          <p className="text-2xl mb-8 text-orange-100">
            Free growth audit. No pressure. Just a clear plan to grow.
          </p>
          
          <Link to="/quote">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-8 text-2xl mb-6">
              Get Your Free Growth Plan
            </Button>
          </Link>
          
          <div className="text-xl">
            Or call us: <a href="tel:3132512940" className="underline hover:text-orange-200">(313) 251-2940</a>
          </div>
          <div className="text-orange-200 mt-4">Warren, MI • Serving All Metro Detroit</div>
        </div>
      </section>
      </div>
    </>
  );
}
