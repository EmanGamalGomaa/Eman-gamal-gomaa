/* ==========================================================================
   SITE CONTENT
   Edit everything about the portfolio from this file — no HTML needed.
   ========================================================================== */

const SITE = {
  name: "Eman Gamal Gomaa",
  shortName: "Eman Gamal",
  role: "Graphic Designer & Video Editor",
  location: "Egypt · Available worldwide",
  tagline:
    "I design brands, visuals and videos that look good, feel right and get results.",
  intro:
    "Hi, I'm Eman — a graphic designer and video editor helping businesses and creators tell their story through clean visuals and engaging motion.",

  about: [
    "I'm a multidisciplinary designer focused on brand identity, social media content and video editing. I love turning ideas into visuals that are simple, memorable and purposeful.",
    "Whether it's a full brand identity, a month of social media posts or a short-form video that needs to stop the scroll, I care about every detail — from typography and color to pacing and sound.",
  ],

  // Replace with your real email / links. Leave a value empty ("") to hide it.
  email: "hello@emangamalgomaa.com",
  phone: "",
  whatsapp: "", // e.g. "201000000000" (country code, no +)
  cvUrl: "", // e.g. "assets/Eman-Gamal-CV.pdf"
  socials: {
    behance: "https://www.behance.net/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "",
    dribbble: "",
  },

  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "80+", label: "Projects delivered" },
    { value: "40+", label: "Happy clients" },
  ],
};

const SERVICES = [
  {
    icon: "brand",
    title: "Brand Identity",
    text: "Logos, color palettes, typography and brand guidelines that make your business instantly recognizable.",
  },
  {
    icon: "social",
    title: "Social Media Design",
    text: "Scroll-stopping posts, carousels, stories and ad creatives built around a consistent visual system.",
  },
  {
    icon: "print",
    title: "Print & Packaging",
    text: "Flyers, brochures, menus, business cards and packaging — ready for print, pixel perfect.",
  },
  {
    icon: "video",
    title: "Video Editing",
    text: "Reels, TikToks, YouTube videos and ads with clean cuts, color grading, captions and sound design.",
  },
  {
    icon: "motion",
    title: "Motion Graphics",
    text: "Animated logos, titles, lower thirds and explainer animations that bring your brand to life.",
  },
  {
    icon: "content",
    title: "Content Packages",
    text: "Monthly design & video bundles for brands that need consistent, high-quality content.",
  },
];

const TOOLS = [
  { name: "Photoshop", short: "Ps", color: "#31A8FF" },
  { name: "Illustrator", short: "Ai", color: "#FF9A00" },
  { name: "InDesign", short: "Id", color: "#FF3366" },
  { name: "Premiere Pro", short: "Pr", color: "#9999FF" },
  { name: "After Effects", short: "Ae", color: "#9999FF" },
  { name: "Figma", short: "Fg", color: "#A259FF" },
  { name: "CapCut", short: "Cc", color: "#111111" },
  { name: "Canva", short: "Cv", color: "#00C4CC" },
];

