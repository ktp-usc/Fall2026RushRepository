type Props = {
  label: string;
  detail: string;
};

export function PersonalDetail({ detail, label }: Props) {
  return (
    <div className="flex flex-col gap-1 border-t border-border px-3 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <h3 className="font-mono text-xs tracking-[0.18em] text-secondary">
        {label}
      </h3>
      <p className="text-text-primary sm:text-right">{detail}</p>
    </div>
  );
}
