import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import WebsiteServicePage from './components/pages/WebsiteServicePage';
import SEOServicePage from './components/pages/SEOServicePage';
import SocialMediaServicePage from './components/pages/SocialMediaServicePage';
import ContactPage from './components/pages/ContactPage';
import QuotePage from './components/pages/QuotePage';
import WorkPage from './components/pages/WorkPage';
import AboutPage from './components/pages/AboutPage';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsPage from './components/pages/TermsPage';
import CalendlyWidget from './components/CalendlyWidget';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/website" element={<WebsiteServicePage />} />
          <Route path="/services/seo" element={<SEOServicePage />} />
          <Route path="/services/social-media" element={<SocialMediaServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
        <CalendlyWidget />
        <Toaster />
      </div>
    </Router>
  );
}
