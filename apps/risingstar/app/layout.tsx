import "bootstrap/dist/css/bootstrap.min.css";
import "@schoolwebsites/ui/dist/schoolwebsites-ui.min.css";
import "./globals.css";
import type { Metadata } from "next";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  title: "Rising Kids School | Play Group to 5th | Vijay Nagar, Ghaziabad",
  description:
    "Rising Kids School in Vijay Nagar, Ghaziabad offers nurturing preschool education (Play Group, Nursery, LKG, UKG) and primary classes (Grades 1-5) aligned with CBSE guidelines.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="stationery-bg-container"></div>
        <header className="navbar navbar-expand-lg fixed-top border-bottom bg-glass py-3">
          <div className="container header-inner d-flex justify-content-between align-items-center">
            <a href="#" className="navbar-brand d-flex align-items-center gap-2 fw-bold text-primary brand-logo">
              <img src="/images/logo.png" alt="Rising Kids School Logo" className="header-logo" style={{ height: "45px", objectFit: "contain" }} />
              <span className="fs-4 tracking-tight brand-text">Rising Kids School</span>
            </a>
            
            <nav className="desktop-nav align-items-center gap-4 navigation-links">
              <a href="#about" className="nav-link-custom color-yellow">About Us</a>
              <a href="#curriculum" className="nav-link-custom color-blue">Curriculum</a>
              <a href="#gallery" className="nav-link-custom color-green">Spaces & Activities</a>
              <a href="#timeline" className="nav-link-custom color-purple">A Day in Life</a>
              <a href="#admissions" className="btn btn-orange btn-sm px-4 rounded-pill">Inquire Now</a>
            </nav>

            <MobileNav />
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer-kids text-white py-5 mt-5">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-md-4">
                <h5 className="text-white fw-bold mb-3 brand-text text-start">Rising Kids School</h5>
                <p className="small">Nurturing excellence, curiosity, and compassion in every student to prepare them for a changing world.</p>
                <div className="d-flex gap-2 mt-3 fs-4">
                  <span>🧸</span> <span>🎨</span> <span>⚽️</span> <span>📚</span> <span>🎒</span>
                </div>
              </div>
              <div className="col-md-3">
                <h6 className="text-white fw-bold mb-3 brand-text text-start">Quick Links</h6>
                <ul className="d-flex flex-column gap-2 p-0 m-0 list-unstyled">
                  <li><a href="#about" className="text-white-50 text-decoration-none small footer-link">About Us</a></li>
                  <li><a href="#curriculum" className="text-white-50 text-decoration-none small footer-link">Curriculum</a></li>
                  <li><a href="#gallery" className="text-white-50 text-decoration-none small footer-link">Spaces & Activities</a></li>
                  <li><a href="#admissions" className="text-white-50 text-decoration-none small footer-link">Admissions Inquiry</a></li>
                </ul>
              </div>
              <div className="col-md-4" id="contact">
                <h6 className="text-white fw-bold mb-3 brand-text text-start">Contact Us</h6>
                <p className="small mb-2">📍 C-47, Sector-9, New Vijay Nagar, Ghaziabad, U.P. 201009</p>
                <p className="small mb-2">📞 +91 8826239341, +91 8826239346</p>
                <p className="small">✉️ info@risingkids.org</p>
              </div>
            </div>
            <hr className="border-secondary my-4" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
              <span className="small text-white-50">© 2026 Rising Kids School, Vijay Nagar, Ghaziabad. All rights reserved.</span>
              <div className="d-flex gap-3">
                <a href="#" className="text-white-50 small text-decoration-none footer-link">Privacy Policy</a>
                <a href="#" className="text-white-50 small text-decoration-none footer-link">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


