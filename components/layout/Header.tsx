"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Gamepad2, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigationLinks } from "@/data/navigation";
import { useBookmarks } from "@/context/BookmarksProvider";

export default function Header() {
  const pathname = usePathname();
  const { ids } = useBookmarks();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-950/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3" aria-label="Playlog, на главную">
          <span className="clip-corner flex h-9 w-9 items-center justify-center bg-accent-iris text-ink-950">
            <Gamepad2 size={20} aria-hidden="true" />
          </span>
          <span className="font-display text-xl tracking-wide text-white">
            PLAY<span className="text-accent-sage">LOG</span>
          </span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigationLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive ? "bg-ink-700 text-accent-sage" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {link.href === "/bookmarks" && ids.length > 0 ? (
                      <span className="ml-2 rounded bg-accent-sage px-1.5 text-xs text-ink-950">{ids.length}</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <p className="hidden items-center gap-2 text-xs text-slate-300 sm:flex" role="status">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-sage opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-sage" />
            </span>
            Сервер онлайн
          </p>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            className="rounded border border-ink-600 p-2 text-white md:hidden"
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-navigation"
        aria-label="Мобильная навигация"
        hidden={!isMenuOpen}
        className="border-t border-ink-700 bg-ink-900 md:hidden"
      >
        <ul className="flex flex-col p-2">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname === link.href ? "page" : undefined}
                className="block rounded px-3 py-3 font-semibold text-slate-200 hover:bg-ink-700 hover:text-accent-sage"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
