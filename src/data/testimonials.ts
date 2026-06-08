export interface Testimonial {
  quote: string;
  attribution?: string; // optional - not always known
  stars?: number;       // 1–5, defaults to 5
}

export const testimonials: Testimonial[] = [
  {
    quote: "Ever since my last treatment I've been able to get out of bed in the morning without any ankle/foot pain. Absolute life changer. Went for a 5k run at the weekend - first time since before Christmas - and no problem at all.",
    attribution: "David · Former Rugby Player · Bath & South West",
    stars: 5
  },
  {
    quote: "I work long hours, train BJJ five or six times a week, and the fatigue had really started to stack up. After one session I could close my hand fully for the first time in months — suspected arthritis in my right hand. Shoulders, back — all of it felt different. One session.",
    attribution: "Steven · BJJ Practitioner · Bath & South West",
    stars: 5
  }
];
