import { NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { sendFormEmail, verifyEmailConfig } = require("../../../lib/email.js");

export const runtime = "nodejs";

/**
 * Health check / SMTP connectivity test endpoint
 * GET /api/send-email
 */
export async function GET() {
  try {
    const check = await verifyEmailConfig();
    return NextResponse.json(check, { status: check.success ? 200 : 500 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to verify SMTP config" },
      { status: 500 }
    );
  }
}

/**
 * Main form submission endpoint
 * POST /api/send-email
 *
 * Body:
 * {
 *   formType: 'enquiry' | 'admission' | 'contact',
 *   data: { ...fields }
 * }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, data } = body;

    if (!formType || !data) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: formType and data are required." },
        { status: 400 }
      );
    }

    // Validation per form type
    if (formType === "enquiry") {
      const parentName = data.parentName || data.name;
      const mobile = data.mobile || data.phone;
      if (!parentName || !mobile) {
        return NextResponse.json(
          { success: false, error: "Parent Name and Mobile number are required for enquiry." },
          { status: 400 }
        );
      }
    } else if (formType === "admission") {
      if (!data.kidName || !data.phone) {
        return NextResponse.json(
          { success: false, error: "Child Name and Primary Phone are required for admission application." },
          { status: 400 }
        );
      }
    } else if (formType === "contact") {
      if (!data.name || (!data.phone && !data.email) || !data.message) {
        return NextResponse.json(
          { success: false, error: "Name, contact information (phone/email), and message are required." },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { success: false, error: `Invalid formType: "${formType}". Expected 'enquiry', 'admission', or 'contact'.` },
        { status: 400 }
      );
    }

    // Send the email via SMTP utility
    const result = await sendFormEmail({ formType, data });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully!",
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[API Error] /api/send-email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error occurred while sending email",
      },
      { status: 500 }
    );
  }
}
