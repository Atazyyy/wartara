import { Zap } from "lucide-react";
import { TICKER } from "../data/seed";

// Breaking ticker — marquee CSS murni; daftar digandakan agar loop mulus.
export default function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="flex items-stretch overflow-hidden border-b border-line bg-brand text-white">
      <div className="z-10 flex shrink-0 items-center gap-1.5 bg-brand-dark px-3 py-2 text-[11px] font-black uppercase tracking-wider md:px-5">
        <Zap className="h-3.5 w-3.5" />
        Terkini
      </div>
      <div className="relative flex flex-1 items-center overflow-hidden">
        <div className="marquee-track">
          {items.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap px-4 py-2 text-[13px] font-semibold"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
