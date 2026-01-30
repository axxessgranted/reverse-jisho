import type { Entry } from "../types/Entry";

export const entries: Entry[] = [
  {
    id: "kimazui",
    jp: "気まずい",
    en: ["awkward", "uncomfortable"],
    nuance:
      "Used when the atmosphere feels tense or socially uncomfortable, especially between people.",
    examples: [
      "It was awkward when nobody knew what to say.",
      "I felt uncomfortable sitting next to him after the argument.",
    ],
    commonMistakes: ["❌ I was embarrassing.", "⭕ It was awkward."],
    tags: ["emotion", "conversation"],
  },
  {
    id: "mottainai",
    jp: "もったいない",
    en: ["what a waste", "wasteful"],
    nuance: "Used when something valuable is wasted or not used properly.",
    examples: [
      "Throwing that away is such a waste.",
      "It's wasteful to leave the food unfinished.",
    ],
  },
];