/* --------------------------------------------------------------------------
   PROJECTS
   category: "branding" | "social" | "print" | "video" | "motion"
   cover:    path to an image (e.g. "assets/work/brand-1.jpg").
             Leave "" to show a colored placeholder until you add one.
   images:   extra images shown inside the project popup.
   video:    YouTube / Vimeo link or an .mp4 path — plays inside the popup.
   link:     optional external link (Behance, Instagram post, etc.)
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Bloom Café — Brand Identity",
    category: "branding",
    year: "2025",
    client: "Bloom Café",
    cover: "",
    tint: "#F3D9C9",
    description:
      "A warm, friendly identity for a specialty coffee shop: logo, color system, menu design, cups and signage.",
    deliverables: ["Logo", "Brand guidelines", "Menu", "Packaging"],
    images: [],
    video: "",
    link: "",
  },
  {
    title: "Skincare Launch Campaign",
    category: "social",
    year: "2025",
    client: "Glow Lab",
    cover: "",
    tint: "#E4E1F5",
    description:
      "A 30-post Instagram launch campaign with a consistent grid, carousels, stories and paid ad creatives.",
    deliverables: ["Instagram posts", "Stories", "Ad creatives"],
    images: [],
    video: "",
    link: "",
  },
  {
    title: "Product Reel — Summer Drop",
    category: "video",
    year: "2025",
    client: "Urban Wear",
    cover: "",
    tint: "#D7E8E1",
    description:
      "Fast-paced vertical reel for a clothing brand's summer collection — edit, color grade, captions and sound design.",
    deliverables: ["Editing", "Color grading", "Captions", "Sound design"],
    images: [],
    video: "",
    link: "",
  },
  {
    title: "Restaurant Menu & Print",
    category: "print",
    year: "2024",
    client: "Zaatar Kitchen",
    cover: "",
    tint: "#F5E6C8",
    description:
      "Full print suite for a Levantine restaurant: bilingual menu, flyers, business cards and takeaway packaging.",
    deliverables: ["Menu", "Flyers", "Business cards"],
    images: [],
    video: "",
    link: "",
  },
  {
    title: "Animated Logo Reveal",
    category: "motion",
    year: "2024",
    client: "Nova Studio",
    cover: "",
    tint: "#DCE6F5",
    description:
      "A 6-second animated logo reveal used as an intro for the studio's YouTube channel and social videos.",
    deliverables: ["Logo animation", "Sound design"],
    images: [],
    video: "",
    link: "",
  },
  {
    title: "Real Estate Social Kit",
    category: "social",
    year: "2024",
    client: "Elite Homes",
    cover: "",
    tint: "#E9E4DC",
    description:
      "Reusable template system for property listings, open-house announcements and testimonials.",
    deliverables: ["Templates", "Posts", "Stories"],
    images: [],
    video: "",
    link: "",
  },
  {
    title: "YouTube Channel Edit",
    category: "video",
    year: "2024",
    client: "Tech Talks",
    cover: "",
    tint: "#F5DCDC",
    description:
      "Long-form YouTube edits with B-roll, motion titles, zooms, subtitles and custom thumbnails.",
    deliverables: ["Editing", "Motion titles", "Thumbnails"],
    images: [],
    video: "",
    link: "",
  },
  {
    title: "Fitness Brand Identity",
    category: "branding",
    year: "2023",
    client: "Pulse Gym",
    cover: "",
    tint: "#DDEBD3",
    description:
      "A bold, energetic identity for a local gym — logo, merch, signage and social templates.",
    deliverables: ["Logo", "Merch", "Signage"],
    images: [],
    video: "",
    link: "",
  },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "social", label: "Social Media" },
  { id: "print", label: "Print" },
  { id: "video", label: "Video Editing" },
  { id: "motion", label: "Motion" },
];

const PROCESS = [
  {
    title: "Discover",
    text: "We talk about your goals, audience and style. I ask the right questions so nothing is guessed.",
  },
  {
    title: "Concept",
    text: "I research, sketch and present initial directions with moodboards or rough cuts.",
  },
  {
    title: "Create",
    text: "The chosen direction is refined into polished designs or a finished edit.",
  },
  {
    title: "Deliver",
    text: "You receive all final files in every format you need — ready for print, web or social.",
  },
];

const EXPERIENCE = [
  {
    period: "2023 — Present",
    title: "Freelance Graphic Designer & Video Editor",
    place: "Self-employed",
    text: "Working with brands and creators on identity, social content and video production.",
  },
  {
    period: "2022 — 2023",
    title: "Graphic Designer",
    place: "Company name",
    text: "Designed social media campaigns, print materials and ad creatives for multiple clients.",
  },
  {
    period: "2021 — 2022",
    title: "Design & Video Training",
    place: "Courses / University",
    text: "Studied graphic design fundamentals, Adobe Creative Suite and video editing.",
  },
];

// Add real client testimonials here. The section stays hidden while this list is empty.
const TESTIMONIALS = [
  // { quote: "Eman was amazing to work with...", name: "Client Name", role: "Founder, Brand" },
];
