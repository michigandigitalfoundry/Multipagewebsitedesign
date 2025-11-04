import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Star, ArrowRight, HardHat, Calendar, TrendingUp, Shield } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Helmet } from 'react-helmet';

export default function ContractorsPage() {
  const painPoints = [
    { icon: <Phone className="w-8 h-8 text-red-600" />, title: 'Not Enough Quality Leads', description: 'Struggling to find good projects' },
    { icon: <TrendingUp className="w-8 h-8 text-red-600" />, title: 'Low-Ball Price Shoppers', description: 'Customers only care about cheapest price' },
    { icon: <Star className="w-8 h-8 text-red-600" />, title: 'Competitors Getting All the Work', description: 'Other contractors winning bids' },
    { icon: <Calendar className="w-8 h-8 text-red-600" />, title: 'No Online Presence', description: 'Invisible when customers search online' }
  ];

  const benefits = [
    { icon: <Shield className="w-8 h-8 text-orange-600" />, title: 'Professional Portfolio Showcase', description: 'Display your best work to attract quality clients' },
    { icon: <Phone className="w-8 h-8 text-orange-600" />, title: 'Instant Quote Requests', description: 'Customers request quotes 24/7. No more phone tag.' },
    { icon: <HardHat className="w-8 h-8 text-orange-600" />, title: 'Before/After Galleries', description: 'Show transformation results to win more jobs' },
    { icon: <Star className="w-8 h-8 text-orange-600" />, title: 'Rank for Contractor Searches', description: 'Show up first for "contractor near me" searches' }
  ];

  const services = [
    {
      title: 'Contractor Portfolio Website',
      price: '$2,500',
      description: 'Custom website designed to get you quality leads',
      features: ['Professional portfolio gallery', 'Instant quote request forms', 'Before/after project showcase', 'Service area mapping', 'Mobile-responsive design', 'License & insurance display']
    },
    {
      title: 'Contractor SEO',
      price: '$800/month',
      description: 'Dominate local contractor searches in Metro Detroit',
      features: ['Google Business optimization', 'Rank for "contractor near me"', 'Review generation system', 'Local citation building', 'Competitor conquest', 'Monthly reports']
    },
    {
      title: 'Lead Generation System',
      price: '$499/month',
      description: 'Generate qualified leads consistently',
      features: ['Lead capture optimization', 'Follow-up automation', 'Quote request management', 'Customer nurturing campaigns', 'Lead quality tracking', 'Performance reporting']
    }
  ];

  const faqs = [
    {
      question: 'How much do you charge?',
      answer: 'Website: $2,500 one-time. SEO: $800/month. Lead Generation: $499/month. No long-term contracts. Most contractors do all three and see 3-5X more qualified leads within 90 days.'
    },
    {
      question: 'What\'s the ROI for contractors?',
      answer: 'Average contractor project is worth $2,000-$50,000+. Our clients get 10-25 additional qualified leads per month. Even landing one extra project per month pays for our services many times over.'
    },
    {
      question: 'Do I have to sign a contract?',
      answer: 'No long-term contracts. Month-to-month for SEO and lead generation. The website is yours after we build it. We don\'t lock contractors into contracts because we know you\'ll stay when you see results.'
    },
    {
      question: 'How fast will I see results?',
      answer: 'Website goes live in 2 weeks and starts generating leads immediately. SEO takes 60-90 days to see significant ranking improvements. Lead generation systems show results within 30 days. Most contractors see measurable ROI within the first 90 days.'
    },
    {
      question: 'Do you work with contractors in Warren/Detroit?',
      answer: 'Yes! We specialize in Metro Detroit contractors. We know the Warren, Detroit, Troy, Sterling Heights markets inside and out. We understand seasonal construction demand and know exactly how to position you as the go-to contractor in your area.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contractor Marketing & Web Design | More Projects</title>
        <meta name="description" content="Contractors: Get 10-25 qualified leads per month. Custom websites & local SEO for Metro Detroit. Call (313) 251-2940." />
        <meta property="og:title" content="Contractor Marketing & Web Design | More Projects" />
        <meta property="og:description" content="Contractors: Get 10-25 qualified leads per month. Custom websites & local SEO for Metro Detroit. Call (313) 251-2940." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <HardHat className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500">Contractor Marketing Specialists</span>
                </div>
                <h1 className="text-5xl md:text-6xl mb-6">
                  Contractor Websites & Marketing That <span className="text-orange-500">Generate Leads</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Stop chasing low-quality leads. Get 10-25 qualified leads per month with a professional website and local SEO that puts you first on Google when customers search "contractor near me."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/quote">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                      Get More Leads
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
                    <span>10-25 Qualified Leads Per Month</span>
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
                  <div className="text-2xl text-gray-900 mb-4">Sterling Heights Contractor Success Story</div>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-2">BEFORE</div>
                      <div className="text-gray-900">3 leads per month</div>
                      <div className="text-gray-600">Mostly price shoppers</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-orange-600 mx-auto transform rotate-90" />
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-sm text-green-700 mb-2">AFTER 4 MONTHS</div>
                      <div className="text-green-900">18 qualified leads per month</div>
                      <div className="text-green-700">#1 for contractor searches</div>
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
              Why Contractors <span className="text-red-600">Struggle to Get Quality Leads</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              You do great work. But if customers can't find you online, you're invisible.
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
              How We Help <span className="text-orange-600">Contractors</span> Get More Leads
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
              Our Services for <span className="text-orange-600">Contractors</span>
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
                  Get More Leads
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl mb-6">
              Average Contractor Client Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
                <div className="text-5xl mb-4 text-orange-500">18</div>
                <div className="text-xl mb-2">Qualified Leads Per Month</div>
                <div className="text-gray-400">Up from 3 leads/month</div>
              </Card>
              
              <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
                <div className="text-5xl mb-4 text-green-400">Higher</div>
                <div className="text-xl mb-2">Value Projects</div>
                <div className="text-gray-400">Quality leads = better projects</div>
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
              Ready to Get Quality Contractor Leads?
            </h2>
            <p className="text-xl mb-8">
              Let's fill your pipeline with qualified contractor leads. Free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                  Get More Leads
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