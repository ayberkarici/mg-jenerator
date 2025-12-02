import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Periyodik Bakım", href: "/hizmetler#periyodik-bakim", description: "Düzenli bakım hizmetleri ile jeneratörünüzün ömrünü uzatın" },
  { title: "Arıza Onarım", href: "/hizmetler#ariza-onarim", description: "7/24 acil müdahale ve profesyonel onarım hizmetleri" },
  { title: "Revizyon", href: "/hizmetler#revizyon", description: "Komple revizyon ile jeneratörünüzü yenileyin" },
  { title: "Yerinde Servis", href: "/hizmetler#yerinde-servis", description: "Lokasyonunuzda profesyonel servis desteği" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MG Jeneratör Hizmetleri" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:text-accent focus:outline-none",
                        isActive("/") ? "text-accent" : "text-foreground"
                      )}
                    >
                      Anasayfa
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "text-sm font-medium hover:text-accent",
                    isActive("/hizmetler") ? "text-accent" : "text-foreground"
                  )}>
                    Hizmetlerimiz
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-card">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-accent"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="md:col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/hizmetler"
                            className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline p-3"
                          >
                            Tüm Hizmetleri Gör →
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/hakkimizda">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:text-accent focus:outline-none",
                        isActive("/hakkimizda") ? "text-accent" : "text-foreground"
                      )}
                    >
                      Hakkımızda
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/iletisim">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:text-accent focus:outline-none",
                        isActive("/iletisim") ? "text-accent" : "text-foreground"
                      )}
                    >
                      İletişim
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+902166801997" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>0 (216) 680 19 97</span>
            </a>
            <Link to="/iletisim">
              <Button className="btn-primary">
                Teklif Al
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={cn(
                  "px-4 py-3 rounded-md font-medium transition-colors",
                  isActive("/") ? "bg-secondary text-accent" : "hover:bg-secondary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Anasayfa
              </Link>
              <Link
                to="/hizmetler"
                className={cn(
                  "px-4 py-3 rounded-md font-medium transition-colors",
                  isActive("/hizmetler") ? "bg-secondary text-accent" : "hover:bg-secondary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link
                to="/hakkimizda"
                className={cn(
                  "px-4 py-3 rounded-md font-medium transition-colors",
                  isActive("/hakkimizda") ? "bg-secondary text-accent" : "hover:bg-secondary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                to="/iletisim"
                className={cn(
                  "px-4 py-3 rounded-md font-medium transition-colors",
                  isActive("/iletisim") ? "bg-secondary text-accent" : "hover:bg-secondary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="px-4 pt-4 border-t border-border mt-2">
                <Link to="/iletisim" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="btn-primary w-full">
                    Teklif Al
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
