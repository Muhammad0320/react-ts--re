import { type PropsWithChildren } from "react";

type CourseGoalTypes = PropsWithChildren<{ title: string }>;

export function CourseGoals({ title, children }: CourseGoalTypes) {
  return (
    <article>
      <div>
        <h2> {title} </h2>

        <p> {children} </p>
      </div>

      <button> DELETE </button>
    </article>
  );
}
