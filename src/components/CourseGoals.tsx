import { FC, type PropsWithChildren } from "react";

type CourseGoalTypes = PropsWithChildren<{ title: string }>;

const CourseGoals: FC<CourseGoalTypes> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2> {title} </h2>

        <p> {children} </p>
      </div>

      <button> DELETE </button>
    </article>
  );
};

export { CourseGoals };
