import { PersonalDetail } from "./PersonalDetail";

export function About() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="bg-green-600/10 border border-text-muted">
        <h1 className="text-center text-text-muted font-mono border-b border-text-muted w-full p-2">
          about.md
        </h1>
        <p className="text-text-primary m-4">
          I'm <span className="text-primary">Name</span>, a "major" student at
          the University of South Carolina interested in...
        </p>
        <p className="text-text-muted m-4">I am looking for...</p>
      </div>
      <div className="bg-green-600/10 border border-text-muted">
        <p className="text-text-muted font-mono m-4">Profile</p>
        <div className="m-4 flex flex-col gap-2">
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
      </div>
    </div>
  );
}
