import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import productLabels from '@/assets/product-labels.jpg';
import productStickers from '@/assets/product-stickers.jpg';
import productPackaging from '@/assets/product-packaging.jpg';

const ProductsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const products = [
    {
      title: 'Product Labels',
      description: 'High-quality adhesive labels for FMCG, pharmaceuticals, cosmetics, and more. Available in various materials including paper, PP, and PET.',
      image: productLabels,
      features: ['Water Resistant', 'UV Protected', 'Custom Shapes'],
    },
    {
      title: 'Industrial Stickers',
      description: 'Durable barcode labels, QR code stickers, and identification labels for logistics, warehousing, and industrial applications.',
      image: productStickers,
      features: ['Scannable', 'Heat Resistant', 'Tamper Proof'],
    },
    {
      title: 'Custom Packaging',
      description: 'Branded packaging solutions including cartons, boxes, and pouches with premium finishing options.',
      image: productPackaging,
      features: ['Embossing', 'Foil Stamping', 'Spot UV'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Premium Label & Packaging Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of labeling and packaging products to meet diverse industry requirements 
            with unmatched quality and precision.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button size="lg" variant="default" className="gap-2 hover:scale-105 transition-transform duration-300">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
