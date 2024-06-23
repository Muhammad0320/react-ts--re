import { FC, useRef, type FormEvent } from "react";

type NewGoalsProp = {
  onAddGoal(title: string, summary: string): void;
};

const NewGoal: FC<NewGoalsProp> = ({ onAddGoal }) => {
  const goalRef = useRef<HTMLInputElement>(null);

  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const goal = goalRef.current!.value;

    const summay = summaryRef.current!.value;

    onAddGoal(goal, summay);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your Goal</label>

        <input type="text" name="title" id="title" ref={goalRef} />
      </p>

      <p>
        <label htmlFor="summary">Summary</label>

        <input type="text" name="summary" id="summary" ref={summaryRef} />
      </p>

      <p>
        <button> Add Goal </button>
      </p>
    </form>
  );
};

export default NewGoal;
