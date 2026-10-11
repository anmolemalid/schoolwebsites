/**
 * Email Configuration for Rising Kids School
 * Supports Gmail SMTP (Port 587 / 465) with environment variable overrides
 */

const emailConfig = {
  // SMTP Transport Settings
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true" || parseInt(process.env.SMTP_PORT || "587", 10) === 465,
    auth: {
      user: process.env.SMTP_USER || "sales.navslash@gmail.com",
      pass: process.env.SMTP_PASS || "abcd efgh wdhj xyza",
    },
    // TLS settings for Gmail Port 587
    tls: {
      rejectUnauthorized: false,
    },
  },

  // Default Email Recipients & Senders
  mail: {
    from: process.env.SMTP_FROM || `"NavSlash Team" <${process.env.SMTP_USER || "sales.navslash@gmail.com"}>`,
    to: process.env.ADMIN_EMAIL || "inforisingkidsschool@gmail.com",
  },

  // School Information for Email Header & Footer
  school: {
    name: "Rising Kids School",
    tagline: "Govt. Recognized & Affiliated • Nurturing Excellence",
    address: "New Vijay Nagar, Sector 9, Ghaziabad, UP 201009",
    phone: "+91 88262 39341",
    email: "info@risingkids.edu.in",
    website: "https://risingkids.edu.in",
  },

  // Configuration & Metadata for the 3 Forms
  forms: {
    // 1. Quick Admission Enquiry Form
    enquiry: {
      id: "enquiry",
      subject: "⭐ New Admission Enquiry — Rising Kids School",
      tag: "ADMISSION ENQUIRY",
      badgeColor: "#d97706",
      themeColor: "#ffd200",
      description: "Quick lead submitted via Home / About page enquiry section",
    },

    // 2. Full Online Admission Application Form
    admission: {
      id: "admission",
      subject: "🎒 New Online Admission Form — Rising Kids School",
      tag: "ADMISSION APPLICATION",
      badgeColor: "#15803d",
      themeColor: "#22c55e",
      description: "Detailed registration slip submitted via Admissions page",
    },

    // 3. Contact Us / General Inquiry Form
    contact: {
      id: "contact",
      subject: "📩 New Contact Us Message — Rising Kids School",
      tag: "CONTACT US",
      badgeColor: "#0284c7",
      themeColor: "#38bdf8",
      description: "General inquiry submitted via Contact Us page",
    },
  },
};

module.exports = emailConfig;
module.exports.default = emailConfig;
