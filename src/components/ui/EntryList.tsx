import type { Entry } from "../../types/Entry";
import EntryCard from "./EntryCard";

export default function EntryList({
  entries,
  query,
}: {
  entries: Entry[];
  query: string;
}) {
  if (entries.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        「{query}」に近い表現が見つかりませんでした
      </p>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {entries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
