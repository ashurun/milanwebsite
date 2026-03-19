import { Check, Target, Eye } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  const highlights = [
    'State-of-the-art printing technology',
    'ISO 9001:2015 certified processes',
    'Eco-friendly materials available',
    'Quick turnaround times',
    'Competitive pricing',
    'Pan-India delivery network',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Your Trusted Partner in <span className="text-primary">Label Manufacturing</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Milan Label has been at the forefront of the labeling and packaging industry for over 25 years. 
              We combine traditional craftsmanship with modern technology to deliver products that exceed 
              expectations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art manufacturing facility is equipped with the latest printing machinery, 
              enabling us to handle projects of any scale while maintaining the highest quality standards.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: leftVisible ? `${300 + index * 100}ms` : '0ms' }}
                >
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mission & Vision */}
          <div 
            ref={rightRef}
            className="space-y-6"
          >
            <div 
              className={`bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: rightVisible ? '100ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, high-quality labeling and packaging solutions that help businesses 
                enhance their brand identity while maintaining sustainable practices and competitive pricing.
              </p>
            </div>

            <div 
              className={`bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: rightVisible ? '250ms' : '0ms' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred label manufacturing partner in India, known for 
                quality, innovation, and customer satisfaction across all industries we serve.
              </p>
            </div>

            {/* Stats Box */}
            <div 
              className={`bg-primary text-primary-foreground p-8 rounded-2xl hover:scale-[1.02] transition-all duration-500 ${
                rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: rightVisible ? '400ms' : '0ms' }}
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm opacity-80">Years</div>
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Clients</div>
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
