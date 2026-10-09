import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const sliderDir = path.join(process.cwd(), "public/assets/slider");
    if (!fs.existsSync(sliderDir)) {
      return NextResponse.json({ banners: [] });
    }

    const files = fs.readdirSync(sliderDir);
    
    // Match main hero banner images (excluding _mobile versions)
    const bannerFiles = files
      .filter((file) => /^hero_banner_.*\.(jpg|jpeg|png|webp)$/i.test(file) && !file.includes("_mobile"))
      .sort((a, b) => {
        // Natural numeric sort e.g. hero_banner_1, hero_banner_2, hero_banner_10
        const numA = parseInt(a.replace(/\D/g, "")) || 0;
        const numB = parseInt(b.replace(/\D/g, "")) || 0;
        return numA - numB;
      })
      .map((file, idx) => ({
        id: idx + 1,
        image: `/assets/slider/${file}`,
        alt: `Rising Kids School Banner ${idx + 1}`,
        link: file.includes("1") ? "/admissions" : "/about",
      }));

    return NextResponse.json({ banners: bannerFiles });
  } catch (error) {
    return NextResponse.json({ banners: [] }, { status: 500 });
  }
}
