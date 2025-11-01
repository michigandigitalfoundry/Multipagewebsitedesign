import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: 'Results Over Vanity',
      description: 'We don\'t care about awards or looking fancy. We care about one thing: getting you more customers. Period.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Local First',
      description: 'We\'re not a faceless agency. We\'re your neighbors in Warren, invested in helping Metro Detroit businesses thrive.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: 'Fast Execution',
      description: 'No dragging projects for months. We launch websites in 2 weeks, not 2 months. We move at business speed.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Experience That Shows',
      description: '50+ businesses, proven strategies, mastered copywriting. We know what works because we\'ve done it over and over.'
    }
  ];

  const stats = [
    { number: '93%', label: 'of people search online before buying' },
    { number: '4X', label: 'more leads from businesses with strong online presence' },
    { number: '78%', label: 'of local searches result in offline purchases' },
    { number: '2023', label: 'Year we started empowering local businesses' }
  ];

  const whyUs = [
    'We know what works (50+ successful projects)',
    'We don\'t just build nice websites—we build customer magnets',
    'We\'ve mastered copywriting (the words that sell)',
    'We understand local Metro Detroit markets',
    'Fast turnaround (2 weeks, not months)',
    'Proven track record with real results'
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                We Empower Businesses To <span className="text-orange-500">Break The Four Walls</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                The old way of marketing is dead. Today, 93% of people search online before making a purchase. If your business isn't online, you're invisible to the customers actively looking for you.
              </p>
              <p className="text-xl text-gray-300">
                That's where we come in. We help local Metro Detroit businesses go online the right way—with websites that convert, SEO that ranks, and social media that builds authority.
              </p>
            </div>
            
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1558983671-63406fab4028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkZXRyb2l0fGVufDF8fHx8MTc2MjAzMTgxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-2 text-orange-600">{stat.number}</div>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Our <span className="text-orange-600">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We started Michigan Digital Foundry in 2023 with one simple mission: help local Metro Detroit businesses compete online.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              We saw too many great businesses—HVAC companies, plumbers, auto detailers, mechanics—losing customers to competitors simply because they weren't visible online. Meanwhile, out-of-state agencies charged premium prices for mediocre results and treated local businesses like numbers.
            </p>
            <p className="text-xl text-gray-600">
              We decided to change that. Local businesses deserve world-class marketing at fair prices, delivered by people who actually understand the Metro Detroit market. That's what we do every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            What We <span className="text-orange-600">Stand For</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
                Why Businesses <span className="text-orange-600">Trust Us</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just another digital agency. We're business growth partners who understand what Metro Detroit businesses actually need.
              </p>
              
              <div className="space-y-4">
                {whyUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-600">
                <h3 className="text-2xl mb-4 text-gray-900">Experience Matters</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl mb-2 text-orange-600">50+</div>
                    <p className="text-gray-700">Businesses we've helped grow since 2023</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2 text-orange-600">340%</div>
                    <p className="text-gray-700">Average increase in customer bookings</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2 text-orange-600">100%</div>
                    <p className="text-gray-700">Of clients see measurable results</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            The <span className="text-orange-500">Old Way</span> of Marketing Is Dead
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-red-900/20 border-red-500/50">
              <h3 className="text-2xl mb-4 text-red-400">❌ The Old Way</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Yellow Pages ads nobody reads</li>
                <li>• Hoping customers drive by your shop</li>
                <li>• Relying only on word-of-mouth</li>
                <li>• No online presence = invisible to 93% of buyers</li>
                <li>• Losing customers to competitors who ARE online</li>
                <li>• Limited to customers within a few blocks</li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-green-900/20 border-green-500/50">
              <h3 className="text-2xl mb-4 text-green-400">✓ The New Way (Our Way)</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Show up #1 when customers search Google</li>
                <li>• Website working 24/7 to get bookings</li>
                <li>• Social media building trust and authority</li>
                <li>• Visible to everyone searching in Metro Detroit</li>
                <li>• Customers find YOU (instead of competitors)</li>
                <li>• Reach all of Warren, Detroit, Troy, and beyond</li>
              </ul>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-2xl mb-6 text-gray-300">
              The future is online. We help you get there.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Our <span className="text-orange-600">Approach</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl mb-3 text-gray-900">1. Understand Your Business</h3>
              <p className="text-gray-600">
                We don't do cookie-cutter solutions. We learn your business, your customers, your goals.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl mb-3 text-gray-900">2. Build Fast, Build Right</h3>
              <p className="text-gray-600">
                We launch in 2 weeks using proven strategies. No wasted time, no fluff, just results.
              </p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl mb-3 text-gray-900">3. Measure & Optimize</h3>
              <p className="text-gray-600">
                We track everything, optimize constantly, and make sure you're getting ROI.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Committed To <span className="text-orange-600">Metro Detroit</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're based in Warren, Michigan. We live here. We work here. We're invested in seeing local businesses succeed. When you win, we win. When Metro Detroit thrives, we all thrive.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Warren', 'Detroit', 'Troy', 'Sterling Heights', 'Royal Oak', 'Macomb County', 'Oakland County', 'Wayne County'].map((city) => (
              <div key={city} className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 text-gray-700">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Ready To Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join 50+ Metro Detroit businesses who've already made the leap online
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                Get Free Growth Plan <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-6 text-xl">
                Contact Us
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 text-lg">
            Or call: <a href="tel:5863658389" className="underline hover:text-orange-200">(586) 365-8389</a>
          </div>
        </div>
      </section>
    </div>
  );
}
