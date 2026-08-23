import { ChevronRight } from "lucide-react";

type props = {
  title: string;
  details: string[];
};

export function Skill({ title, details }: props) {
  return (
    <div>
      <div className="flex items-center p-4 bg-green-600/10">
        <ChevronRight className="text-primary" />
        <h1 className="text-text-muted ">{title}</h1>
      </div>
      <div>
        {details.map((detail, index) => (
          <div
            className="flex p-4 items-center bg-green-950/10 border-color-border border-b"
            key={index}
          >
            <p className="text-primary">{index.toString().padStart(2, "0")}</p>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
