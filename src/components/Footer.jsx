import { Github, MessageCircle } from "lucide-react";
import { DISCLAIMER } from "../data/seed";
import { WA_LINK } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-8">
        <p className="border-b border-line pb-4 text-center text-xs font-semibold leading-relaxed text-soft">
          {DISCLAIMER} — Wartara bukan media berita nyata dan tidak berafiliasi
          dengan media mana pun.
        </p>
        <div className="flex flex-col items-start justify-between gap-2 pt-4 text-xs text-soft sm:flex-row sm:items-center">
          <p>© 2026 Wartara. Seluruh konten fiktif (concept demo).</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-dark"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <span>
              dibuat oleh{" "}
              <a
                href="https://github.com/Atazyyy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-ink hover:text-brand"
              >
                <Github className="h-3.5 w-3.5" /> Agni Miftah Fauzi
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
