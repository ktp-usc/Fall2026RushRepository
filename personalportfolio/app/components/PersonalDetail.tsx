type props = {
  label: string;
  detail: string;
};

export function PersonalDetail({ detail, label }: props) {
  return (
    <div className="border-t border-text-muted pt-2">
      <h1 className="text-secondary text-lg font-mono">{label}</h1>
      <p className="text-white">{detail}</p>
    </div>
  );
}
