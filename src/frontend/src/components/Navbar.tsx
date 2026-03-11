import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Apps", href: "#apps" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-dark sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/logo-transparent.dim_200x200.png"
              alt="GuptasBrothers logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span
              className="font-display font-bold text-xl tracking-tight"
              style={{ color: "oklch(0.92 0.01 240)" }}
            >
              Guptas
              <span style={{ color: "oklch(0.72 0.19 145)" }}>Brothers</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: "oklch(0.75 0.02 240)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.72 0.19 145)";
                  (e.currentTarget as HTMLElement).style.background =
                    "oklch(0.72 0.19 145 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "oklch(0.75 0.02 240)";
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              data-ocid="nav.primary_button"
              className="font-semibold"
              style={{
                background: "oklch(0.72 0.19 145)",
                color: "oklch(0.1 0.02 145)",
              }}
            >
              <a href="#apps">Get Apps</a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            style={{ color: "oklch(0.75 0.02 240)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden py-3 border-t"
            style={{ borderColor: "oklch(0.22 0.03 240)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded-lg"
                style={{ color: "oklch(0.75 0.02 240)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
