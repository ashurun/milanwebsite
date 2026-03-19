import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'Product Labels',
    'Industrial Stickers',
    'Barcode Labels',
    'Security Labels',
    'Custom Packaging',
    'Holographic Labels',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <span className="font-serif font-bold text-xl">Milan Label</span>
                <p className="text-xs text-background/60 -mt-1">Packaging Excellence</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted partner for premium labels and packaging solutions. 
              Delivering quality and innovation since 1998.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-background/70 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-background/70 text-sm">
                  123 Industrial Area<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  <p>+91 98765 43210</p>
                  <p>+91 22 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  <p>info@milanlabel.com</p>
                  <p>sales@milanlabel.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Milan Label. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
