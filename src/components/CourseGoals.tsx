interface CourseGoalTypes {
  title: string;
  description: string;
}

export function CourseGoals({ title, description }: CourseGoalTypes) {
  return (
    <article>
      <div>
        <h2> {title} </h2>

        <p> {description} </p>
      </div>

      <button> DELETE </button>
    </article>
  );
}
