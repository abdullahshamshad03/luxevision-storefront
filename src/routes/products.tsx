import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop Eyewear — LUXEVISION" },
      {
        name: "description",
        content:
          "Browse the full LUXEVISION collection of optical frames, sunglasses, reading glasses, and blue-light eyewear.",
      },
      { property: "og:title", content: "Shop Eyewear — LUXEVISION" },
      {
        property: "og:description",
        content: "The complete LUXEVISION eyewear collection.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          The collection
        </p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">All eyewear</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Handpicked frames for every face, every mood, every moment.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "rounded-full border px-4 py-2 text-sm transition " +
                (active === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No products in this category yet.
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
}
