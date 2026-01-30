import type { Entry } from "../../types/Entry";
import EntryCard from "./EntryCard";

export default function EntryList({ entries }: { entries: Entry[] }) {
  if (entries.length === 0) {
    return <p className="text-center text-gray-500 mt-8">No results found</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {entries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
