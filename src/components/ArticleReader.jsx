import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bookmark,
  Check,
  Clock,
  Copy,
  Eye,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { DISCLAIMER, WA_NUMBER, authorById, relatedArticles } from "../data/seed";
import { compactNumber, publishedStamp } from "../utils/format";
import ArticleCard from "./ArticleCard";

export default function ArticleReader({
  article,
  onBack,
  onOpen,
  bookmarked,
  onToggleBookmark,
}) {
  const [toast, setToast] = useState("");
  const author = authorById(article.authorId);
  const related = relatedArticles(article, 3);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [article.id]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Tautan artikel tersalin");
    } catch {
      showToast("Tidak bisa menyalin tautan di browser ini");
    }
  };

  const shareWA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo! Saya baru membaca "${article.title}" di Wartara.`
  )}`;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
      <motion.div
        key={article.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-soft transition-colors hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke beranda
        </button>

        <article className="mx-auto mt-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
              {article.category}
            </span>
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold transition-colors ${
                bookmarked
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-paper text-soft hover:border-brand hover:text-brand"
              }`}
            >
              <Bookmark
                className="h-3 w-3"
                fill={bookmarked ? "currentColor" : "none"}
              />
              {bookmarked ? "Tersimpan" : "Baca nanti"}
            </button>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-black leading-tight text-ink md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 font-serif text-lg font-semibold italic leading-relaxed text-soft md:text-xl">
            {article.lead}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-line py-4">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-11 w-11 rounded-full border border-line object-cover"
            />
            <div className="text-sm">
              <p className="font-bold text-ink">{author.name}</p>
              <p className="text-xs text-soft">{author.role}</p>
            </div>
            <span className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-soft">
              <span>{publishedStamp(article.hoursAgo)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {article.readMinutes} mnt baca
              </span>
              <span className="inline-flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" /> {compactNumber(article.views)}
              </span>
            </span>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="mt-8 aspect-[16/9] w-full rounded-2xl border border-line object-cover shadow-sm"
          />
          <p className="mt-2 text-center text-[11px] italic text-soft">
            Foto: dokumentasi redaksi Wartara (ilustrasi — konten demo)
          </p>

          <div className="mt-8 space-y-6 text-[15px] leading-8 text-ink/90 md:text-base">
            {article.paragraphs.map((par, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85] first-letter:text-brand"
                    : ""
                }
              >
                {par}
              </p>
            ))}
          </div>

          {/* Disclaimer wajib */}
          <div className="mt-10 flex items-start gap-3 rounded-xl border border-brand/30 bg-brand-soft p-4">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <p className="text-sm font-semibold leading-relaxed text-brand-dark">
              {DISCLAIMER}.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
            <span className="text-xs font-bold uppercase tracking-wider text-soft">
              Bagikan artikel
            </span>
            <button
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-bold text-ink transition hover:border-brand hover:text-brand"
            >
              <Copy className="h-4 w-4" /> Salin tautan
            </button>
            <a
              href={shareWA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <span className="ml-auto hidden items-center gap-1 text-xs text-soft sm:inline-flex">
              <Check className="h-3.5 w-3.5 text-flag" /> Diverifikasi redaksi
              Wartara
            </span>
          </div>
        </article>

        {/* Related */}
        <section className="mx-auto mt-14 max-w-5xl border-t-2 border-ink pt-8">
          <h2 className="font-serif text-2xl font-black text-ink">
            Berita Terkait
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a, i) => (
              <ArticleCard
                key={a.id}
                article={a}
                onOpen={onOpen}
                index={i}
                bookmarked={bookmarked}
                onToggleBookmark={onToggleBookmark}
                showLead={false}
              />
            ))}
          </div>
        </section>
      </motion.div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 12, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 12, x: "-50%" }}
          className="fixed bottom-6 left-1/2 z-50 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper shadow-lg"
        >
          {toast}
        </motion.div>
      )}
    </div>
  );
}
