import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImg from "@/assets/hero.jpg";
import personImg from "@/assets/person.jpg";
import eyewear from "@/assets/eyewear.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUXEVISION — Eyewear designed for the way you see" },
      {
        name: "description",
        content:
          "LUXEVISION crafts modern optical frames, sunglasses, and blue-light eyewear with timeless design and premium materials.",
      },
      { property: "og:title", content: "LUXEVISION — Modern Eyewear" },
      {
        property: "og:description",
        content: "Optical, sunglasses, and blue-light frames designed with intent.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);
  const cats = [
    { name: "Optical", desc: "Everyday clarity" },
    { name: "Sunglasses", desc: "Sun-ready style" },
    { name: "Blue Light", desc: "Screen comfort" },
    { name: "Reading", desc: "Effortless focus" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-16 md:pb-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              New Collection · 2026
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              See the world,
              <br />
              <span className="italic text-accent">beautifully.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Handcrafted eyewear made from premium Italian acetate and titanium.
              Designed to last, made to be loved.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                Shop the collection
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-secondary"
              >
                Explore styles
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-secondary">
              <img
                src={heroImg}
                alt="Premium black acetate eyeglasses with gold accents"
                width={1536}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Featured frames</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Pieces our customers can't stop wearing.
            </p>
          </div>
          <Link
            to="/products"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:block"
          >
            View all →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold md:text-4xl">Shop by category</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <Link
              key={c.name}
              to="/products"
              className="group rounded-2xl border border-border p-6 transition hover:border-foreground"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Collection
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-6 inline-block text-sm text-foreground transition group-hover:text-accent">
                Discover →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Our story
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Eyewear made with intention.
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              Since day one, LUXEVISION has obsessed over the small things — the
              weight of a frame, the curve of a temple, the warmth of acetate
              against your skin. We build glasses you'll reach for every morning.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-semibold">50k+</p>
                <p className="text-xs text-muted-foreground">Happy wearers</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">120</p>
                <p className="text-xs text-muted-foreground">Unique frames</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">12</p>
                <p className="text-xs text-muted-foreground">Studios worldwide</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-background">
              <img
                src = {personImg}
                alt="Person wearing eyewear"
                loading="lazy"
                className="h-full w-full object-cover object-right"
              />
            </div>
            <div className="mt-10 aspect-[3/5] overflow-hidden rounded-2xl bg-background">
              <img
                src={eyewear}
                alt="Eyewear flatlay"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">What people say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "The most comfortable frames I've ever owned. They feel like nothing on my face.",
              name: "Amelia R.",
              role: "Architect",
            },
            {
              quote:
                "Beautifully made and the customer service was incredible. I'm a customer for life.",
              name: "Daniel K.",
              role: "Photographer",
            },
            {
              quote:
                "Finally found a pair that fits my style and my screen-heavy workdays.",
              name: "Priya S.",
              role: "Product Designer",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border p-6"
            >
              <blockquote className="text-base leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
