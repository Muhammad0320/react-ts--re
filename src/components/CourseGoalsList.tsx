import { FC } from "react";
import { GoalType } from "../App";
import CourseGoals from "./CourseGoals";

type PropType = {
  goals: GoalType[];
  onDelete(id: number): void;
};

const CourseGoalsList: FC<PropType> = ({ goals, onDelete }) => {
  return (
    <ul>
      {goals.map(({ title, description, id }) => (
        <li key={id}>
          <CourseGoals onDelete={onDelete} title={title} id={id}>
            {" "}
            {description}
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
