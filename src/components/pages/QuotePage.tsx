import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { toast } from 'sonner@2.0.3';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    website: '',
    services: {
      website: false,
      ecommerce: false,
      booking: false,
      seo: false,
      socialMedia: false
    },
    projectDetails: '',
    timeline: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      id: 'website',
      name: 'Custom Website',
      price: '$2,500',
      description: 'Professional website that converts visitors into customers'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Website',
      price: '$2,500',
      description: 'Online store with shopping cart and payment processing'
    },
    {
      id: 'booking',
      name: 'Booking System Website',
      price: '$2,500',
      description: 'Website with online scheduling and appointment booking'
    },
    {
      id: 'seo',
      name: 'Local SEO',
      price: '$1,000/month',
      description: 'Rank #1 in Google for local searches in Metro Detroit'
    },
    {
      id: 'socialMedia',
      name: 'Social Media Management',
      price: '$499/month',
      description: 'Daily posts on 4 platforms with professional content'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedServices = Object.entries(formData.services)
      .filter(([_, selected]) => selected)
      .map(([service]) => service);
    
    if (selectedServices.length === 0) {
      toast.error('Please select at least one service');
      return;
    }
    
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Quote request received! We\'ll send you a detailed proposal within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        website: '',
        services: {
          website: false,
          ecommerce: false,
          booking: false,
          seo: false,
          socialMedia: false
        },
        projectDetails: '',
        timeline: '',
        budget: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [serviceId]: !formData.services[serviceId as keyof typeof formData.services]
      }
    });
  };

  const calculateEstimate = () => {
    let oneTime = 0;
    let monthly = 0;

    if (formData.services.website || formData.services.ecommerce || formData.services.booking) {
      oneTime = 2500;
    }
    if (formData.services.seo) monthly += 1000;
    if (formData.services.socialMedia) monthly += 499;

    return { oneTime, monthly };
  };

  const estimate = calculateEstimate();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Get Your Free <span className="text-orange-500">Growth Plan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Tell us about your business and we'll create a custom plan to get you more customers. No pressure, just a clear roadmap to growth.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl mb-2 text-gray-900">Request A Quote</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll send you a detailed proposal within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl mb-4 text-gray-900">Your Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(586) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="businessName" className="block text-sm mb-2 text-gray-700">
                          Business Name *
                        </label>
                        <Input
                          id="businessName"
                          name="businessName"
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="ABC Services"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="website" className="block text-sm mb-2 text-gray-700">
                          Current Website (if any)
                        </label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div>
                    <h3 className="text-xl mb-4 text-gray-900">Select Services *</h3>
                    <p className="text-sm text-gray-600 mb-4">Choose all services you're interested in</p>
                    
                    <div className="space-y-4">
                      {services.map((service) => (
                        <Card
                          key={service.id}
                          className={`p-4 cursor-pointer transition-all border-2 ${
                            formData.services[service.id as keyof typeof formData.services]
                              ? 'border-orange-600 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleServiceToggle(service.id)}
                        >
                          <div className="flex items-start space-x-4">
                            <Checkbox
                              checked={formData.services[service.id as keyof typeof formData.services]}
                              onCheckedChange={() => handleServiceToggle(service.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="text-lg text-gray-900">{service.name}</h4>
                                <span className="text-orange-600">{service.price}</span>
                              </div>
                              <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl mb-4 text-gray-900">Project Details</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="projectDetails" className="block text-sm mb-2 text-gray-700">
                          Tell us about your project and goals *
                        </label>
                        <Textarea
                          id="projectDetails"
                          name="projectDetails"
                          required
                          value={formData.projectDetails}
                          onChange={handleChange}
                          placeholder="Example: I run an auto detailing business in Warren. I need a website with online booking and want to rank #1 for 'auto detailing Warren MI'. Currently getting 5 calls per week, want to double that..."
                          rows={6}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="timeline" className="block text-sm mb-2 text-gray-700">
                            When do you want to launch?
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP (1-2 weeks)</option>
                            <option value="1month">Within 1 month</option>
                            <option value="2months">1-2 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm mb-2 text-gray-700">
                            Monthly Marketing Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                          >
                            <option value="">Select budget</option>
                            <option value="500">$500 - $1,000/month</option>
                            <option value="1000">$1,000 - $2,000/month</option>
                            <option value="2000">$2,000 - $5,000/month</option>
                            <option value="5000">$5,000+/month</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        Get My Free Quote <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll send you a detailed proposal within 24 hours. No spam, no pressure.
                  </p>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Live Estimate */}
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-600 sticky top-24">
                <h3 className="text-xl mb-4 text-gray-900">Your Estimate</h3>
                
                {estimate.oneTime > 0 || estimate.monthly > 0 ? (
                  <div className="space-y-4">
                    {estimate.oneTime > 0 && (
                      <div>
                        <div className="text-sm text-gray-600 mb-1">One-Time Investment</div>
                        <div className="text-3xl text-orange-600">${estimate.oneTime.toLocaleString()}</div>
                        <p className="text-xs text-gray-500 mt-1">Website development</p>
                      </div>
                    )}
                    
                    {estimate.monthly > 0 && (
                      <div className={estimate.oneTime > 0 ? 'pt-4 border-t' : ''}>
                        <div className="text-sm text-gray-600 mb-1">Monthly Investment</div>
                        <div className="text-3xl text-orange-600">${estimate.monthly.toLocaleString()}/mo</div>
                        <p className="text-xs text-gray-500 mt-1">Ongoing marketing services</p>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-600 mb-2">Expected ROI</div>
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span>3-5X return on investment</span>
                      </div>
                      <div className="flex items-center space-x-2 text-green-600 mt-1">
                        <CheckCircle className="w-5 h-5" />
                        <span>10-50 new customers/month</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-2">👆</div>
                    <p className="text-sm text-gray-600">Select services above to see your estimate</p>
                  </div>
                )}
              </Card>

              {/* What Happens Next */}
              <Card className="p-6">
                <h3 className="text-lg mb-4 text-gray-900">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600">1</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">We Review Your Request</div>
                      <p className="text-xs text-gray-600">Usually within a few hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600">2</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Custom Proposal Sent</div>
                      <p className="text-xs text-gray-600">Detailed plan within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600">3</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Strategy Call (Optional)</div>
                      <p className="text-xs text-gray-600">Discuss your growth plan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600">4</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Start Growing</div>
                      <p className="text-xs text-gray-600">Launch in 1-2 weeks</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Guarantee */}
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="text-lg mb-2 text-gray-900">✓ Our Guarantee</h3>
                <p className="text-sm text-gray-600">
                  If we don't increase your customer flow within 90 days, we'll work for free until we do. That's how confident we are.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-gray-900">
            Why <span className="text-orange-600">Metro Detroit Businesses</span> Trust Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl mb-2 text-gray-900">50+ Businesses Served</h3>
              <p className="text-gray-600">We've helped over 50 local businesses grow their customer base</p>
            </Card>
            
            <Card className="p-8">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl mb-2 text-gray-900">Copywriting Masters</h3>
              <p className="text-gray-600">We know what words convert browsers into buyers</p>
            </Card>
            
            <Card className="p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl mb-2 text-gray-900">Fast Execution</h3>
              <p className="text-gray-600">Launch in 1-2 weeks, not months. We move fast</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
