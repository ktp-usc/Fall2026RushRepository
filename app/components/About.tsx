import { PersonalDetail } from "./PersonalDetail";

export function About() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="panel">
        <div className="panel-title">
          <span className="size-2 rounded-full bg-error/80" />
          <span className="size-2 rounded-full bg-warning/80" />
          <span className="size-2 rounded-full bg-primary/80" />
          <span className="ml-2">about.md</span>
        </div>
        <div className="space-y-4 p-5">
          <p className="text-text-primary">
            I&apos;m <span className="text-primary">Name</span>, a &quot;major&quot; student
            at the University of South Carolina interested in...
          </p>
          <p className="text-text-secondary">I am looking for...</p>
        </div>
      </article>
      <article className="panel">
        <div className="panel-title">
          <span className="text-primary">▸</span>
          Profile
        </div>
        <div className="flex flex-col gap-1 p-2 sm:p-3">
          <PersonalDetail
            label={"UNIVERSITY"}
            detail={"University of South Carolina"}
          />
          <PersonalDetail label={"MAJOR"} detail={"Computer Science"} />
          <PersonalDetail label={"GRADUATION"} detail={"Class of 2028"} />
          <PersonalDetail
            label={"STATUS"}
            detail={"Looking for SWE internship"}
          />
        </div>
      </article>
    </div>
  );
}
