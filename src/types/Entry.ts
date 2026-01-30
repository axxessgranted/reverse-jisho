export interface Entry {
  id: string;
  jp: string;
  en: string[];
  nuance: string;
  examples: string[];
  commonMistakes?: string[];
  tags?: string[];
}
