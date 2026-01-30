import { useState } from "react";
import { entries } from "./data/entries";
import SearchInput from "./components/ui/SearchInput";
import EntryList from "./components/ui/EntryList";

import { searchEntries } from "./utils/search";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const results = searchEntries(entries, query);

  return (
    <div className="mx-auto max-w-xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Reverse Jisho</h1>

      <SearchInput value={query} onChange={setQuery} />
      <EntryList entries={results} query={query} />
    </div>
  );
}

export default App;
