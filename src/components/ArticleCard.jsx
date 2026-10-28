import { motion } from "framer-motion";
import { Bookmark, Eye } from "lucide-react";
import { authorById } from "../data/seed";
import { compactNumber, publishedStamp } from "../utils/format";

/**
 * Kartu artikel. Variant:
 * - "standard": gambar + kategori + judul serif + lead + meta
 * - "compact" : horizontal kecil untuk related/baca nanti
 */
export default function ArticleCard({
  article,
  onOpen,
  variant = "standard",
  index = 0,
  bookmarked = false,
  onToggleBookmark,
  showLead = true,
}) {
  const author = authorById(article.authorId);

  const BookmarkBtn = onToggleBookmark ? (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleBookmark(article.id);
      }}
      aria-label={bookmarked ? "Hapus dari Baca nanti" : "Simpan ke Baca nanti"}
      className={`absolute right-3 top-3 z-10 rounded-full p-2 shadow-sm transition-colors ${
        bookmarked
          ? "bg-brand text-white"
          : "bg-paper/95 text-ink hover:bg-brand hover:text-white"
      }`}
    >
      <Bookmark
        className="h-4 w-4"
        fill={bookmarked ? "currentColor" : "none"}
      />
    </button>
  ) : null;

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.3, delay: index * 0.06 }}
        onClick={() => onOpen(article.id)}
        className="group cursor-pointer border-b border-line pb-4 last:border-b-0 last:pb-0"
      >
        <div className="flex gap-3">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-16 w-24 shrink-0 rounded-lg border border-line object-cover"
          />
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-wider text-brand">
              {article.category}
            </p>
            <h4 className="mt-0.5 line-clamp-2 font-serif text-sm font-bold leading-snug text-ink transition-colors group-hover:text-brand">
              {article.title}
            </h4>
            <p className="mt-1 text-[11px] font-medium text-soft">
              {publishedStamp(article.hoursAgo)}
            </p>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onClick={() => onOpen(article.id)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {BookmarkBtn}
        <span className="absolute left-3 top-3 rounded-full bg-paper/95 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-brand">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
          {article.title}
        </h3>
        {showLead && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-soft">
            {article.lead}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-[11px] font-medium text-soft">
          <span className="font-bold text-ink">{author.name}</span>
          <span>{publishedStamp(article.hoursAgo)}</span>
          <span className="ml-auto inline-flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {compactNumber(article.views)}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
