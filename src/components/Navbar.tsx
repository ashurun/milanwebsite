import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import milanLogo from '@/assets/milan-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/98 shadow-lg backdrop-blur-md' : 'bg-background/95 backdrop-blur-sm'
    } border-b border-border`}>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@milanlabel.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>info@milanlabel.com</span>
            </a>
          </div>
          <span className="hidden md:block">Premium Labels & Packaging Solutions</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={milanLogo} alt="Milan Label Logo" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <span className="font-serif font-bold text-xl text-foreground">Milan Label</span>
              <p className="text-xs text-muted-foreground -mt-1">Packaging Excellence</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-foreground hover:text-primary transition-colors font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="hover:scale-105 transition-transform duration-300">
              Request Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" className="w-full mt-4">
              Request Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
