import type { JSX } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import HomePage from "./pages/HomePage";
import MartlytePage from "./pages/MartlytePage";
import ProductsPage from "./pages/ProductsPage";
import OfflinePosPage from "./pages/OfflinePosPage";
import MetalytePage from "./pages/MetalytePage";
import RecoSalesPptPage from "./pages/RecoSalesPptPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DataDeletion from "./pages/DataDeletion";

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/casestudies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/martlyte" element={<MartlytePage />} />
        <Route path="/products/offline-pos" element={<OfflinePosPage />} />
        <Route path="/products/metalyte" element={<MetalytePage />} />
        <Route path="/products/recosales/ppt" element={<RecoSalesPptPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

