import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import CourseGoalsList from "./components/CourseGoalsList.tsx";
import Header from "./components/Header.tsx";

export type GoalType = {
  title: string;
  id: number;
  description: string;
};

export default function App() {
  const [goals, setGoal] = useState<GoalType[]>([]);

  const handleAddGoal = () => {
    const newGoal: GoalType = {
      title: "Master the art of deepwork",
      id: Math.random(),
      description: "Use every worthy technique of it",
    };

    setGoal((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1> Your course goals </h1>
      </Header>
      <button onClick={handleAddGoal}> Add goal </button>

      <CourseGoalsList goals={goals} />
    </main>
  );
}
