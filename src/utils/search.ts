import type { Entry } from "../types/Entry";
import { normalize } from "./normalize";

export function searchEntries(entries: Entry[], query: string): Entry[] {
  const q = normalize(query);
  if (!q) return entries;

  return entries
    .map((entry) => {
      let score = 0;

      const jp = normalize(entry.jp);
      const en = entry.en.map(normalize);
      const nuance = normalize(entry.nuance);

      // Strong matches
      if (jp === q) score += 100;
      if (jp.includes(q)) score += 50;

      // English matches
      en.forEach((word) => {
        if (word === q) score += 40;
        else if (word.includes(q)) score += 20;
      });

      // Nuance text (weak signal)
      if (nuance.includes(q)) score += 5;

      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.entry);
}
