import { Printer, Layers, Sparkles, Shield, Zap, Palette } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const CapabilitiesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation();

  const capabilities = [
    {
      icon: Printer,
      title: 'Advanced Printing',
      description: 'Flexographic, digital, and offset printing capabilities for various label types and volumes.',
    },
    {
      icon: Layers,
      title: 'Multiple Materials',
      description: 'Paper, PP, PET, BOPP, vinyl, and specialty substrates for diverse applications.',
    },
    {
      icon: Sparkles,
      title: 'Premium Finishes',
      description: 'Embossing, debossing, foil stamping, spot UV, lamination, and varnishing options.',
    },
    {
      icon: Shield,
      title: 'Security Features',
      description: 'Holographic labels, tamper-evident seals, and anti-counterfeiting solutions.',
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Efficient production processes ensuring timely delivery for urgent requirements.',
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'In-house design team to create stunning visuals that align with your brand.',
    },
  ];

  const industries = [
    'Pharmaceuticals',
    'Food & Beverage',
    'Cosmetics',
    'Chemicals',
    'Electronics',
    'Textiles',
    'Automotive',
    'FMCG',
  ];

  return (
    <section id="capabilities" className="py-20 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            State-of-the-Art Manufacturing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Equipped with the latest technology and expertise to deliver exceptional quality 
            across all labeling and packaging requirements.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className={`group bg-background p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div 
          ref={industriesRef}
          className={`bg-background rounded-2xl p-8 md:p-12 border border-border transition-all duration-700 ${
            industriesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Industries We Serve</h3>
            <p className="text-muted-foreground">Trusted by leading companies across diverse sectors</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span
                key={index}
                className={`bg-card text-foreground px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 cursor-default ${
                  industriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: industriesVisible ? `${200 + index * 75}ms` : '0ms' }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
