"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-900">
            Cat Gallery
          </Link>
          <div className="flex gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/"
                  ? "text-amber-600"
                  : "text-gray-600 hover:text-amber-600"
              )}
            >
              Home
            </Link>
            <Link
              href="/developers"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/developers"
                  ? "text-amber-600"
                  : "text-gray-600 hover:text-amber-600"
              )}
            >
              Developers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
