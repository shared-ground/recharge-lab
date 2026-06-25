export interface Testimonial {
  quote: string;
  attribution?: string; // optional - not always known
  stars?: number;       // 1-5, defaults to 5
}

// The three strongest reviews, always visible in a pinned grid.
export const pinnedTestimonials: Testimonial[] = [
  {
    quote: "Ever since my last treatment I've been able to get out of bed in the morning without any ankle/foot pain. Absolute life changer. Went for a 5k run at the weekend - first time since before Christmas - and no problem at all.",
    attribution: "David - Former Rugby Player, Bath & South West",
    stars: 5
  },
  {
    quote: "After one session I could close my hand fully for the first time in months - suspected arthritis in my right hand. Shoulders, back - all of it felt different. One session.",
    attribution: "Steven - BJJ Practitioner, Bath & South West",
    stars: 5
  },
  {
    quote: "Two sessions in and the difference is clear. After the first I had noticeably more energy. The second targeted my chronic neck pain directly - the muscles felt more relaxed and the pain eased straight away.",
    attribution: "Kirsty - BJJ Black Belt & Mother of Two, Bath & South West",
    stars: 5
  }
];

// Remaining reviews, shown in the auto-advancing carousel.
export const carouselTestimonials: Testimonial[] = [
  {
    quote: "I've had lower back facet joint issues for years and after my first session my back felt noticeably looser straight away. A minor tendon issue in my foot also improved very quickly after treatment. Terry is knowledgeable, professional and genuinely cares.",
    attribution: "Phin - BJJ Practitioner, Bath & South West",
    stars: 5
  },
  {
    quote: "Immediately effective - two separate issues in my lower back and left arm eased significantly in the first session, with further improvements compounding from there. Next level treatment.",
    attribution: "Dom - Finance Director & BJJ Hobbyist, Bath & South West",
    stars: 5
  },
  {
    quote: "Arrived with a bad back and a sore Achilles. By the time I left, both felt completely fine. One session - looser, more comfortable, able to move without the pain I came in with.",
    attribution: "Steve - Bath & South West",
    stars: 5
  }
];
