import { Link } from "@tanstack/react-router";
import logo from "@/assets/chefbora-logo.png";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="ChefBora">
      <img src={logo} alt="ChefBora" className={`${className} w-auto`} />
    </Link>
  );
}
