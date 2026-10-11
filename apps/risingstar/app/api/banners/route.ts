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
    
    const bannerLinkMap: Record<number, string | undefined> = {
      1: undefined,   // First image: not clickable
      2: "/about",      // Second image: About page
      3: "/admissions", // Third image: Admission page
      4: "/curriculum", // Forth image: Curriculum page
      5: "/facilities", // Fifth image: Facilities page
    };

    // Match main hero banner images (excluding _mobile versions)
    const bannerFiles = files
      .filter((file) => /^hero_banner_.*\.(jpg|jpeg|png|webp)$/i.test(file) && !file.includes("_mobile"))
      .sort((a, b) => {
        // Natural numeric sort e.g. hero_banner_1, hero_banner_2, hero_banner_10
        const numA = parseInt(a.replace(/\D/g, "")) || 0;
        const numB = parseInt(b.replace(/\D/g, "")) || 0;
        return numA - numB;
      })
      .map((file, idx) => {
        const bannerNum = parseInt(file.replace(/\D/g, "")) || (idx + 1);
        return {
          id: idx + 1,
          image: `/assets/slider/${file}`,
          alt: `Rising Kids School Banner ${bannerNum}`,
          link: bannerLinkMap[bannerNum],
        };
      });

    return NextResponse.json({ banners: bannerFiles });
  } catch (error) {
    return NextResponse.json({ banners: [] }, { status: 500 });
  }
}
