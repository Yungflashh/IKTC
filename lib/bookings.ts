import type { Booking } from "./types";

const KEY = "iktc.bookings.v1";

export function getBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Booking[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking: Booking) {
  if (typeof window === "undefined") return;
  const all = getBookings();
  all.unshift(booking);
  window.localStorage.setItem(KEY, JSON.stringify(all));
}

export function removeBooking(id: string) {
  if (typeof window === "undefined") return;
  const all = getBookings().filter((b) => b.id !== id);
  window.localStorage.setItem(KEY, JSON.stringify(all));
}

export function generateReference() {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  const t = Date.now().toString(36).slice(-4).toUpperCase();
  return `IKTC-${t}-${rand}`;
}
