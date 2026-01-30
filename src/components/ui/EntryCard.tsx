import type { Entry } from "../../types/Entry";

export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <h2 className="text-xl font-bold mb-1">{entry.en.join(" / ")}</h2>

      <p className="text-sm text-gray-600 mb-3">{entry.nuance}</p>

      <ul className="mb-3 list-disc pl-5">
        {entry.examples.map((ex, i) => (
          <li key={i}>{ex}</li>
        ))}
      </ul>

      {entry.commonMistakes && (
        <div className="rounded bg-red-50 p-3 text-sm">
          {entry.commonMistakes.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
      )}
    </div>
  );
}
