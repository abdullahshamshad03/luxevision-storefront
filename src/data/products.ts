// Simple mock product data for LUXEVISION
export const categories = ["All", "Optical", "Sunglasses", "Reading", "Blue Light"];

export const products = [
  {
    id: "aurora",
    name: "Aurora",
    category: "Optical",
    price: 189,
    description:
      "A refined round silhouette crafted from Italian acetate with subtle gold accents at the temples. Lightweight, balanced, and built to last.",
    colors: ["Onyx", "Tortoise", "Crystal"],
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80",
  },
  {
    id: "noir",
    name: "Noir",
    category: "Sunglasses",
    price: 245,
    description:
      "Bold square frames with polarized lenses for crisp clarity in any light. The everyday sunglass, elevated.",
    colors: ["Black", "Havana", "Smoke"],
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
  },
  {
    id: "lumen",
    name: "Lumen",
    category: "Blue Light",
    price: 145,
    description:
      "Minimal metal frames with blue-light filtering lenses. Designed for screens, made for life.",
    colors: ["Gold", "Silver", "Graphite"],
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
  },
  {
    id: "atlas",
    name: "Atlas",
    category: "Optical",
    price: 210,
    description:
      "Architectural lines meet quiet luxury. A versatile rectangular frame for the modern face.",
    colors: ["Matte Black", "Navy", "Walnut"],
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
  },
  {
    id: "vera",
    name: "Vera",
    category: "Sunglasses",
    price: 220,
    description:
      "Soft cat-eye geometry with gradient lenses. Timeless and unmistakably feminine.",
    colors: ["Tortoise", "Rose Gold", "Ivory"],
    image:
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80",
  },
  {
    id: "sage",
    name: "Sage",
    category: "Reading",
    price: 95,
    description:
      "Featherweight reading glasses with a clean, contemporary silhouette. Available in multiple strengths.",
    colors: ["Amber", "Slate", "Clear"],
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80",
  },
  {
    id: "kairo",
    name: "Kairo",
    category: "Sunglasses",
    price: 265,
    description:
      "Aviator-inspired with a modern twist. Thin metal rims, gradient lenses, total confidence.",
    colors: ["Gold/Green", "Silver/Grey", "Bronze"],
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
  },
  {
    id: "mira",
    name: "Mira",
    category: "Blue Light",
    price: 155,
    description:
      "Soft oval frames in lightweight acetate. Stylish protection for long screen days.",
    colors: ["Honey", "Mist", "Black"],
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
