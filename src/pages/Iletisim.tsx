import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp mesajı oluştur
    const whatsappNumber = "905326963488";
    const message = `*Yeni Teklif Talebi*

*Ad Soyad:* ${formData.name}
*E-posta:* ${formData.email}
*Firma:* ${formData.company || "Belirtilmedi"}
*Konu:* ${formData.subject}

*Mesaj:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["0 (216) 680 19 97"],
      href: "tel:+902166801997",
    },
    {
      icon: Smartphone,
      title: "GSM / WhatsApp",
      details: ["0 (532) 696 34 88"],
      href: "tel:+905326963488",
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@mgjenerator.com"],
      href: "mailto:info@mgjenerator.com",
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Acarlar Mah. Candan Çıkmazı No:9", "Umut Vadisi Sitesi A5 Blok D.20", "Beykoz/İstanbul"],
      href: "#harita",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cumartesi: 08:00 - 18:00", "Acil Servis: 7/24"],
      href: "#",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>İletişim | MG Jeneratör Hizmetleri - Bize Ulaşın</title>
        <meta
          name="description"
          content="MG Jeneratör Hizmetleri ile iletişime geçin. 7/24 acil servis, teklif talebi ve sorularınız için bize ulaşın."
        />
        <link rel="canonical" href="https://mgjenerator.com/iletisim" />
        <meta property="og:title" content="İletişim | MG Jeneratör Hizmetleri" />
        <meta property="og:description" content="7/24 acil servis, teklif talebi ve sorularınız için bize ulaşın." />
        <meta property="og:url" content="https://mgjenerator.com/iletisim" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mgjenerator.com/og-image.jpg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim | MG Jeneratör Hizmetleri" />
        <meta name="twitter:description" content="7/24 acil servis, teklif talebi ve sorularınız için bize ulaşın." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://mgjenerator.com/" },
              { "@type": "ListItem", position: 2, name: "İletişim", item: "https://mgjenerator.com/iletisim" },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              İletişim
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Bizimle <span className="text-accent">İletişime</span> Geçin
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Jeneratör bakım, onarım ve revizyon hizmetlerimiz hakkında bilgi almak veya 
              teklif talep etmek için aşağıdaki formu doldurun veya doğrudan bize ulaşın.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                İletişim Bilgileri
              </h2>
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex gap-4 p-4 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Teklif Talep Formu
                </h2>
                <p className="text-muted-foreground mb-8">
                  Formu doldurarak WhatsApp üzerinden hızlıca bizimle iletişime geçebilirsiniz.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@ornek.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Firma Adı</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Firma Adınız"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Hangi hizmet için iletişime geçiyorsunuz?"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Detaylı bilgi veya talebinizi yazın..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    WhatsApp ile Gönder
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="harita" className="h-[400px] bg-muted relative">
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
      </section>
    </Layout>
  );
}
