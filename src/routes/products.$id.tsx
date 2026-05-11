import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/products/$id")({
  head: ({ params }) => {
    const p = getProduct(params.id);
    const title = p ? `${p.name} — LUXEVISION` : "Product — LUXEVISION";
    const desc = p?.description ?? "Discover this LUXEVISION frame.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-semibold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-accent">
          ← Back to shop
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-foreground">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {product.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-medium">${product.price}</p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-8">
              <p className="text-sm font-medium">
                Color: <span className="text-muted-foreground">{color}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={
                      "rounded-full border px-4 py-2 text-sm transition " +
                      (color === c
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:text-foreground")
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8 flex items-center gap-4">
              <p className="text-sm font-medium">Quantity</p>
              <div className="flex items-center rounded-full border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-2 text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAdd}
              className="mt-8 w-full rounded-full bg-foreground py-4 text-sm font-medium text-background transition hover:opacity-90 sm:w-auto sm:px-12"
            >
              {added ? "Added to cart ✓" : "Add to cart"}
            </button>

            {/* Perks */}
            <ul className="mt-10 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <li>· Free shipping on orders over $150</li>
              <li>· 30-day risk-free returns</li>
              <li>· Lifetime frame warranty</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
