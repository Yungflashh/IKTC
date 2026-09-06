import PageHeader from "@/components/PageHeader";
import BookingsList from "@/components/BookingsList";

export const metadata = { title: "My bookings" };

export default function BookingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bookings"
        title="My bookings."
        description="Every event you've reserved a seat for. Show the reference at the door — that's all you need."
      />
      <section className="pb-24">
        <div className="container">
          <BookingsList />
        </div>
      </section>
    </>
  );
}
