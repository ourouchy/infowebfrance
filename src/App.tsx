import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HeroBanner from './components/home/HeroBanner';
import GuaranteeBanner from './components/home/GuaranteeBanner';
import Programs from './components/home/Programs';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';
import ContactForm from './components/home/ContactForm';
import FormationsPage from './components/formations/FormationsPage';
import FormationDetailPage from "./components/formation-detail/FormationDetailPage"; 
import ScrollToTop from "./components/common/ScrollToTop"; 
import PourquoiNousPage from './components/pourquoi-nous/PourquoiNousPage';
import ContactPage from './components/contact/ContactPage';
import FinancementPage from './components/financement/FinancementPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <Layout>
            <HeroBanner />
            <GuaranteeBanner />
            <Programs />
            <Testimonials />
            <FAQ />
            <ContactForm />
          </Layout>
        } />

        {/* Formations Overview Page */}
        <Route path="/formations" element={
          <Layout>
            <FormationsPage />
          </Layout>
        } />

       <Route
         path="/formations/:name"
         element={
           <Layout>
             <FormationDetailPage />
           </Layout>
         }
       />
       <Route path="/pourquoi-nous" element={
          <Layout>
            <PourquoiNousPage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactPage />
          </Layout>
        } />
        <Route path="/financement" element={
          <Layout>
            <FinancementPage />
          </Layout>
        } />
      </Routes>
      
    </Router>
  );
}

export default App;
