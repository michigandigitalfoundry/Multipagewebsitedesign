import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/about' },
    { name: 'Our Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">MDF</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-gray-900">Michigan Digital Foundry</div>
              <div className="text-xs text-gray-500">Warren, MI</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:5863658389"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(586) 365-8389</span>
            </a>
            <Link to="/quote">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
                Get More Customers
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:5863658389"
                className="px-4 py-2 flex items-center space-x-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>(586) 365-8389</span>
              </a>
              <Link to="/quote" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Get More Customers
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
