
export interface ItineraryEvent {
  time: string;
  description: string;
  icon?: string;
}

export interface ItineraryDayPlan {
  schedule: ItineraryEvent[];
  transport?: string;
}

export interface AlternativePlan {
  title: string;
  schedule: ItineraryEvent[];
  transport?: string;
  notes?: string;
}

export interface ItineraryDay {
  day: string;
  mainTitle: string;
  themeIcon: string;
  themeDescription: string;
  mainPlan: ItineraryDayPlan;
  considerations?: string;
  alternativePlan?: AlternativePlan | null;
  disney?: boolean;
}

export interface ItineraryData {
  [dateKey: string]: ItineraryDay;
}

export interface PointOfInterest {
  name: string;
  icon: string;
  category: string;
  notes: string;
  link?: string;
  imagePlaceholder: string;
}

export interface Restaurant {
  name: string;
  type: string;
  price: string;
  notes: string;
  link?: string;
}

export interface AccordionItemData {
  title: string;
  content: string;
}

export interface Comment {
  id?: string;
  author: string;
  text: string;
  created_at: string;
}

export enum NavigationTarget {
  Overview = "overview",
  DailyItinerary = "daily-itinerary",
  PointsOfInterest = "points-of-interest",
  Culinary = "culinary",
  Transport = "transport",
  Tips = "tips",
  Comments = "trip-comments",
}
