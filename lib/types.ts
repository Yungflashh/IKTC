export type EventCategory =
  | "Meetup"
  | "Workshop"
  | "Hackathon"
  | "Fireside"
  | "Bootcamp"
  | "Conference";

export type EventItem = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: EventCategory;
  date: string; // ISO
  endDate?: string; // ISO
  location: string;
  address: string;
  price: number; // NGN, 0 = free
  seats: number;
  seatsTaken: number;
  cover: string;
  tags: string[];
  speakers: Speaker[];
  agenda: { time: string; title: string; description?: string }[];
};

export type Speaker = {
  name: string;
  role: string;
  avatar: string;
};

export type Booking = {
  id: string;
  eventSlug: string;
  eventTitle: string;
  eventDate: string;
  fullName: string;
  email: string;
  phone: string;
  tickets: number;
  ticketType: "General" | "Student" | "VIP";
  dietary?: string;
  notes?: string;
  createdAt: string;
  totalPaid: number;
  reference: string;
};
