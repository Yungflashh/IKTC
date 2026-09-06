import PageHeader from "@/components/PageHeader";
import EventsListing from "@/components/EventsListing";

export const metadata = {
  title: "Events",
  description:
    "Browse and book upcoming IKTC events — meetups, workshops, bootcamps, hackathons and firesides.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Book your seat."
        description="From free monthly meetups to weekend bootcamps and the annual hackathon — find the room you want to be in next."
      />
      <EventsListing />
    </>
  );
}
