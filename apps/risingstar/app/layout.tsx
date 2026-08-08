import "bootstrap/dist/css/bootstrap.min.css";
import "@schoolwebsites/ui/dist/schoolwebsites-ui.min.css";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import { t } from "./lib/i18n";

export const metadata: Metadata = {
  title: t.meta.defaultTitle,
  description: t.meta.defaultDescription,
  keywords: t.meta.keywords,
  authors: [{ name: t.meta.siteName }],
  creator: t.meta.siteName,
  publisher: t.meta.siteName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: t.meta.locale,
    siteName: t.meta.siteName,
    title: t.meta.pages.home.ogTitle,
    description: t.meta.pages.home.ogDescription,
    images: ["/assets/finallogo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <link rel="icon" href="/assets/finallogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/finallogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fredoka:wght@400;600;700;800&family=Oswald:wght@500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&family=Quicksand:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Mobile Top Header Bar - Phone Left & WhatsApp/FB/IG Right */}
        <div className="d-block d-md-none py-2 px-3 text-white" style={{ backgroundColor: "#002d62", fontSize: "0.85rem" }}>
          <div className="container d-flex justify-content-between align-items-center">
            <a href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`} className="text-white text-decoration-none d-inline-flex align-items-center gap-1 fw-semibold">
              <span style={{ color: "#ffd200" }}>📞</span>
              <span>{t.school.contacts.phonePrimary}</span>
            </a>
            <div className="d-flex align-items-center gap-2">
              <a href={`https://wa.me/${t.school.contacts.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none d-inline-flex align-items-center gap-1 fw-semibold me-1">
                <span style={{ color: "#25d366" }}>💬</span>
                <span>{t.floatingActions.whatsapp.replace("💬 ", "")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Top Info Bar */}
        <div className="topbar-mockup py-2 px-3 border-bottom d-none d-md-block">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-4">
              <span>📞 {t.school.contacts.phoneDisplay}</span>
              <span>✉️ {t.school.contacts.email}</span>
              <span>📍 {t.school.location.fullAddress}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a
                href={t.school.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white d-inline-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1.2px solid rgba(255, 255, 255, 0.45)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={t.school.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white d-inline-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1.2px solid rgba(255, 255, 255, 0.45)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop & Mobile Header Navigation */}
        <header className="navbar navbar-expand-lg border-bottom bg-white py-2 sticky-top shadow-sm">
          <div className="container header-inner d-flex justify-content-between align-items-center">
            <Link href="/" className="navbar-brand d-flex align-items-center gap-3 brand-logo text-decoration-none">
              <img src="/assets/finallogo.png" alt="Rising Kids School Logo" className="header-brand-logo" />
              <div className="d-flex flex-column">
                <span className="brand-title-mockup leading-tight">{t.school.name.toUpperCase()}</span>
                <span className="brand-tagline-mockup">{t.school.tagline.toUpperCase()}</span>
              </div>
            </Link>

            <DesktopNav />

            <MobileNav />
          </div>
        </header>

        <main>{children}</main>

        {/* Global Royal Navy Footer */}
        <footer className="footer-mockup-bg pt-4 pb-4 mt-5">
          <div className="container">
            <div className="row g-4 justify-content-between">

              {/* Column 1: School Identity */}
              <div className="col-lg-3 col-md-6">
                <div className="d-flex align-items-start gap-3 mb-2">
                  <img
                    src="/assets/finallogo.png"
                    alt="Rising Kids School Shield Logo"
                    style={{ width: "58px", height: "68px", objectFit: "contain", flexShrink: 0 }}
                  />
                  <div>
                    <h5 className="footer-school-title text-white">{t.school.name.toUpperCase()}</h5>
                    <div className="footer-school-meta">
                      <div>{t.school.gradeSpan}</div>
                      <div>{t.school.system}, {t.school.medium}</div>
                      <div>{t.school.recognition}</div>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-2 mt-3">
                  <a href={t.school.social.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Facebook">
                    f
                  </a>
                  <a href={t.school.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Instagram">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn yt-btn" title="YouTube">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="col-lg-2 col-md-6">
                <h6 className="footer-title-mockup text-white">{t.footer.quickLinksTitle}</h6>
                <ul className="footer-links-mockup">
                  <li><Link href="/"><span className="footer-link-arrow">▸</span> {t.nav.home}</Link></li>
                  <li><Link href="/about"><span className="footer-link-arrow">▸</span> {t.nav.aboutUs}</Link></li>
                  <li><Link href="/curriculum"><span className="footer-link-arrow">▸</span> {t.nav.curriculum}</Link></li>
                  <li><Link href="/admissions"><span className="footer-link-arrow">▸</span> {t.nav.admissions}</Link></li>
                  <li><Link href="/facilities"><span className="footer-link-arrow">▸</span> {t.nav.facilities}</Link></li>
                </ul>
              </div>

              {/* Column 3: Useful Links */}
              <div className="col-lg-2 col-md-6">
                <h6 className="footer-title-mockup text-white">{t.footer.usefulLinksTitle}</h6>
                <ul className="footer-links-mockup">
                  <li><Link href="/gallery"><span className="footer-link-arrow">▸</span> {t.nav.gallery}</Link></li>
                  <li><Link href="/events"><span className="footer-link-arrow">▸</span> {t.nav.events}</Link></li>
                  <li><Link href="/admissions"><span className="footer-link-arrow">▸</span> {t.footer.downloads}</Link></li>
                  <li><Link href="/events"><span className="footer-link-arrow">▸</span> {t.footer.newsUpdates}</Link></li>
                  <li><Link href="/contact"><span className="footer-link-arrow">▸</span> {t.nav.contactUs}</Link></li>
                </ul>
              </div>

              {/* Column 4: Contact Info */}
              <div className="col-lg-4 col-md-6">
                <h6 className="footer-title-mockup text-white">{t.footer.contactTitle}</h6>

                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffd200">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    {t.school.location.address},<br />
                    {t.school.location.city} ({t.school.location.state.charAt(0)}.{t.school.location.state.charAt(t.school.location.state.indexOf(" ") + 1)}.){" "}{t.school.location.pincode}
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffd200">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    {t.school.contacts.phoneDisplay}
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffd200">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    {t.school.contacts.email}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </footer>

        {/* Yellow Copyright Bar */}
        <div className="copyright-bar-yellow">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <span>{t.footer.copyright}</span>
            <span>
              {t.footer.designedFor}{" "}
              <a
                href="https://www.navslash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fw-bold"
                style={{ color: "inherit" }}
              >
                {t.footer.companyName}
              </a>
            </span>
          </div>
        </div>

        {/* Floating WhatsApp Action Button */}
        <a
          href={t.school.contacts.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.floatingActions.whatsappChat}
          className="whatsapp-floating-btn d-none d-md-inline-flex"
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.848-.432-1.393-.578-2.302-1.996-2.37-2.087-.07-.091-.564-.75-.564-1.429 0-.679.356-.995.485-1.132.13-.137.284-.17.378-.17.094 0 .188.001.272.005.087.004.204-.033.319.243.118.283.407.994.442 1.066.036.072.06.157.012.253-.049.096-.073.156-.145.241-.073.084-.153.188-.218.253-.073.072-.15.15-.065.295.085.146.377.621.81 1.006.559.497 1.031.65 1.177.722.146.073.231.06.316-.037.086-.097.369-.43.467-.577.097-.146.195-.122.327-.073.133.048.847.399.993.472.145.073.242.109.278.17.037.061.037.352-.107.757zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.438 5.176L2 22l4.982-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.71 0-3.303-.523-4.623-1.419l-.331-.223-2.955.775.789-2.88-.242-.385A7.954 7.954 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
          </svg>
        </a>

        {/* Mobile Fixed 3-Segment Action Bar */}
        <div className="mobile-action-bar-3seg d-md-none">
          <a href={`tel:${t.school.contacts.phonePrimary.replace(/\s/g, "")}`} className="bar-seg-blue">
            {t.floatingActions.callUs}
          </a>
          <a href={`https://wa.me/${t.school.contacts.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bar-seg-yellow">
            {t.floatingActions.whatsapp}
          </a>
          <a href={t.school.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="bar-seg-blue">
            {t.floatingActions.direction}
          </a>
        </div>
      </body>
    </html>
  );
}
