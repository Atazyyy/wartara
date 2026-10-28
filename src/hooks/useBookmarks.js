import { useCallback, useEffect, useState } from "react";

const KEY = "wartara-bookmarks";

// Daftar artikel "Baca nanti" — tersimpan di localStorage.
export default function useBookmarks() {
  const [ids, setIds] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
      /* penyimpanan tidak tersedia — abaikan */
    }
  }, [ids]);

  const toggle = useCallback((id) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev]
    );
  }, []);

  const has = useCallback((id) => ids.includes(id), [ids]);

  const remove = useCallback((id) => {
    setIds((prev) => prev.filter((x) => x !== id));
  }, []);

  return { ids, toggle, has, remove };
}
