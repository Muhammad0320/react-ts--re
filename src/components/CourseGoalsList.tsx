import { FC } from "react";
import { GoalType } from "../App";
import CourseGoals from "./CourseGoals";

type PropType = {
  goals: GoalType[];
};

const CourseGoalsList: FC<PropType> = ({ goals }) => {
  return (
    <ul>
      {goals.map(({ title, description, id }) => (
        <li key={id}>
          <CourseGoals title={title}> {description}</CourseGoals>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
