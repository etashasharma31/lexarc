import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWrapper from './components/layout/LayoutWrapper';
import Home from './pages/public/Home';
import SignUp from './pages/public/SignUp';
import Onboarding from './pages/public/Onboarding';
import ErrorPage404 from './pages/public/ErrorPage404';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import AiAssistant from './pages/public/AiAssistant';
import CheckoutConfirmation from './pages/checkout/CheckoutConfirmation';
import CheckoutPaymentMethodsUpdated from './pages/checkout/CheckoutPaymentMethodsUpdated';
import CheckoutReview from './pages/checkout/CheckoutReview';
import ComplianceCalendar from './pages/dashboard/ComplianceCalendar';
import ConsultationBooking from './pages/public/ConsultationBooking';
import ContactUs from './pages/public/ContactUs';
import DocumentVault from './pages/dashboard/DocumentVault';
import LawyerPanelDashboard from './pages/dashboard/LawyerPanelDashboard';
import LawyerPublicProfile from './pages/public/LawyerPublicProfile';
import Login from './pages/public/Login';
import Notifications from './pages/dashboard/Notifications';
import OrdersCaseHistory from './pages/dashboard/OrdersCaseHistory';
import PaymentsBilling from './pages/dashboard/PaymentsBilling';
import Pricing from './pages/public/Pricing';
import PrivacyPolicy from './pages/public/PrivacyPolicy';
import RefundPolicy from './pages/public/RefundPolicy';
import ResourceLibrary from './pages/public/ResourceLibrary';
import ReviewsTestimonials from './pages/public/ReviewsTestimonials';
import SearchResults from './pages/public/SearchResults';
import ServicesListing from './pages/public/ServicesListing';
import ServiceDetailBusinessReg from './pages/public/ServiceDetailBusinessReg';
import TermsConditions from './pages/public/TermsConditions';
import UserDashboard from './pages/dashboard/UserDashboard';
import UserProfile from './pages/public/UserProfile';
import DocumentReview from './pages/dashboard/DocumentReview';
import AboutUs from './pages/public/AboutUs';
import Careers from './pages/public/Careers';
import UserServices from './pages/dashboard/UserServices';
import Templates from './pages/public/Templates';
import Guides from './pages/public/Guides';
import GuideAnalysis from './pages/public/GuideAnalysis';
import Statutes from './pages/public/Statutes';
import Status from './pages/public/Status';

import DocumentUploadProtocol from './pages/dashboard/DocumentUploadProtocol';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/404-error-page" element={<ErrorPage404 />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/checkout-confirmation" element={<CheckoutConfirmation />} />
          <Route path="/checkout-payment-methods-updated" element={<CheckoutPaymentMethodsUpdated />} />
          <Route path="/checkout-review" element={<CheckoutReview />} />
          <Route path="/compliance-calendar" element={<ComplianceCalendar />} />
          <Route path="/consultation-booking" element={<ConsultationBooking />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/document-vault" element={<DocumentVault />} />
          <Route path="/lawyer-panel-dashboard" element={<LawyerPanelDashboard />} />
          <Route path="/lawyer-cases" element={<LawyerPanelDashboard />} />
          <Route path="/lawyer-calendar" element={<LawyerPanelDashboard />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/document-audit-protocol" element={<DocumentUploadProtocol />} />
          <Route path="/orders-case-history" element={<OrdersCaseHistory />} />
          <Route path="/payments-billing" element={<PaymentsBilling />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/reviews-testimonials" element={<ReviewsTestimonials />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/services" element={<ServicesListing />} />
          <Route path="/service-detail-business-reg" element={<ServiceDetailBusinessReg />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/user-services" element={<UserServices />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideAnalysis />} />
          <Route path="/statutes" element={<Statutes />} />
          <Route path="/status" element={<Status />} />
          <Route path="/lawyer-profile" element={<LawyerPublicProfile />} />
        </Route>
        
        {/* Specialized App Routes (Standalone Layouts) */}
        <Route path="/ai-assistant" element={<AiAssistant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
