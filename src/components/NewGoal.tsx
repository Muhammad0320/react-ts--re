import { type FormEvent } from "react";

const NewGoal = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your Goal</label>

        <input type="text" name="title" id="title" />
      </p>

      <p>
        <label htmlFor="summary">Summary</label>

        <input type="text" name="summary" id="summary" />
      </p>

      <p>
        <button> Add Goal </button>
      </p>
    </form>
  );
};

export default NewGoal;
