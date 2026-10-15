import Link from "next/link";
import { Github, Send, Twitch, Youtube } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigationLinks } from "@/data/navigation";

const socialLinks = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://twitch.tv", label: "Twitch", Icon: Twitch },
  { href: "https://t.me", label: "Telegram", Icon: Send }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-700 bg-ink-900">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-white">
            PLAY<span className="text-accent-sage">LOG</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Честные обзоры игр и история индустрии: от аркадных автоматов до облачных сервисов.
          </p>
        </div>

        <nav aria-label="Быстрые ссылки">
          <h2 className="font-display text-sm text-accent-iris">Быстрые ссылки</h2>
          <ul className="mt-3 space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-300 hover:text-accent-sage">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm text-accent-iris">Мы в сети</h2>
          <ul className="mt-3 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded border border-ink-600 text-slate-300 transition-colors hover:border-accent-sky hover:text-accent-sky"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-700">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>© {currentYear} Playlog. Все права защищены.</p>
          <p className="max-w-xl">
            Названия игр и студий принадлежат их владельцам. Оценки отражают мнение редакции и не являются рекламой.
          </p>
        </Container>
      </div>
    </footer>
  );
}
