import { ChevronRight } from "lucide-react";

type props = {
  section: string;
};

export function Divider({ section }: props) {
  return (
    <div className="flex items-center gap-2">
      <ChevronRight className="text-text-muted h-12" />
      <h1 className="text-primary font-mono text-xl">{section}</h1>
      <div className="border border-green-900 w-full"></div>
    </div>
  );
}
