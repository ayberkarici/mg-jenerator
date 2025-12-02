import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ReferencesSection } from "@/components/home/ReferencesSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>MG Jeneratör Hizmetleri | Kesintisiz Enerji Çözümleri</title>
        <meta 
          name="description" 
          content="MG Jeneratör Hizmetleri - 20 yıllık tecrübe ile jeneratör bakım, onarım, revizyon ve 7/24 acil servis hizmetleri. Türkiye genelinde profesyonel jeneratör servisi." 
        />
        <meta name="keywords" content="jeneratör bakım, jeneratör onarım, jeneratör servis, kesintisiz enerji, güç çözümleri, periyodik bakım, MG Jeneratör Hizmetleri" />
      </Helmet>
      
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <ReferencesSection />
      <CTASection />
      
      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Konum
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Bizi <span className="text-accent">Ziyaret Edin</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofisimize gelerek jeneratör ihtiyaçlarınız hakkında yüz yüze görüşebilirsiniz.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Adres</h3>
                  <p className="text-muted-foreground text-sm">
                    Acarlar Mah. Candan Çıkmazı No:9<br />
                    Umut Vadisi Sitesi A5 Blok D.20<br />
                    Beykoz/İstanbul
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Telefon</h3>
                  <a href="tel:+902166801997" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                    0 (216) 680 19 97
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">GSM / WhatsApp</h3>
                  <a href="tel:+905326963488" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                    0 (532) 696 34 88
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="lg:col-span-2 h-[400px] rounded-xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.1444559663537!2d29.115441599999997!3d41.1095361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacb0b59f6151d%3A0xa831d2c9aa36df81!2sUmut%20Vadi%20Sitesi!5e0!3m2!1str!2str!4v1764701817397!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MG Jeneratör Konum"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
