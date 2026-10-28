import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bookmark,
  BookmarkX,
  Cloud,
  CloudRain,
  CloudSun,
  Droplets,
  Sun,
  Wind,
} from "lucide-react";
import { RATES, WEATHER, popularArticles } from "../data/seed";
import { compactNumber, fmtDiff, fmtKurs } from "../utils/format";

const WX_ICON = {
  sun: Sun,
  cloudsun: CloudSun,
  rain: CloudRain,
  cloud: Cloud,
};

function Panel({ title, children, note }) {
  return (
    <section className="rounded-2xl border border-line bg-paper p-5 shadow-sm">
      <h3 className="font-serif text-lg font-black text-ink">
        <span className="mr-2 inline-block h-4 w-1.5 rounded-full bg-brand align-middle" />
        {title}
      </h3>
      {note && (
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-soft">
          {note}
        </p>
      )}
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Sidebar({
  onOpen,
  bookmarkArticles,
  onOpenArticle,
  onRemoveBookmark,
}) {
  const popular = popularArticles(5);

  return (
    <aside className="space-y-6">
      {/* Terpopuler — bernomor */}
      <Panel title="Terpopuler" note="Paling banyak dibaca pekan ini">
        <ol className="space-y-4">
          {popular.map((a, i) => (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <button
                onClick={() => onOpenArticle(a.id)}
                className="group flex w-full items-start gap-3 text-left"
              >
                <span className="font-serif text-3xl font-black leading-none text-line transition-colors group-hover:text-brand">
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="block font-serif text-sm font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                    {a.title}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-[11px] font-medium text-soft">
                    <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[10px] font-black uppercase text-brand">
                      {a.category}
                    </span>
                    {compactNumber(a.views)} pembaca
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ol>
      </Panel>

      {/* Cuaca mock */}
      <Panel title="Cuaca Kota" note="Data simulasi mock — bukan prakiraan resmi">
        <ul className="space-y-3">
          {WEATHER.map((w) => {
            const Icon = WX_ICON[w.icon] || Sun;
            return (
              <li
                key={w.city}
                className="flex items-center gap-3 rounded-xl bg-canvas px-3 py-2.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flag-soft text-flag">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-ink">{w.city}</p>
                  <p className="text-[11px] font-medium text-soft">{w.cond}</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-lg font-black leading-none text-ink">
                    {w.temp}°C
                  </p>
                  <p className="mt-1 flex items-center justify-end gap-2 text-[10px] font-semibold text-soft">
                    <span className="inline-flex items-center gap-0.5">
                      <Droplets className="h-2.5 w-2.5" />
                      {w.humidity}%
                    </span>
                    <span className="inline-flex items-center gap-0.5">
                      <Wind className="h-2.5 w-2.5" />
                      {w.wind}
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Panel>

      {/* Kurs mock */}
      <Panel title="Kurs Valuta" note="Indikasi mock — bukan acuan transaksi">
        <ul className="divide-y divide-line">
          {RATES.map((r) => (
            <li key={r.code} className="flex items-center gap-3 py-2.5">
              <span className="flex h-8 w-12 shrink-0 items-center justify-center rounded-lg bg-ink text-[11px] font-black text-paper">
                {r.code}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-ink">{r.name}</p>
                <p
                  className={`text-[11px] font-bold ${
                    r.diff >= 0 ? "text-flag" : "text-brand"
                  }`}
                >
                  {r.diff >= 0 ? (
                    <ArrowUpRight className="mr-0.5 inline h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-0.5 inline h-3 w-3" />
                  )}
                  {fmtDiff(r.diff)}
                </p>
              </div>
              <p className="font-serif text-sm font-black text-ink">
                Rp {fmtKurs(r.value)}
              </p>
            </li>
          ))}
        </ul>
      </Panel>

      {/* Baca nanti (localStorage) */}
      {bookmarkArticles.length > 0 && (
        <Panel title="Baca Nanti" note="Tersimpan di perangkat Anda">
          <div className="space-y-4">
            {bookmarkArticles.map((a) => (
              <div key={a.id} className="flex items-start gap-2">
                <button
                  onClick={() => onOpen(a.id)}
                  className="group flex-1 text-left"
                >
                  <p className="text-[10px] font-black uppercase tracking-wider text-brand">
                    {a.category}
                  </p>
                  <p className="mt-0.5 line-clamp-2 font-serif text-sm font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                    {a.title}
                  </p>
                </button>
                <button
                  onClick={() => onRemoveBookmark(a.id)}
                  aria-label="Hapus dari Baca nanti"
                  className="mt-0.5 rounded-full p-1.5 text-soft transition-colors hover:bg-brand-soft hover:text-brand"
                >
                  <BookmarkX className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </Panel>
      )}

      {bookmarkArticles.length === 0 && (
        <Panel title="Baca Nanti">
          <div className="flex items-start gap-3 rounded-xl border border-dashed border-line bg-canvas p-4">
            <Bookmark className="mt-0.5 h-4 w-4 shrink-0 text-soft" />
            <p className="text-xs leading-relaxed text-soft">
              Sentuh ikon penanda di kartu berita untuk menyimpan artikel ke
              daftar ini. Tersimpan di perangkat Anda.
            </p>
          </div>
        </Panel>
      )}
    </aside>
  );
}
