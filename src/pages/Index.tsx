import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Milan Label - Premium Labels & Packaging Solutions | India</title>
        <meta name="description" content="Milan Label is India's trusted manufacturer of premium product labels, industrial stickers, and custom packaging solutions. 25+ years of excellence in label printing." />
        <meta name="keywords" content="labels, stickers, packaging, label manufacturer India, product labels, barcode labels, custom packaging" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <CapabilitiesSection />
        <ContactSection />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
};

export default Index;
