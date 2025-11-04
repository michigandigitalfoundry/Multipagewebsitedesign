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
import WhatWeOfferPage from './components/pages/WhatWeOfferPage';
import NotFoundPage from './components/pages/NotFoundPage';

import WarrenAreaPage from './components/pages/areas/WarrenAreaPage';
import DetroitAreaPage from './components/pages/areas/DetroitAreaPage';
import TroyAreaPage from './components/pages/areas/TroyAreaPage';
import SterlingHeightsAreaPage from './components/pages/areas/SterlingHeightsAreaPage';
import RoyalOakAreaPage from './components/pages/areas/RoyalOakAreaPage';
import BirminghamAreaPage from './components/pages/areas/BirminghamAreaPage';
import MichiganAreaPage from './components/pages/areas/MichiganAreaPage';

import HVACContractorsPage from './components/pages/industries/HVACContractorsPage';
import PlumbersPage from './components/pages/industries/PlumbersPage';
import AutoDetailingPage from './components/pages/industries/AutoDetailingPage';
import DentistsPage from './components/pages/industries/DentistsPage';
import ContractorsPage from './components/pages/industries/ContractorsPage';

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
          <Route path="/what-we-offer" element={<WhatWeOfferPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          <Route path="/areas/warren-mi" element={<WarrenAreaPage />} />
          <Route path="/areas/detroit-mi" element={<DetroitAreaPage />} />
          <Route path="/areas/troy-mi" element={<TroyAreaPage />} />
          <Route path="/areas/sterling-heights-mi" element={<SterlingHeightsAreaPage />} />
          <Route path="/areas/royal-oak-mi" element={<RoyalOakAreaPage />} />
          <Route path="/areas/birmingham-mi" element={<BirminghamAreaPage />} />
          <Route path="/areas/michigan" element={<MichiganAreaPage />} />
          
          <Route path="/industries/hvac-contractors" element={<HVACContractorsPage />} />
          <Route path="/industries/plumbers" element={<PlumbersPage />} />
          <Route path="/industries/auto-detailing" element={<AutoDetailingPage />} />
          <Route path="/industries/dentists" element={<DentistsPage />} />
          <Route path="/industries/contractors" element={<ContractorsPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
