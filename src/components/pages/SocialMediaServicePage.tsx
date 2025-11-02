import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, Calendar, Users, Zap, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Helmet } from 'react-helmet';

export default function SocialMediaServicePage() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: '4 Platforms Managed',
      description: 'Facebook, Instagram, TikTok, LinkedIn - we handle all of them'
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: 'Daily Posts + Stories',
      description: 'Reels, posts, stories every single day. Your brand stays top-of-mind'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Professional Content Creation',
      description: 'We design graphics, edit videos, write captions - all done for you'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'SEO-Optimized Captions & Hashtags',
      description: 'Every post optimized to reach more local customers in Metro Detroit'
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-purple-600" />,
      title: 'Local Warren/Detroit Content',
      description: 'Content that resonates with Metro Detroit customers specifically'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: 'Engagement & Community Management',
      description: 'We respond to comments and DMs to build relationships'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: 'Before/After Showcases',
      description: 'Show off your work in a way that makes customers want to book'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Monthly Analytics Reports',
      description: 'See follower growth, engagement, and leads from social'
    }
  ];

  const contentExamples = [
    { title: 'Before/After Posts', emoji: '✨' },
    { title: 'Customer Testimonials', emoji: '⭐' },
    { title: 'Service Highlight Reels', emoji: '🎥' },
    { title: 'Local Detroit Content', emoji: '📍' },
    { title: 'Educational Tips', emoji: '💡' },
    { title: 'Promotional Offers', emoji: '🎯' },
    { title: 'Behind-the-Scenes', emoji: '👀' },
    { title: 'Seasonal Content', emoji: '🎄' },
    { title: 'Call-to-Action Posts', emoji: '📞' }
  ];

  const platformBreakdown = [
    {
      name: 'Facebook',
      icon: '👥',
      content: 'Service highlights, customer reviews, local community content, promotions',
      color: 'blue'
    },
    {
      name: 'Instagram',
      icon: '📸',
      content: 'Visual before/afters, reels, stories, engaging carousel posts',
      color: 'pink'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      content: 'Short-form video content, trending audio, behind-scenes, tips',
      color: 'purple'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      content: 'Professional authority content, industry insights (if B2B relevant)',
      color: 'blue'
    }
  ];

  const caseStudies = [
    {
      business: 'Warren Detailer',
      growth: '450 → 2,800 followers',
      timeframe: '6 months',
      result: '23 bookings directly from Instagram'
    },
    {
      business: 'Detroit Mechanic',
      growth: 'Built authority',
      timeframe: '4 months',
      result: '5-10 DMs per week asking for quotes'
    },
    {
      business: 'Troy HVAC',
      growth: 'TikTok video went viral locally',
      timeframe: '1 video',
      result: 'Phone rang off the hook for 2 weeks'
    }
  ];

  const faqs = [
    {
      question: 'Which platforms should I be on?',
      answer: 'We recommend Facebook and Instagram for all service businesses (that\'s where your customers are). TikTok is growing fast for local businesses. LinkedIn is good if you do B2B work. We handle all 4 platforms in our package.'
    },
    {
      question: 'How often do you post?',
      answer: 'Daily! 4-5 posts per week on each platform, plus daily stories. Consistency is key to building authority and staying top-of-mind with customers.'
    },
    {
      question: 'Do I need to give you content?',
      answer: 'Nope! We create everything. If you have before/after photos or want to share something specific, great. Otherwise, we handle all content creation using stock photos, graphics, and templates. Zero effort from you.'
    },
    {
      question: 'Can I approve posts before they go live?',
      answer: 'Yes! We can set up approval workflows if you want to review posts first. Most clients trust us to post directly, but the option is there.'
    },
    {
      question: 'How long until I see results?',
      answer: 'Follower growth starts immediately. Engagement typically picks up in 2-3 weeks. Direct leads from social media usually start flowing in month 2-3 as your authority builds.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Social Media Management | Michigan Digital Foundry - Warren MI</title>
        <meta name="description" content="Social media management for Warren, Detroit, Troy businesses. 4 platforms, daily posts, professional content. $499/month. Call (313) 251-2940 to get started." />
      </Helmet>
      
      <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                Stop Posting Into The Void. <span className="text-purple-400">Start Building Authority.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Daily posts + stories on 4 platforms. Professional content. SEO-optimized captions. Your brand everywhere customers look. Turn followers into paying customers. $499/month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/quote">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                    Get Started - $499/mo
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg w-full sm:w-auto">
                    See Our Content
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>4 Platforms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Daily Content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Done-For-You</span>
                </div>
              </div>
            </div>

            {/* Social Feed Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBob25lfGVufDF8fHx8MTc2MTkzMDE2OXww&ixlib=rb-4.1.0&q=80&w=200"
                        alt="Social content"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-gray-900">+340 followers</span>
                    </div>
                  </div>
                  <div className="text-purple-600">This Week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Social Media Matters */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white border-purple-200">
              <div className="text-5xl mb-4 text-purple-600">78%</div>
              <h3 className="text-xl mb-2 text-gray-900">Check Social Before Buying</h3>
              <p className="text-gray-600">No social presence = customers don't trust you</p>
            </Card>
            
            <Card className="p-8 text-center bg-white border-purple-200">
              <div className="text-5xl mb-4 text-purple-600">67%</div>
              <h3 className="text-xl mb-2 text-gray-900">More Leads From Consistent Posting</h3>
              <p className="text-gray-600">Regular content = more qualified customers</p>
            </Card>
            
            <Card className="p-8 text-center bg-white border-purple-200">
              <div className="text-5xl mb-4 text-purple-600">24/7</div>
              <h3 className="text-xl mb-2 text-gray-900">Working For You</h3>
              <p className="text-gray-600">Social media builds authority while you sleep</p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Most Business Owners Know They <span className="text-purple-600">SHOULD</span> Post... But Don't Have Time
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6">
              <div className="text-4xl mb-3">😓</div>
              <p className="text-gray-600">You're running your business, not editing videos</p>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-3">😞</div>
              <p className="text-gray-600">You post once, get no engagement, give up</p>
            </Card>
            
            <Card className="p-6">
              <div className="text-4xl mb-3">😤</div>
              <p className="text-gray-600">Your competitors post daily and look more professional</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
            Done-For-You Social Media That <span className="text-purple-600">Actually Brings Customers</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Content We <span className="text-purple-600">Create For You</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {contentExamples.map((example, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer hover:-translate-y-1 duration-300">
                <div className="text-4xl mb-3">{example.emoji}</div>
                <h3 className="text-gray-900">{example.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-12">
            Social Media Growth Package
          </h2>
          
          <Card className="p-12 bg-white text-gray-900">
            <div className="text-6xl mb-4 text-purple-600">$499<span className="text-3xl text-gray-600">/month</span></div>
            <h3 className="text-2xl mb-8 text-gray-900">Everything Done For You</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              {[
                '4 platforms (Facebook, Instagram, TikTok, LinkedIn)',
                'Daily posts (4-5 per week)',
                'Daily stories',
                'Reels/video content',
                'Professional graphic design',
                'SEO-optimized captions',
                'Local hashtags (Warren, Detroit, Metro Detroit)',
                'Community engagement',
                'Monthly analytics'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-gray-600">
              Zero effort on your part.
            </p>
          </Card>
          
          <Link to="/quote" className="inline-block mt-8">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-xl">
              Get Started - $499/month
            </Button>
          </Link>
        </div>
      </section>

      {/* Platform Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            What We Post On <span className="text-purple-600">Each Platform</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {platformBreakdown.map((platform, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <h3 className="text-2xl text-gray-900">{platform.name}</h3>
                </div>
                <p className="text-gray-600">{platform.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Real <span className="text-purple-600">Results</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-purple-50 to-white">
                <h3 className="text-xl mb-4 text-purple-600">{study.business}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-600">Growth</div>
                    <div className="text-gray-900">{study.growth}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Timeframe</div>
                    <div className="text-gray-900">{study.timeframe}</div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm text-gray-600 mb-1">Result</div>
                    <div className="text-green-600">{study.result}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            Frequently Asked <span className="text-purple-600">Questions</span>
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Ready To Build Real Authority?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            First 50 posts free when you sign up today
          </p>
          
          <Link to="/quote" className="inline-block">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-8 text-2xl">
              Get Started - $499/month
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
