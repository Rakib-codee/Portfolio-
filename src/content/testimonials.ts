export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO at TechStart",
    avatar: "",
    content: "Rakib delivered our e-commerce platform 2 weeks ahead of schedule. His attention to detail and proactive communication made the entire process seamless. Sales increased 150% within the first quarter.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Product Manager at DataFlow",
    avatar: "",
    content: "Working with Rakib was a game-changer for our analytics dashboard. He understood our needs perfectly and delivered a solution that exceeded expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Founder at CreativeHub",
    avatar: "",
    content: "Rakib transformed our outdated website into a modern, fast, and beautiful platform. His expertise in React and animations brought our vision to life. Outstanding work!",
    rating: 5,
  },
];

export type Testimonial = (typeof testimonials)[0];
