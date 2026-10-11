/**
 * Email Utility for Rising Kids School
 * Sends emails via Gmail SMTP using nodemailer and email.config.js
 * Supports:
 *   1. Enquiry form
 *   2. Admission form
 *   3. Contact us form
 */

const nodemailer = require("nodemailer");
const config = require("../email.config.js");

/**
 * Creates and configures the Nodemailer SMTP transporter
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.auth.user,
      pass: config.smtp.auth.pass,
    },
    tls: config.smtp.tls,
  });
}

/**
 * Verify SMTP connection configuration
 * @returns {Promise<{success: boolean, message: string}>}
 */
async function verifyEmailConfig() {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return { success: true, message: "SMTP connection verified successfully" };
  } catch (error) {
    console.error("SMTP verification error:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Base email layout wrapper with professional school branding
 */
function wrapEmailHtml({ formTitle, badgeText, badgeColor, contentHtml, callToActionHtml }) {
  const currentYear = new Date().getFullYear();
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${formTitle}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      -webkit-font-smoothing: antialiased;
    }
    .email-container {
      max-width: 620px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }
    .header-bar {
      background: linear-gradient(135deg, #071c3e 0%, #003b8e 100%);
      padding: 30px 25px;
      text-align: center;
      color: #ffffff;
    }
    .school-name {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0.5px;
      margin: 0 0 4px 0;
      text-transform: uppercase;
    }
    .school-sub {
      font-size: 13px;
      color: #ffd200;
      font-weight: 600;
      margin: 0;
      letter-spacing: 0.5px;
    }
    .badge-pill {
      display: inline-block;
      margin-top: 14px;
      background-color: ${badgeColor || "#d97706"};
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .content-body {
      padding: 32px 28px;
    }
    .lead-title {
      font-size: 19px;
      font-weight: 700;
      color: #071c3e;
      margin: 0 0 18px 0;
      padding-bottom: 12px;
      border-bottom: 2px solid #f1f5f9;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .data-table tr {
      border-bottom: 1px solid #edf2f7;
    }
    .data-table td {
      padding: 12px 10px;
      vertical-align: top;
      font-size: 14px;
    }
    .data-label {
      width: 38%;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
    }
    .data-value {
      width: 62%;
      color: #0f172a;
      font-weight: 500;
    }
    .data-value strong {
      color: #071c3e;
      font-weight: 700;
    }
    .message-box {
      background-color: #f8fafc;
      border-left: 4px solid #003b8e;
      padding: 14px 16px;
      border-radius: 6px;
      margin: 16px 0;
      font-size: 14px;
      line-height: 1.6;
      color: #334155;
    }
    .actions-bar {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px dashed #cbd5e1;
      text-align: center;
    }
    .btn-action {
      display: inline-block;
      padding: 10px 20px;
      margin: 4px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 700;
      font-size: 13px;
    }
    .btn-phone {
      background-color: #003b8e;
      color: #ffffff !important;
    }
    .btn-whatsapp {
      background-color: #16a34a;
      color: #ffffff !important;
    }
    .footer-bar {
      background-color: #0f172a;
      padding: 22px;
      text-align: center;
      color: #94a3b8;
      font-size: 12px;
      line-height: 1.6;
    }
    .footer-bar a {
      color: #ffd200;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header-bar">
      <div class="school-name">🌟 ${config.school.name}</div>
      <div class="school-sub">${config.school.tagline}</div>
      <div>
        <span class="badge-pill">${badgeText}</span>
      </div>
    </div>

    <div class="content-body">
      <div class="lead-title">${formTitle}</div>
      ${contentHtml}

      ${callToActionHtml || ""}
    </div>

    <div class="footer-bar">
      <div><strong>${config.school.name}</strong> • ${config.school.address}</div>
      <div>Helpline: ${config.school.phone} | Email: ${config.school.email}</div>
      <div style="margin-top: 8px; color: #64748b; font-size: 11px;">
        Received on: ${timestamp} (IST) • System Notification
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * 1. Template & Sender for Quick Admission Enquiry Form
 */
function buildEnquiryEmail(data) {
  const { parentName, mobile, options, grade, message } = data;
  const targetGrade = grade || options || "Not Specified";
  const cleanPhone = (mobile || "").replace(/[^0-9]/g, "");

  const contentHtml = `
    <table class="data-table">
      <tr>
        <td class="data-label">Parent / Guardian</td>
        <td class="data-value"><strong>${parentName || "N/A"}</strong></td>
      </tr>
      <tr>
        <td class="data-label">Contact Number</td>
        <td class="data-value">
          <a href="tel:${cleanPhone}" style="color: #003b8e; font-weight: 700; text-decoration: none;">
            📞 ${mobile || "N/A"}
          </a>
        </td>
      </tr>
      <tr>
        <td class="data-label">Grade / Program</td>
        <td class="data-value">
          <span style="background: #fef3c7; color: #92400e; padding: 3px 10px; border-radius: 20px; font-weight: 700;">
            ${targetGrade}
          </span>
        </td>
      </tr>
    </table>

    <div style="font-weight: 700; font-size: 13px; color: #475569; text-transform: uppercase;">
      Parent's Message / Query:
    </div>
    <div class="message-box">
      ${message ? message.replace(/\n/g, "<br>") : "<em>No additional remarks provided.</em>"}
    </div>
  `;

  const callToActionHtml = `
    <div class="actions-bar">
      ${cleanPhone ? `
        <a href="tel:${cleanPhone}" class="btn-action btn-phone">📞 Call Parent</a>
        <a href="https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(`Hello ${parentName || ""}, Thank you for your enquiry at Rising Kids School.`)}" class="btn-action btn-whatsapp" target="_blank">
          💬 WhatsApp
        </a>
      ` : ""}
    </div>
  `;

  const html = wrapEmailHtml({
    formTitle: "Quick Admission Enquiry Received",
    badgeText: config.forms.enquiry.tag,
    badgeColor: config.forms.enquiry.badgeColor,
    contentHtml,
    callToActionHtml,
  });

  const text = `
NEW ADMISSION ENQUIRY — RISING KIDS SCHOOL
==================================================
Parent / Guardian: ${parentName || "N/A"}
Contact Number:    ${mobile || "N/A"}
Grade / Class:     ${targetGrade}
Message:
${message || "No additional message."}
==================================================
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
  `.trim();

  return {
    subject: `[Enquiry] ${parentName || "New Lead"} — ${targetGrade} (${mobile || "No Phone"})`,
    html,
    text,
  };
}

/**
 * 2. Template & Sender for Full Online Admission Form
 */
function buildAdmissionEmail(data) {
  const {
    kidName,
    dob,
    enquiryFor,
    parentName,
    motherOccupation,
    fatherOccupation,
    address,
    phone,
    motherEmail,
    fatherEmail,
    sources,
    otherSource,
  } = data;

  const cleanPhone = (phone || "").replace(/[^0-9]/g, "");

  // Format referral sources including custom text for "Other"
  const otherText = otherSource && String(otherSource).trim();
  let formattedSources = [];

  if (Array.isArray(sources) && sources.length > 0) {
    formattedSources = sources.map((s) => {
      const srcName = String(s).trim();
      if (srcName.toLowerCase() === "other") {
        return otherText ? `Other (${otherText})` : "Other";
      }
      return srcName;
    });
  } else if (typeof sources === "string" && sources.trim()) {
    const srcName = sources.trim();
    if (srcName.toLowerCase() === "other") {
      formattedSources = [otherText ? `Other (${otherText})` : "Other"];
    } else {
      formattedSources = [srcName];
    }
  }

  // If user entered otherText but "Other" wasn't already formatted
  if (otherText && !formattedSources.some((s) => s.includes(otherText))) {
    formattedSources.push(`Other (${otherText})`);
  }

  const sourceList = formattedSources.length > 0 ? formattedSources.join(", ") : "Direct Website";

  const contentHtml = `
    <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px;">
      <span style="color: #166534; font-weight: 700; font-size: 13px;">
        🎓 APPLICANT: <strong>${kidName || "N/A"}</strong> &nbsp;|&nbsp; CLASS: <strong>${enquiryFor || "N/A"}</strong>
      </span>
    </div>

    <table class="data-table">
      <tr>
        <td class="data-label">Child's Full Name</td>
        <td class="data-value"><strong>${kidName || "N/A"}</strong></td>
      </tr>
      <tr>
        <td class="data-label">Date of Birth</td>
        <td class="data-value">📅 ${dob || "N/A"}</td>
      </tr>
      <tr>
        <td class="data-label">Applying For Grade</td>
        <td class="data-value">
          <span style="background: #dcfce7; color: #166534; padding: 3px 10px; border-radius: 20px; font-weight: 700;">
            ${enquiryFor || "N/A"}
          </span>
        </td>
      </tr>
      <tr>
        <td class="data-label">Parent / Guardian Name</td>
        <td class="data-value"><strong>${parentName || "N/A"}</strong></td>
      </tr>
      <tr>
        <td class="data-label">Primary Mobile</td>
        <td class="data-value">
          <a href="tel:${cleanPhone}" style="color: #003b8e; font-weight: 700; text-decoration: none;">
            📞 ${phone || "N/A"}
          </a>
        </td>
      </tr>
      <tr>
        <td class="data-label">Mother's Occupation</td>
        <td class="data-value">${motherOccupation || "Not Specified"}</td>
      </tr>
      <tr>
        <td class="data-label">Father's Occupation</td>
        <td class="data-value">${fatherOccupation || "Not Specified"}</td>
      </tr>
      <tr>
        <td class="data-label">Mother's Email</td>
        <td class="data-value">${motherEmail ? `<a href="mailto:${motherEmail}">${motherEmail}</a>` : "Not Provided"}</td>
      </tr>
      <tr>
        <td class="data-label">Father's Email</td>
        <td class="data-value">${fatherEmail ? `<a href="mailto:${fatherEmail}">${fatherEmail}</a>` : "Not Provided"}</td>
      </tr>
      <tr>
        <td class="data-label">Residential Address</td>
        <td class="data-value">${address || "Not Provided"}</td>
      </tr>
      <tr>
        <td class="data-label">Lead Referral Source</td>
        <td class="data-value">${sourceList}</td>
      </tr>
    </table>
  `;

  const callToActionHtml = `
    <div class="actions-bar">
      ${cleanPhone ? `
        <a href="tel:${cleanPhone}" class="btn-action btn-phone">📞 Call Parent</a>
        <a href="https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(`Dear ${parentName || "Parent"}, Greetings from Rising Kids School regarding the admission application for ${kidName || "your child"}.`)}" class="btn-action btn-whatsapp" target="_blank">
          💬 WhatsApp
        </a>
      ` : ""}
    </div>
  `;

  const html = wrapEmailHtml({
    formTitle: "New Admission Application Form",
    badgeText: config.forms.admission.tag,
    badgeColor: config.forms.admission.badgeColor,
    contentHtml,
    callToActionHtml,
  });

  const text = `
NEW ONLINE ADMISSION APPLICATION — RISING KIDS SCHOOL
==================================================
Child's Name:       ${kidName || "N/A"}
Date of Birth:      ${dob || "N/A"}
Applying For Grade: ${enquiryFor || "N/A"}
Parent's Name:      ${parentName || "N/A"}
Primary Mobile:     ${phone || "N/A"}
Mother's Profession: ${motherOccupation || "N/A"}
Father's Profession: ${fatherOccupation || "N/A"}
Mother's Email:     ${motherEmail || "N/A"}
Father's Email:     ${fatherEmail || "N/A"}
Address:            ${address || "N/A"}
How Found:          ${sourceList}
==================================================
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
  `.trim();

  return {
    subject: `[Admission Application] ${kidName || "Student"} — Class: ${enquiryFor || "N/A"} (${phone || "No Phone"})`,
    html,
    text,
  };
}

/**
 * 3. Template & Sender for Contact Us Form
 */
function buildContactEmail(data) {
  const { name, phone, email, message } = data;
  const cleanPhone = (phone || "").replace(/[^0-9]/g, "");

  const contentHtml = `
    <table class="data-table">
      <tr>
        <td class="data-label">Sender Name</td>
        <td class="data-value"><strong>${name || "N/A"}</strong></td>
      </tr>
      <tr>
        <td class="data-label">Phone Number</td>
        <td class="data-value">
          <a href="tel:${cleanPhone}" style="color: #003b8e; font-weight: 700; text-decoration: none;">
            📞 ${phone || "N/A"}
          </a>
        </td>
      </tr>
      <tr>
        <td class="data-label">Email Address</td>
        <td class="data-value">
          ${email ? `<a href="mailto:${email}" style="color: #003b8e; text-decoration: none;">✉️ ${email}</a>` : "Not Provided"}
        </td>
      </tr>
    </table>

    <div style="font-weight: 700; font-size: 13px; color: #475569; text-transform: uppercase;">
      Message / Inquiry:
    </div>
    <div class="message-box">
      ${message ? message.replace(/\n/g, "<br>") : "<em>No message provided.</em>"}
    </div>
  `;

  const callToActionHtml = `
    <div class="actions-bar">
      ${cleanPhone ? `
        <a href="tel:${cleanPhone}" class="btn-action btn-phone">📞 Call ${name || "Sender"}</a>
      ` : ""}
      ${email ? `
        <a href="mailto:${email}?subject=${encodeURIComponent("Re: Inquiry at Rising Kids School")}" class="btn-action btn-phone" style="background-color: #0284c7;">
          ✉️ Reply Email
        </a>
      ` : ""}
      ${cleanPhone ? `
        <a href="https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(`Hello ${name || ""}, thank you for contacting Rising Kids School.`)}" class="btn-action btn-whatsapp" target="_blank">
          💬 WhatsApp
        </a>
      ` : ""}
    </div>
  `;

  const html = wrapEmailHtml({
    formTitle: "New Contact Message Received",
    badgeText: config.forms.contact.tag,
    badgeColor: config.forms.contact.badgeColor,
    contentHtml,
    callToActionHtml,
  });

  const text = `
NEW CONTACT MESSAGE — RISING KIDS SCHOOL
==================================================
Name:    ${name || "N/A"}
Phone:   ${phone || "N/A"}
Email:   ${email || "N/A"}
Message:
${message || "No message."}
==================================================
Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
  `.trim();

  return {
    subject: `[Contact Message] from ${name || "Visitor"} (${phone || email || "No Contact"})`,
    html,
    text,
  };
}

/**
 * Main sendEmail function supporting all 3 forms
 * @param {Object} options
 * @param {'enquiry' | 'admission' | 'contact'} options.formType - Form identifier
 * @param {Object} options.data - Form field payload
 * @param {string} [options.to] - Optional recipient override
 * @returns {Promise<{success: boolean, messageId?: string, error?: string}>}
 */
async function sendFormEmail({ formType, data, to }) {
  try {
    let emailContent;

    switch (formType) {
      case "enquiry":
        emailContent = buildEnquiryEmail(data);
        break;
      case "admission":
        emailContent = buildAdmissionEmail(data);
        break;
      case "contact":
        emailContent = buildContactEmail(data);
        break;
      default:
        throw new Error(`Unsupported form type: "${formType}". Valid types are: enquiry, admission, contact.`);
    }

    const transporter = createTransporter();

    // Determine reply-to address if provided in form data
    const replyTo = data.email || data.fatherEmail || data.motherEmail || undefined;

    const mailOptions = {
      from: config.mail.from,
      to: to || config.mail.to,
      replyTo: replyTo,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] Form: ${formType} | MessageId: ${info.messageId}`);

    return {
      success: true,
      messageId: info.messageId,
      envelope: info.envelope,
    };
  } catch (error) {
    console.error(`[Email Error] Failed to send ${formType} email:`, error);
    return {
      success: false,
      error: error.message || "Failed to send email via SMTP",
    };
  }
}

// Named helper functions for each form
async function sendEnquiryEmail(data, to) {
  return sendFormEmail({ formType: "enquiry", data, to });
}

async function sendAdmissionEmail(data, to) {
  return sendFormEmail({ formType: "admission", data, to });
}

async function sendContactEmail(data, to) {
  return sendFormEmail({ formType: "contact", data, to });
}

module.exports = {
  createTransporter,
  verifyEmailConfig,
  sendFormEmail,
  sendEnquiryEmail,
  sendAdmissionEmail,
  sendContactEmail,
  buildEnquiryEmail,
  buildAdmissionEmail,
  buildContactEmail,
};
