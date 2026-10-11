"use client";

import GenericCarousel from "./GenericCarousel";
import { educationalTourPhotos } from "../data/eventsCarouselData";

export { educationalTourPhotos };

export default function EducationalTourCarousel() {
  return (
    <GenericCarousel
      className="mt-5 pt-4 border-top"
      badge="PHOTO MEMORIES"
      subBadge="Field Expeditions"
      title="Learning Through Exploration & Discovery"
      subtitle="Swipe or use controls to browse our students' real-world journeys across heritage, science, and nature."
      actionLink={{
        href: "/gallery",
        label: "View Full Gallery",
      }}
      items={educationalTourPhotos}
    />
  );
}
