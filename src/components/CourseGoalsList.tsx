import { FC, ReactNode } from "react";
import { GoalType } from "../App";
import CourseGoals from "./CourseGoals";
import InfoBox from "./InfoBox";

type PropType = {
  goals: GoalType[];
  onDelete(id: number): void;
};

const CourseGoalsList: FC<PropType> = ({ goals, onDelete }) => {
  if (!goals.length) {
    return (
      <InfoBox mode="hint">
        You have no course goal yet, start by adding some{" "}
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 3) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        {" "}
        You are adding more goals{" "}
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
};

export default CourseGoalsList;


