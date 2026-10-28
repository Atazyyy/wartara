// Format waktu & angka untuk portal berita (zona WIB / Asia-Jakarta)

const TZ = "Asia/Jakarta";

const dayKey = (ts) =>
  new Date(ts).toLocaleDateString("en-CA", { timeZone: TZ }); // yyyy-mm-dd

// Jam tayang dari hoursAgo → "Hari ini • 09:42 WIB" / "Kemarin • 21:15 WIB" / "Sen, 26 Okt • 08:03 WIB"
export function publishedStamp(hoursAgo) {
  const ts = Date.now() - hoursAgo * 3600000;
  const d = new Date(ts);
  const time = d.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: TZ,
  });
  const that = dayKey(ts);
  if (that === dayKey(Date.now())) return `Hari ini • ${time} WIB`;
  if (that === dayKey(Date.now() - 86400000)) return `Kemarin • ${time} WIB`;
  const date = d.toLocaleDateString("id-ID", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: TZ,
  });
  return `${date} • ${time} WIB`;
}

// Tanggal lengkap untuk kepala surat kabar
export const fullDateToday = () =>
  new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  });

// 18420 → "18,4 rb"
export const compactNumber = (n) =>
  new Intl.NumberFormat("id-ID", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);

// Kurs: 15725 → "15.725", diff → "+15" / "−22"
export const fmtKurs = (n) => n.toLocaleString("id-ID");
export const fmtDiff = (n) => `${n > 0 ? "+" : n < 0 ? "−" : ""}${Math.abs(n).toLocaleString("id-ID")}`;
