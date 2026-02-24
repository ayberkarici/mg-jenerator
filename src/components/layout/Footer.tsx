import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#f5ede0] p-2 rounded-xl">
                <img src="/logo.png" alt="MG Jeneratör" className="h-12 w-auto" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl">MG Jeneratör</span>
                <p className="text-xs text-primary-foreground/70">Hizmetleri</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              20 yılı aşkın tecrübemizle jeneratör bakım, onarım ve revizyon hizmetlerinde 
              Türkiye'nin güvenilir çözüm ortağıyız.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/hizmetler#periyodik-bakim" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Periyodik Bakım
                </Link>
              </li>
              <li>
                <Link to="/hizmetler#ariza-onarim" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Arıza Onarım
                </Link>
              </li>
              <li>
                <Link to="/hizmetler#revizyon" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Revizyon
                </Link>
              </li>
              <li>
                <Link to="/hizmetler#yerinde-servis" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Yerinde Servis
                </Link>
              </li>
              <li>
                <Link to="/hizmetler#7-24-destek" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  7/24 Destek
                </Link>
              </li>
              <li>
                <Link to="/hizmetler#danismanlik" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Danışmanlık
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Acarlar Mah. Candan Çıkmazı No:9<br />
                  Umut Vadisi Sitesi A5 Blok D.20<br />
                  Beykoz/İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+902166801997" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  0 (216) 680 19 97
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+905326963488" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  0 (532) 696 34 88
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@mgjenerator.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  info@mgjenerator.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} MG Jeneratör Hizmetleri. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/gizlilik" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Gizlilik Politikası
              </Link>
              <Link to="/kullanim-kosullari" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
