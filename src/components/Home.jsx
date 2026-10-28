import { motion } from "framer-motion";
import { Eye, SearchX } from "lucide-react";
import { AUTHORS, ARTICLES } from "../data/seed";
import { compactNumber, publishedStamp } from "../utils/format";
import ArticleCard from "./ArticleCard";
import Sidebar from "./Sidebar";

const byNewest = (a, b) => a.hoursAgo - b.hoursAgo;

const matches = (a, q) =>
  [a.title, a.lead, a.category, ...a.paragraphs]
    .join(" ")
    .toLowerCase()
    .includes(q);

export default function Home({
  query,
  category,
  onOpen,
  onClearFilters,
  bookmarkIds,
  onToggleBookmark,
  onRemoveBookmark,
}) {
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const articles = searching
    ? ARTICLES.filter((a) => matches(a, q)).sort(byNewest)
    : category
      ? ARTICLES.filter((a) => a.category === category).sort(byNewest)
      : [...ARTICLES].sort(byNewest);

  const hero = !searching && !category ? articles[0] : null;
  const secondary = !searching && !category ? articles.slice(1, 3) : [];
  const rest = !searching && !category ? articles.slice(3) : articles;

  const bookmarkedIds = new Set(bookmarkIds);
  const bookmarkArticles = ARTICLES.filter((a) => bookmarkedIds.has(a.id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
      {/* ===== Pencarian ===== */}
      {searching && (
        <section>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b-2 border-ink pb-3">
            <h2 className="font-serif text-2xl font-black text-ink">
              Hasil pencarian
            </h2>
            <p className="text-sm font-semibold text-soft">
              {articles.length} artikel untuk &ldquo;{query.trim()}&rdquo;
            </p>
            <button
              onClick={onClearFilters}
              className="ml-auto text-xs font-bold text-brand hover:underline"
            >
              Bersihkan pencarian
            </button>
          </div>

          {articles.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-20 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                <SearchX className="h-7 w-7" />
              </div>
              <p className="font-serif text-xl font-bold text-ink">
                Tidak ada berita yang cocok
              </p>
              <p className="max-w-sm text-sm text-soft">
                Coba kata kunci lain — misalnya nama kategori, tokoh, atau
                peristiwa lainnya.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((a, i) => (
                <ArticleCard
                  key={a.id}
                  article={a}
                  onOpen={onOpen}
                  index={i}
                  bookmarked={bookmarkedIds.has(a.id)}
                  onToggleBookmark={onToggleBookmark}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ===== Halaman kategori ===== */}
      {!searching && category && (
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <section>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-3">
              <h2 className="font-serif text-3xl font-black text-ink">
                Rubrik {category}
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-soft">
                {articles.length} artikel
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {articles.map((a, i) => (
                <ArticleCard
                  key={a.id}
                  article={a}
                  onOpen={onOpen}
                  index={i}
                  bookmarked={bookmarkedIds.has(a.id)}
                  onToggleBookmark={onToggleBookmark}
                />
              ))}
            </div>
          </section>
          <div className="lg:sticky lg:top-16 lg:self-start">
            <Sidebar
              onOpen={onOpen}
              bookmarkArticles={bookmarkArticles}
              onOpenArticle={onOpen}
              onRemoveBookmark={onRemoveBookmark}
            />
          </div>
        </div>
      )}

      {/* ===== Beranda ===== */}
      {!searching && !category && (
        <>
          {hero && (
            <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              {/* Headline utama besar */}
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => onOpen(hero.id)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative">
                  <img
                    src={hero.image}
                    alt={hero.title}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                    Headline Utama
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <h1 className="font-serif text-2xl font-black leading-tight text-ink transition-colors group-hover:text-brand md:text-4xl">
                    {hero.title}
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed text-soft md:text-base">
                    {hero.lead}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-soft">
                    <span className="font-bold text-ink">
                      {AUTHORS.find((a) => a.id === hero.authorId)?.name}
                    </span>
                    <span>{publishedStamp(hero.hoursAgo)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {compactNumber(hero.views)}
                    </span>
                  </div>
                </div>
              </motion.article>

              {/* Dua berita sekunder */}
              <div className="flex flex-col gap-6">
                {secondary.map((a, i) => (
                  <motion.article
                    key={a.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    onClick={() => onOpen(a.id)}
                    className="group flex flex-1 cursor-pointer gap-4 overflow-hidden rounded-2xl border border-line bg-paper p-3 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full max-h-36 w-2/5 shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex min-w-0 flex-col">
                      <span className="w-fit rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-brand">
                        {a.category}
                      </span>
                      <h3 className="mt-2 line-clamp-3 font-serif text-base font-bold leading-snug text-ink transition-colors group-hover:text-brand md:text-lg">
                        {a.title}
                      </h3>
                      <p className="mt-auto pt-2 text-[11px] font-medium text-soft">
                        {publishedStamp(a.hoursAgo)}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          )}

          {/* Grid berita + sidebar */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
            <section>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-3">
                <h2 className="font-serif text-2xl font-black text-ink">
                  Pilar Berita
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-soft">
                  {rest.length} artikel lainnya
                </p>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {rest.map((a, i) => (
                  <ArticleCard
                    key={a.id}
                    article={a}
                    onOpen={onOpen}
                    index={i}
                    bookmarked={bookmarkedIds.has(a.id)}
                    onToggleBookmark={onToggleBookmark}
                  />
                ))}
              </div>
            </section>

            <div className="lg:sticky lg:top-16 lg:self-start">
              <Sidebar
                onOpen={onOpen}
                bookmarkArticles={bookmarkArticles}
                onOpenArticle={onOpen}
                onRemoveBookmark={onRemoveBookmark}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
