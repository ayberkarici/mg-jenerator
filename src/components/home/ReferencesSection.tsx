import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "ABC Holding",
    role: "Tesis Müdürü",
    content: "MG Jeneratör ile 5 yıldır çalışıyoruz. Periyodik bakımlarımız her zaman zamanında yapılıyor ve hiçbir zaman enerji kesintisi yaşamadık.",
    rating: 5,
  },
  {
    name: "Fatma Demir",
    company: "XYZ Fabrikası",
    role: "Operasyon Direktörü",
    content: "Acil bir arıza durumunda gece yarısı bile ulaştık ve 2 saat içinde ekip sahada hazırdı. Profesyonellik konusunda mükemmeller.",
    rating: 5,
  },
  {
    name: "Mehmet Kaya",
    company: "Büyük Otel Zinciri",
    role: "Teknik Koordinatör",
    content: "Tüm otellerimizin jeneratör bakımını MG Jeneratör'e emanet ettik. Güvenilir ve kaliteli hizmetleri için teşekkürler.",
    rating: 5,
  },
];

const partners = [
  "ABC Holding", "XYZ Sanayi", "Mega İnşaat", "Tech Solutions", 
  "Green Energy", "Power Systems", "Industrial Corp", "Global Trade"
];

export function ReferencesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Referanslarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Müşterilerimiz{" "}
            <span className="text-accent">Ne Diyor?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Türkiye'nin önde gelen kuruluşlarına güvenilir jeneratör hizmeti sunuyoruz.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Logos */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
            Güvenilen Markalardan Bazıları
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-muted-foreground/50 font-heading font-semibold text-lg hover:text-accent transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
