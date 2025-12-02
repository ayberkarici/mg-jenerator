import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function GizlilikPolitikasi() {
  return (
    <Layout>
      <Helmet>
        <title>Gizlilik Politikası | MG Jeneratör Hizmetleri</title>
        <meta 
          name="description" 
          content="MG Jeneratör Hizmetleri gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin." 
        />
      </Helmet>

      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Gizlilik Politikası
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Son güncelleme: 2 Aralık 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50 space-y-8">
              
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Genel Bakış</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MG Jeneratör Hizmetleri olarak, müşterilerimizin gizliliğine büyük önem veriyoruz. 
                  Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda 
                  kişisel bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Toplanan Bilgiler</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Web sitemiz aracılığıyla aşağıdaki bilgileri toplayabiliriz:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Ad ve soyad</li>
                  <li>E-posta adresi</li>
                  <li>Telefon numarası</li>
                  <li>Firma bilgileri</li>
                  <li>İletişim formları aracılığıyla gönderilen mesajlar</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Bilgilerin Kullanımı</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Topladığımız bilgiler şu amaçlarla kullanılmaktadır:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Taleplerinizi yanıtlamak ve hizmet sunmak</li>
                  <li>Teklif hazırlamak</li>
                  <li>Müşteri hizmetleri desteği sağlamak</li>
                  <li>Hizmetlerimizi geliştirmek</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Bilgilerin Korunması</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel bilgilerinizi korumak için uygun güvenlik önlemleri almaktayız. 
                  Bilgileriniz üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz. 
                  Yasal zorunluluklar dışında bilgileriniz gizli tutulur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Çerezler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanabilir. 
                  Çerezler, tarayıcınız tarafından cihazınızda saklanan küçük veri dosyalarıdır. 
                  Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="text-foreground font-medium">MG Jeneratör Hizmetleri</p>
                  <p className="text-muted-foreground">Telefon: 0 (216) 680 19 97</p>
                  <p className="text-muted-foreground">E-posta: info@mgjenerator.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
