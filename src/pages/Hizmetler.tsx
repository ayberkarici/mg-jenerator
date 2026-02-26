import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Wrench, AlertCircle, RefreshCw, MapPin, Clock, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "periyodik-bakim",
    icon: Wrench,
    title: "Periyodik Bakım",
    shortDesc: "Düzenli bakım programlarıyla jeneratörünüzün performansını ve ömrünü maksimuma çıkarın.",
    fullDesc: "Jeneratörlerinizin optimum performansla çalışması ve uzun ömürlü olması için düzenli periyodik bakım şarttır. Uzman ekibimiz, üretici standartlarına uygun kapsamlı bakım hizmetleri sunar.",
    features: [
      "Motor yağı ve filtre değişimi",
      "Yakıt sistemi kontrolü ve temizliği",
      "Soğutma sistemi bakımı",
      "Elektrik sistemi kontrolü",
      "Akü bakımı ve test",
      "Genel performans testi",
    ],
    image: "/images/services/periyodik-bakim.webp",
  },
  {
    id: "ariza-onarim",
    icon: AlertCircle,
    title: "Arıza Onarım",
    shortDesc: "7/24 acil müdahale ile kesintisiz enerji sağlıyoruz.",
    fullDesc: "Beklenmedik arıza durumlarında hızlı müdahale hayati önem taşır. 7/24 hizmet veren acil servis ekibimiz, en kısa sürede yanınızda olarak enerji kesintinizi minimize eder.",
    features: [
      "7/24 acil çağrı hattı",
      "2 saat içinde lokasyona ulaşım",
      "Tam donanımlı servis araçları",
      "Orijinal yedek parça desteği",
      "Arıza teşhis ve analiz raporu",
      "Garanti kapsamında onarım",
    ],
    image: "/images/services/ariza-onarim.webp",
  },
  {
    id: "revizyon",
    icon: RefreshCw,
    title: "Revizyon",
    shortDesc: "Komple revizyon hizmetimizle jeneratörünüzü fabrika ayarlarına geri getiriyoruz.",
    fullDesc: "Yılların yıpranmasını tersine çevirin. Komple revizyon hizmetimiz ile jeneratörünüzü fabrika çıkışı performansına kavuşturuyor, ömrünü yıllar daha uzatıyoruz.",
    features: [
      "Motor komple revizyonu",
      "Alternatör revizyonu",
      "Kontrol paneli yenileme",
      "Yakıt sistemi revizyonu",
      "Elektrik sistemi yenileme",
      "Fabrika test standartlarında kontrol",
    ],
    image: "/images/services/revizyon.webp",
  },
  {
    id: "yerinde-servis",
    icon: MapPin,
    title: "Yerinde Servis",
    shortDesc: "Lokasyonunuzda profesyonel servis ekibimizle hızlı ve etkili çözümler.",
    fullDesc: "Jeneratörünüzü taşımanıza gerek yok. Tam donanımlı servis araçlarımız ve uzman teknisyenlerimiz ile lokasyonunuzda profesyonel hizmet sunuyoruz.",
    features: [
      "Mobil servis araçları",
      "Yerinde arıza teşhisi",
      "Yerinde bakım ve onarım",
      "Yük altında test imkanı",
      "Minimum iş kesintisi",
      "Türkiye geneli hizmet",
    ],
    image: "/images/services/yerinde-servis.webp",
  },
  {
    id: "7-24-destek",
    icon: Clock,
    title: "7/24 Destek",
    shortDesc: "Günün her saati teknik destek hattımız ile yanınızdayız.",
    fullDesc: "Enerji kesintisi saat tanımaz. Bu yüzden teknik destek ekibimiz günün 24 saati, haftanın 7 günü sizin için hazır. Bir telefon kadar yakınız.",
    features: [
      "Kesintisiz çağrı merkezi",
      "Uzaktan teknik destek",
      "Acil müdahale koordinasyonu",
      "Yedek parça temin desteği",
      "Teknik danışmanlık",
      "Operasyon takibi",
    ],
    image: "/images/services/7-24-destek.webp",
  },
  {
    id: "danismanlik",
    icon: Lightbulb,
    title: "Danışmanlık",
    shortDesc: "Enerji ihtiyaçlarınıza özel jeneratör seçimi ve çözüm danışmanlığı.",
    fullDesc: "Doğru jeneratör seçimi, verimli enerji yönetiminin ilk adımıdır. Uzman mühendislerimiz, ihtiyaçlarınızı analiz ederek size en uygun çözümü sunar.",
    features: [
      "İhtiyaç analizi",
      "Kapasite hesaplama",
      "Marka ve model önerisi",
      "Maliyet-fayda analizi",
      "Teknik şartname hazırlama",
      "Kurulum danışmanlığı",
    ],
    image: "/images/services/danismanlik.webp",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.fullDesc,
      provider: {
        "@type": "LocalBusiness",
        name: "MG Jeneratör Hizmetleri",
      },
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://mgjenerator.com/" },
    { "@type": "ListItem", position: 2, name: "Hizmetlerimiz", item: "https://mgjenerator.com/hizmetler" },
  ],
};

export default function Hizmetler() {
  return (
    <Layout>
      <Helmet>
        <title>Hizmetlerimiz | MG Jeneratör Hizmetleri - Profesyonel Jeneratör Servisi</title>
        <meta
          name="description"
          content="MG Jeneratör Hizmetleri - Periyodik bakım, arıza onarım, revizyon, yerinde servis ve 7/24 destek hizmetlerimizle kesintisiz enerji çözümleri sunuyoruz."
        />
        <link rel="canonical" href="https://mgjenerator.com/hizmetler" />
        <meta property="og:title" content="Hizmetlerimiz | MG Jeneratör Hizmetleri" />
        <meta property="og:description" content="Periyodik bakım, arıza onarım, revizyon, yerinde servis ve 7/24 destek hizmetleri." />
        <meta property="og:url" content="https://mgjenerator.com/hizmetler" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mgjenerator.com/og-image.jpg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hizmetlerimiz | MG Jeneratör Hizmetleri" />
        <meta name="twitter:description" content="Periyodik bakım, arıza onarım, revizyon, yerinde servis ve 7/24 destek hizmetleri." />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Hizmetlerimiz
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Kesintisiz Enerji İçin<br />
              <span className="text-accent">Profesyonel Çözümler</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Jeneratörlerinizin bakımından revizyonuna, arıza onarımından 7/24 destek 
              hizmetlerine kadar tüm ihtiyaçlarınız için yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.fullDesc}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/iletisim">
                    <Button className="btn-primary group">
                      Bu Hizmet İçin Teklif Al
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
                    <img
                      src={service.image}
                      alt={`MG Jeneratör ${service.title} hizmeti`}
                      width={600}
                      height={450}
                      className="relative rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Hangi Hizmete İhtiyacınız Var?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            İhtiyaçlarınıza özel çözüm önerisi almak için hemen bizimle iletişime geçin.
          </p>
          <Link to="/iletisim">
            <Button className="btn-primary text-lg px-8 py-6">
              Ücretsiz Keşif Talep Et
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
