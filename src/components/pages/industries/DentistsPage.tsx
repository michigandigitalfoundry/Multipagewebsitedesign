import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Star, ArrowRight, Heart, Calendar, TrendingUp, Shield } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Helmet } from 'react-helmet';

export default function DentistsPage() {
  const painPoints = [
    { icon: <Calendar className="w-8 h-8 text-red-600" />, title: 'Empty Appointment Slots', description: 'Low patient volume = declining revenue' },
    { icon: <Phone className="w-8 h-8 text-red-600" />, title: 'Competitors Stealing Patients', description: 'Other practices getting new patients' },
    { icon: <Star className="w-8 h-8 text-red-600" />, title: 'Outdated Website', description: 'Patients expect modern online experience' },
    { icon: <TrendingUp className="w-8 h-8 text-red-600" />, title: 'Low New Patient Numbers', description: 'Not enough new patients each month' }
  ];

  const benefits = [
    { icon: <Shield className="w-8 h-8 text-orange-600" />, title: 'HIPAA-Compliant Forms', description: 'Secure patient forms and communications' },
    { icon: <Calendar className="w-8 h-8 text-orange-600" />, title: 'Online Appointment Booking', description: 'Patients book 24/7. No more phone tag.' },
    { icon: <Star className="w-8 h-8 text-orange-600" />, title: 'Patient Review Generation', description: '5-star reviews = more new patients automatically' },
    { icon: <Heart className="w-8 h-8 text-orange-600" />, title: 'Rank #1 for Dental Searches', description: 'Show up first for "dentist near me" searches' }
  ];

  const services = [
    {
      title: 'HIPAA-Compliant Dental Website',
      price: '$2,500',
      description: 'Custom website designed to get you new patients',
      features: ['HIPAA-compliant forms', 'Online appointment booking', 'Service pages for all procedures', 'Mobile-responsive design', 'Patient testimonials', 'Insurance information']
    },
    {
      title: 'Dental Practice SEO',
      price: '$800/month',
      description: 'Dominate local dental searches in Metro Detroit',
      features: ['Google Business optimization', 'Rank for "dentist near me"', 'Patient review generation', 'Local citation building', 'Competitor conquest', 'Monthly reports']
    },
    {
      title: 'Patient Review System',
      price: '$499/month',
      description: 'Build trust and attract new patients',
      features: ['Automated review requests', 'Google & Facebook reviews', 'Reputation monitoring', 'Patient testimonials', 'Review response management', 'Performance tracking']
    }
  ];

  const faqs = [
    {
      question: 'How much do you charge?',
      answer: 'Website: $2,500 one-time. SEO: $800/month. Patient Review System: $499/month. No long-term contracts. Most dental practices do all three and see 3-5X more new patients within 90 days.'
    },
    {
      question: 'What\'s the ROI for dental practices?',
      answer: 'Average new patient lifetime value is $1,000-$3,000+. Our clients get 20-40 additional new patients per month. That\'s $20,000-$120,000 in additional monthly revenue for an $800-$1,300/month investment. The ROI is substantial.'
    },
    {
      question: 'Are your websites HIPAA compliant?',
      answer: 'Yes! All our dental websites are built with HIPAA compliance in mind. We use secure forms, encrypted communications, and follow all healthcare privacy regulations. Patient data security is our top priority.'
    },
    {
      question: 'How fast will I see results?',
      answer: 'Website goes live in 2 weeks and starts generating new patient leads immediately. SEO takes 60-90 days to see significant ranking improvements. Review systems show results within 30 days. Most dental practices see measurable ROI within the first 90 days.'
    },
    {
      question: 'Do you work with dental practices in Warren/Detroit?',
      answer: 'Yes! We specialize in Metro Detroit dental practices. We know the Warren, Detroit, Troy, Sterling Heights markets inside and out. We understand dental marketing compliance and know exactly how to position you as the go-to dentist in your area.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dental Marketing & Web Design | Get More Patients</title>
        <meta name="description" content="Dentists: Get 20-40 new patients per month with our websites & local SEO. HIPAA-compliant. Call (313) 251-2940." />
        <meta property="og:title" content="Dental Marketing & Web Design | Get More Patients" />
        <meta property="og:description" content="Dentists: Get 20-40 new patients per month with our websites & local SEO. HIPAA-compliant. Call (313) 251-2940." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-500">Dental Marketing Specialists</span>
                </div>
                <h1 className="text-5xl md:text-6xl mb-6">
                  Dental Practice Marketing & Websites That <span className="text-orange-500">Bring New Patients</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Stop waiting for new patients to find you. Get 20-40 new patients per month with a professional HIPAA-compliant website and local SEO that puts you first on Google when patients search "dentist near me."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/quote">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                      Get More Patients
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
                    <span>20-40 New Patients Per Month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No Long-Term Contracts</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="p-8 bg-white">
                  <div className="text-2xl text-gray-900 mb-4">Royal Oak Dental Practice Success Story</div>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-2">BEFORE</div>
                      <div className="text-gray-900">8 new patients per month</div>
                      <div className="text-gray-600">Page 3 on Google searches</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-orange-600 mx-auto transform rotate-90" />
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-sm text-green-700 mb-2">AFTER 3 MONTHS</div>
                      <div className="text-green-900">32 new patients per month</div>
                      <div className="text-green-700">#1 for dental searches</div>
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
              Why Dental Practices <span className="text-red-600">Struggle to Get New Patients</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              You're great at dentistry. But if patients can't find you online, you're invisible.
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
              How We Help <span className="text-orange-600">Dental Practices</span> Get More Patients
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
              Our Services for <span className="text-orange-600">Dental Practices</span>
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
                  Get More Patients
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl mb-6">
              Average Dental Practice Client Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
                <div className="text-5xl mb-4 text-orange-500">32</div>
                <div className="text-xl mb-2">New Patients Per Month</div>
                <div className="text-gray-400">Up from 8 new patients/month</div>
              </Card>
              
              <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
                <div className="text-5xl mb-4 text-green-400">$96K</div>
                <div className="text-xl mb-2">Additional Monthly Revenue</div>
                <div className="text-gray-400">Average across our dental clients</div>
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
              Ready to Get More Dental Patients?
            </h2>
            <p className="text-xl mb-8">
              Let's fill your appointment book with qualified new patients. Free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl">
                  Get More Patients
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