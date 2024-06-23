import { FC, type PropsWithChildren } from "react";

type CourseGoalTypes = PropsWithChildren<{
  title: string;
  id: number;
  onDelete(id: number): void;
}>;

const CourseGoals: FC<CourseGoalTypes> = ({
  title,
  children,
  id,
  onDelete,
}) => {
  return (
    <article>
      <div>
        <h2> {title} </h2>

        <p> {children} </p>
      </div>

      <button onClick={() => onDelete(id)}> DELETE </button>
    </article>
  );
};

export default CourseGoals;
