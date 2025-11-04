import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm mb-4">
              Digital marketing for Metro Detroit businesses. We get you more customers. Period.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581507116081"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/michigandigitalfoundry/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/website" className="hover:text-orange-500 transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="hover:text-orange-500 transition-colors">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="hover:text-orange-500 transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/what-we-offer" className="hover:text-orange-500 transition-colors">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/areas/warren-mi" className="hover:text-orange-500 transition-colors">
                  Warren, MI
                </Link>
              </li>
              <li>
                <Link to="/areas/detroit-mi" className="hover:text-orange-500 transition-colors">
                  Detroit, MI
                </Link>
              </li>
              <li>
                <Link to="/areas/troy-mi" className="hover:text-orange-500 transition-colors">
                  Troy, MI
                </Link>
              </li>
              <li>
                <Link to="/areas/sterling-heights-mi" className="hover:text-orange-500 transition-colors">
                  Sterling Heights, MI
                </Link>
              </li>
              <li>
                <Link to="/areas/royal-oak-mi" className="hover:text-orange-500 transition-colors">
                  Royal Oak, MI
                </Link>
              </li>
              <li>
                <Link to="/areas/birmingham-mi" className="hover:text-orange-500 transition-colors">
                  Birmingham, MI
                </Link>
              </li>
              <li>
                <Link to="/areas/michigan" className="hover:text-orange-500 transition-colors">
                  All Michigan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h3 className="text-white mb-4">Industries We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/industries/hvac-contractors" className="hover:text-orange-500 transition-colors">
                  HVAC Contractors
                </Link>
              </li>
              <li>
                <Link to="/industries/plumbers" className="hover:text-orange-500 transition-colors">
                  Plumbers
                </Link>
              </li>
              <li>
                <Link to="/industries/auto-detailing" className="hover:text-orange-500 transition-colors">
                  Auto Detailing
                </Link>
              </li>
              <li>
                <Link to="/industries/dentists" className="hover:text-orange-500 transition-colors">
                  Dentists
                </Link>
              </li>
              <li>
                <Link to="/industries/contractors" className="hover:text-orange-500 transition-colors">
                  Contractors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Warren, Michigan<br />Metro Detroit Area</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:3132512940" className="hover:text-orange-500 transition-colors">
                  (313) 251-2940
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info.michigandigitalfoundry@gmail.com" className="hover:text-orange-500 transition-colors">
                  info.michigandigitalfoundry@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Mon-Fri: 9am-6pm EST<br />Sat-Sun: By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023-2025 Michigan Digital Foundry | Proudly Based in Warren, Michigan</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
