import { ArrowRight, Award, Users, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Package, value: '10M+', label: 'Labels Delivered' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium Labels and Packaging"
          className="w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">India's Trusted Label Manufacturer</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background leading-tight mb-6 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            Premium Labels & 
            <span className="text-primary"> Packaging</span> Solutions
          </h1>

          <p className="text-lg text-background/80 mb-8 leading-relaxed animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            Transform your products with our high-quality labels, stickers, and packaging solutions. 
            We deliver excellence in every print, serving industries across India with cutting-edge 
            printing technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-300">
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="secondary" className="bg-background/20 border border-background/40 text-background hover:bg-background/30 hover:scale-105 transition-transform duration-300">
              Get Free Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center sm:text-left animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${1000 + index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg mb-2 hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-background">{stat.value}</div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in opacity-0 [animation-delay:1500ms] [animation-fill-mode:forwards]">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-background/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
