type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: Props) {
  return (
    <input
      className="w-full rounded-lg border p-3 text-lg shadow-sm focus:outline-none focus:ring"
      placeholder="日本語で入力（例：気まずい）"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
