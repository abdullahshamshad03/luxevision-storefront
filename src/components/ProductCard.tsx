import { Link } from "@tanstack/react-router";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="text-base font-medium text-foreground">${product.price}</p>
      </div>
    </Link>
  );
}
