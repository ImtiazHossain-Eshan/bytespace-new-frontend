export type Course = {
  slug: string;
  title: string;
  category: string;
  image: string;
};

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    image: "/assets/course-1.webp",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Digital Illustration",
    image: "/assets/course-2.webp",
  },
  {
    slug: "power-of-big-data",
    title: "the Power of Big Data",
    category: "Data Science",
    image: "/assets/course-3.webp",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self Care",
    category: "Productivity",
    image: "/assets/course-4.webp",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Business",
    image: "/assets/course-5.webp",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Business",
    image: "/assets/course-6.webp",
  },
];

export const learningPaths = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
] as const;

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/assets/sarah.webp",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/assets/james.webp",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/assets/alex.webp",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
] as const;
