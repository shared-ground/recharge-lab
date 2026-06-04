export interface Testimonial {
  quote: string;
  attribution?: string; // optional - not always known
  stars?: number;       // 1–5, defaults to 5
}

export const testimonials: Testimonial[] = [
  {
    quote: "Ever since my last treatment I've been able to get out of bed in the morning without any ankle/foot pain. Absolute life changer. Went for a 5k run at the weekend - first time since before Christmas - and no problem at all.",
    attribution: "Client - Bath & South West",
    stars: 5
  }
];
