import PageHeader from "@/components/PageHeader";
import GalleryFull from "@/components/GalleryFull";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Gallery",
  description:
    "Snapshots from IKTC meetups, workshops, hackathons and the annual conference.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Five years, one lens."
        description="A living archive of what happens when the Ikorodu Tech Community shows up. Hover for captions, click to expand, arrow keys to navigate."
      />
      <GalleryFull />
      <CTA />
    </>
  );
}
