/**
 * Quick Test Script for Gmail SMTP Email Utility
 * Run with: node test-email.js [enquiry|admission|contact]
 */

const { verifyEmailConfig, sendEnquiryEmail, sendAdmissionEmail, sendContactEmail } = require("./lib/email.js");
const config = require("./email.config.js");

async function runTest() {
  console.log("==================================================");
  console.log("Rising Kids School — Email Utility SMTP Test");
  console.log("==================================================");
  console.log("SMTP Host:", config.smtp.host);
  console.log("SMTP Port:", config.smtp.port);
  console.log("SMTP User:", config.smtp.auth.user);
  console.log("Recipient:", config.mail.to);
  console.log("--------------------------------------------------");

  // Step 1: Verify Connection
  console.log("Step 1: Verifying SMTP connection...");
  const verification = await verifyEmailConfig();
  console.log("Verification result:", verification);

  if (!verification.success) {
    console.error("\n❌ Could not connect to Gmail SMTP.");
    console.error("Please verify that your Gmail App Password has 16 characters and 2-Step Verification is enabled.");
    console.error("Details:", verification.message);
    return;
  }

  // Step 2: Send Sample Test Email based on argument
  const formArg = (process.argv[2] || "enquiry").toLowerCase();
  console.log(`\nStep 2: Sending sample test email for [${formArg}] form...`);

  let result;
  if (formArg === "enquiry") {
    result = await sendEnquiryEmail({
      parentName: "Dr. Vikram Sharma",
      mobile: "+91 98765 43210",
      grade: "Play Group (Ages 2-3)",
      message: "Looking for admission for my 2.5-year-old child in the upcoming session. Please share fee details.",
    });
  } else if (formArg === "admission") {
    result = await sendAdmissionEmail({
      kidName: "Aarav Sharma",
      dob: "2022-06-15",
      enquiryFor: "Nursery",
      parentName: "Dr. Vikram Sharma",
      motherOccupation: "Architect",
      fatherOccupation: "Physician",
      address: "House 42, Sector 9, New Vijay Nagar, Ghaziabad",
      phone: "9876543210",
      motherEmail: "priya.sharma@example.com",
      fatherEmail: "vikram.sharma@example.com",
      sources: ["Banner", "Other"],
      otherSource: "Society WhatsApp Group",
    });
  } else if (formArg === "contact") {
    result = await sendContactEmail({
      name: "Meera Gupta",
      phone: "+91 99887 76655",
      email: "meera.gupta@example.com",
      message: "Would like to schedule a campus tour next Saturday morning. Please confirm timing.",
    });
  } else {
    console.log("Unknown form type. Supported: enquiry, admission, contact");
    return;
  }

  console.log("\nSend Result:", result);
  if (result.success) {
    console.log(`\n🎉 Test email sent successfully! Message ID: ${result.messageId}`);
  } else {
    console.error(`\n❌ Failed to send email: ${result.error}`);
  }
}

runTest().catch(console.error);
