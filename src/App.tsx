import CourseGoals from "./components/CourseGoals.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1> Your course goals </h1>
      </Header>

      <CourseGoals title="Learn React + TS">
        {" "}
        Learn it from ground up, step by step{" "}
      </CourseGoals>
    </main>
  );
}
