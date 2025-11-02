import { Link } from 'react-router-dom';
import { Home, Phone, Mail, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full p-8 lg:p-12 text-center">
        {/* Large 404 */}
        <div className="text-9xl text-orange-600 mb-6">404</div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
          Oops! This Page Took A Wrong Turn
        </h1>
        
        {/* Message */}
        <p className="text-xl text-gray-600 mb-8">
          Looks like you've wandered off the beaten path. Don't worry—even the best websites have dead ends. Let's get you back on track!
        </p>

        {/* Navigation Links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Link to="/" className="group">
            <Card className="p-6 hover:shadow-xl hover:border-orange-600 transition-all">
              <Home className="w-8 h-8 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-gray-900">Home</div>
            </Card>
          </Link>
          
          <Link to="/services" className="group">
            <Card className="p-6 hover:shadow-xl hover:border-orange-600 transition-all">
              <Search className="w-8 h-8 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-gray-900">Services</div>
            </Card>
          </Link>
          
          <Link to="/contact" className="group">
            <Card className="p-6 hover:shadow-xl hover:border-orange-600 transition-all">
              <Mail className="w-8 h-8 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-gray-900">Contact</div>
            </Card>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
              Go To Homepage
            </Button>
          </Link>
          <a href="tel:3132512940">
            <Button variant="outline" className="px-8 py-3 text-lg w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (313) 251-2940
            </Button>
          </a>
        </div>

        {/* Helpful Info */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            Need help finding something specific?
          </p>
          <p className="text-sm text-gray-500">
            Contact us at{' '}
            <a href="mailto:info.michigandigitalfoundry@gmail.com" className="text-orange-600 hover:underline">
              info.michigandigitalfoundry@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:3132512940" className="text-orange-600 hover:underline">
              (313) 251-2940
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
