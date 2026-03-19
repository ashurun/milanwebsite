import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import useScrollAnimation from '@/hooks/useScrollAnimation';


const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - will be connected to email backend later
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Building,
      title: 'Office Address',
      details: ['# 3-6-20/410, Tirumala Apts, Himayathnagar', 'Street No. 19, Hyderabad-500029, Telangana, INDIA'],
    },
    {
      icon: MapPin,
      title: 'Plant Address',
      details: ['# SY.808P, Medchal Industrial Estate', 'Hyderabad-501401, Telangana, INDIA'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 94180 76000', '+91 40 2322 1234'],
      links: ['tel:+919418076000', 'tel:+914023221234'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@milanlabel.com', 'sales@milanlabel.com'],
      links: ['mailto:info@milanlabel.com', 'mailto:sales@milanlabel.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Let's Discuss Your Requirements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your brand with premium labels? Get in touch with our team 
            for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`bg-card p-8 rounded-2xl border border-border transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                  className="transition-all duration-300 focus:scale-[1.01]"
                />
              </div>
              <Button type="submit" className="w-full gap-2 hover:scale-[1.02] transition-transform duration-300" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-x-1 transition-all duration-500 ${
                  infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: infoVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  {item.details.map((detail, idx) => (
                    item.links && item.links[idx] ? (
                      <a key={idx} href={item.links[idx]} className="text-muted-foreground text-sm block hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                    )
                  ))}
                </div>
              </div>
            ))}


            {/* Map */}
            <div 
              className={`bg-card rounded-xl border border-border overflow-hidden h-64 transition-all duration-700 ${
                infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: infoVisible ? '600ms' : '0ms' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60894.53158453619!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1702901234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Milan Label Location - Hyderabad, Telangana"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
