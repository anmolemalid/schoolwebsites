"use client";

import GenericCarousel from "./GenericCarousel";
import { t } from "../lib/i18n";

export default function EducationalTourCarousel() {
  return (
    <GenericCarousel
      className="mt-5 pt-4 border-top"
      badge={t.events.educationalTours.carousel.badge}
      subBadge={t.events.educationalTours.carousel.subBadge}
      title={t.events.educationalTours.carousel.title}
      subtitle={t.events.educationalTours.carousel.subtitle}
      items={t.events.photos.educationalTours}
    />
  );
}
