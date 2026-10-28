import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Home from "./components/Home";
import ArticleReader from "./components/ArticleReader";
import Footer from "./components/Footer";
import { articleById } from "./data/seed";
import useBookmarks from "./hooks/useBookmarks";

export default function App() {
  // view: { name: "home" } | { name: "article", id }
  const [view, setView] = useState({ name: "home" });
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const { ids, toggle, has, remove } = useBookmarks();

  const openArticle = (id) => {
    setView({ name: "article", id });
    window.scrollTo({ top: 0 });
  };

  const goHome = () => {
    setView({ name: "home" });
    window.scrollTo({ top: 0 });
  };

  const selectCategory = (c) => {
    setCategory(c);
    setQuery("");
    goHome();
  };

  const search = (q) => {
    setQuery(q);
    if (view.name !== "home") goHome();
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    goHome();
  };

  const current = view.name === "article" ? articleById(view.id) : null;

  return (
    <div className="flex min-h-screen flex-col bg-canvas font-sans text-ink antialiased">
      <Navbar
        view={view.name}
        onHome={goHome}
        category={category}
        onCategory={selectCategory}
        query={query}
        onQuery={search}
      />
      <Ticker />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {view.name === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Home
                query={query}
                category={category}
                onOpen={openArticle}
                onClearFilters={clearFilters}
                bookmarkIds={ids}
                onToggleBookmark={toggle}
                onRemoveBookmark={remove}
              />
            </motion.div>
          )}
          {view.name === "article" && current && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArticleReader
                article={current}
                onBack={goHome}
                onOpen={openArticle}
                bookmarked={has(current.id)}
                onToggleBookmark={toggle}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
