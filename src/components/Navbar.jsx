import { MessageCircle, Newspaper, Search, X } from "lucide-react";
import { CATEGORIES, WA_NUMBER } from "../data/seed";
import { fullDateToday } from "../utils/format";

export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo Wartara! Saya mau bertanya tentang kerja sama media & iklan."
)}`;

export default function Navbar({
  view,
  onHome,
  category,
  onCategory,
  query,
  onQuery,
}) {
  return (
    <header className="border-b border-line bg-paper">
      {/* Bar atas: tanggal + kontak */}
      <div className="border-b border-line/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-[11px] font-semibold text-soft md:px-8">
          <span className="hidden sm:inline">{fullDateToday()}</span>
          <span className="sm:hidden">{fullDateToday().split(",")[0]}</span>
          <span className="flex items-center gap-1.5">
            <span className="hidden rounded-full bg-brand-soft px-2 py-0.5 text-brand md:inline">
              Edisi Digital
            </span>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-brand"
            >
              <MessageCircle className="h-3 w-3" />
              62812-3456-7890
            </a>
          </span>
        </div>
      </div>

      {/* Masthead */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <button onClick={onHome} className="group text-left">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand shadow-sm">
              <Newspaper className="h-5.5 w-5.5 text-white" />
            </div>
            <div>
              <p className="font-serif text-3xl font-black leading-none tracking-tight text-ink md:text-4xl">
                Wartara<span className="text-brand">.</span>
              </p>
              <p className="mt-1 hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-soft sm:block">
                Berita Tuntas, Bahasa Awam
              </p>
            </div>
          </div>
        </button>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-brand md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Pasang Iklan
        </a>
      </div>

      {/* Navigasi kategori + pencarian (sticky) */}
      <nav className="sticky top-0 z-30 border-t border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-2 px-4 py-2 md:px-8">
          <div className="flex flex-1 items-center gap-1 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => onCategory("")}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ${
                view === "home" && !category
                  ? "bg-brand text-white"
                  : "text-soft hover:bg-brand-soft hover:text-brand"
              }`}
            >
              Terbaru
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => onCategory(c)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors ${
                  view === "home" && category === c
                    ? "bg-brand text-white"
                    : "text-soft hover:bg-brand-soft hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-soft" />
            <input
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Cari berita…"
              className="w-full rounded-full border border-line bg-canvas py-2 pl-9 pr-8 text-sm font-medium text-ink placeholder:text-soft/70 focus:border-brand focus:outline-none"
            />
            {query && (
              <button
                onClick={() => onQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-soft hover:text-brand"
                aria-label="Hapus pencarian"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
