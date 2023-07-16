import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter);

  console.log("Render NabBAr");
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        Task Count : {tasks.length} &nbsp; counter : {counter}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
