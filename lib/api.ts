import type { Booking, EventItem } from "./types";

/**
 * IKTC API Client
 *
 * Provides typed functions to interact with the Laravel 11 backend.
 * Uses NEXT_PUBLIC_API_URL environment variable, defaulting to http://localhost:8000/api
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

/**
 * Fetch all published events from the Laravel backend.
 */
export async function getRemoteEvents(params?: {
  category?: string;
  upcoming?: boolean;
}): Promise<EventItem[]> {
  try {
    const url = new URL(`${API_BASE_URL}/events`);
    if (params?.category) url.searchParams.set("category", params.category);
    if (params?.upcoming) url.searchParams.set("upcoming", "1");

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 }, // Cache on Next.js for 60 seconds
    });

    if (!res.ok) throw new Error("Failed to fetch events");
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.warn("Backend API unavailable, falling back to local events:", error);
    return [];
  }
}

/**
 * Fetch a single event by slug from the Laravel backend.
 */
export async function getRemoteEventBySlug(
  slug: string
): Promise<EventItem | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/events/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch {
    return null;
  }
}

/**
 * Create a booking reservation (handles both free events and paid Paystack checkout).
 */
export async function createRemoteBooking(payload: {
  eventSlug: string;
  fullName: string;
  email: string;
  phone: string;
  ticketType: "General" | "Student" | "VIP";
  tickets: number;
  paymentMethod?: string;
  dietary?: string;
  notes?: string;
}): Promise<{
  success: boolean;
  message: string;
  isFree?: boolean;
  booking?: Booking;
  payment?: {
    authorization_url?: string;
    reference?: string;
  };
}> {
  const res = await fetch(`${API_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not complete booking reservation.");
  }

  return data;
}

/**
 * Subscribe email to "The Ikorodu Signal" newsletter (synced directly to Brevo).
 */
export async function subscribeNewsletterApi(
  email: string,
  source = "website_footer"
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE_URL}/newsletter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, source }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Could not subscribe to newsletter.");
  }

  return data;
}

/**
 * Submit community contact message (forwarded via Resend).
 */
export async function submitContactApi(payload: {
  name: string;
  email: string;
  organization?: string;
  reason: "general" | "partnership" | "mentor" | "press";
  message: string;
}): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Could not submit contact message.");
  }

  return data;
}

/**
 * Submit application for an 8-week Circle program.
 */
export async function applyProgramApi(payload: {
  programSlug: string;
  fullName: string;
  email: string;
  phone: string;
  portfolioUrl?: string;
  githubUrl?: string;
  experienceLevel?: "beginner" | "intermediate" | "senior";
  motivation: string;
}): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_BASE_URL}/programs/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Could not submit application.");
  }

  return data;
}

/**
 * Fetch all gallery media snapshots from the Laravel database.
 */
export async function getRemoteGallery(): Promise<
  Array<{
    id: number;
    src: string;
    alt: string;
    category: "Meetup" | "Bootcamp" | "Hackathon" | "Conference" | "Fireside" | "Studio";
    span?: "wide" | "tall" | "large";
    caption?: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/gallery`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch gallery");
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch all community stories & essays from the Laravel database.
 */
export async function getRemoteBlogPosts(): Promise<
  Array<{
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
    author: string;
    date: string;
    tag: string;
    img: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch blog");
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch learning circles from the Laravel database.
 */
export async function getRemotePrograms(): Promise<
  Array<{
    id: number;
    slug: string;
    title: string;
    body: string;
    lead: string;
    seats: string;
    duration: string;
    location: string;
    img: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/programs`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch programs");
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch leadership and volunteer team members from the Laravel database.
 */
export async function getRemoteTeam(): Promise<
  Array<{
    id: number;
    name: string;
    role: string;
    img: string;
    bio?: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/team`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch member testimonials from the Laravel database.
 */
export async function getRemoteTestimonials(): Promise<
  Array<{
    id: number;
    quote: string;
    name: string;
    role: string;
    avatar: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/testimonials`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch past stage speakers from the Laravel database.
 */
export async function getRemotePastSpeakers(): Promise<
  Array<{
    id: number;
    name: string;
    role: string;
    avatar: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/past-speakers`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch ecosystem partners from the Laravel database.
 */
export async function getRemotePartners(): Promise<
  Array<{
    id: number;
    name: string;
    tier?: string;
    logo?: string;
    url?: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/partners`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch neighbourhood chapters from the Laravel database.
 */
export async function getRemoteChapters(): Promise<
  Array<{
    id: number;
    name: string;
    members: number;
    active: boolean;
    since: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/chapters`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch community FAQs from the Laravel database.
 */
export async function getRemoteFaqs(): Promise<
  Array<{
    id: number;
    q: string;
    a: string;
    category?: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/faqs`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch community metrics and stats from the Laravel database.
 */
export async function getRemoteStats(): Promise<
  Array<{
    id: number;
    label: string;
    value: number;
    suffix?: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/stats`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch press and media mentions from the Laravel database.
 */
export async function getRemotePress(): Promise<
  Array<{
    id: number;
    quote: string;
    outlet: string;
    url?: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/press`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

/**
 * Fetch history timeline milestones from the Laravel database.
 */
export async function getRemoteMilestones(): Promise<
  Array<{
    id: number;
    year: string;
    title: string;
    description: string;
  }>
> {
  try {
    const res = await fetch(`${API_BASE_URL}/community/milestones`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

