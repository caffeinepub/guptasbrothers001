import { Smartphone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "oklch(0.09 0.025 240)",
        borderColor: "oklch(0.18 0.03 240)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/logo-transparent.dim_200x200.png"
                alt="GuptasBrothers"
                className="w-9 h-9 rounded-lg"
              />
              <span
                className="font-display font-bold text-lg"
                style={{ color: "oklch(0.92 0.01 240)" }}
              >
                Guptas
                <span style={{ color: "oklch(0.72 0.19 145)" }}>Brothers</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.5 0.015 240)" }}
            >
              India's most trusted curated Android app marketplace since 2020.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-display font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.72 0.19 145)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Apps", "Categories", "About"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    data-ocid="footer.link"
                    className="text-sm transition-colors"
                    style={{ color: "oklch(0.55 0.015 240)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.72 0.19 145)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.55 0.015 240)";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="font-display font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.72 0.19 145)" }}
            >
              Categories
            </h4>
            <ul className="space-y-2">
              {[
                "Games",
                "Productivity",
                "Entertainment",
                "Tools",
                "Education",
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href="#categories"
                    data-ocid="footer.link"
                    className="text-sm transition-colors flex items-center gap-2"
                    style={{ color: "oklch(0.55 0.015 240)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.72 0.19 145)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.55 0.015 240)";
                    }}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t"
          style={{
            borderColor: "oklch(0.18 0.03 240)",
            color: "oklch(0.4 0.015 240)",
          }}
        >
          <span>© {year} GuptasBrothers. All rights reserved.</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: "oklch(0.45 0.015 240)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "oklch(0.72 0.19 145)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "oklch(0.45 0.015 240)";
            }}
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
