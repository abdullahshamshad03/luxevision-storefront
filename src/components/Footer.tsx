export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold tracking-[0.2em]">LUXEVISION</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Eyewear designed for the way you see the world.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Optical</li>
            <li>Sunglasses</li>
            <li>Blue Light</li>
            <li>Reading</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Stores</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            Get new drops and stories, straight to your inbox.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-foreground"
            />
            <button className="rounded-full bg-foreground px-4 py-2 text-sm text-background">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} LUXEVISION. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
