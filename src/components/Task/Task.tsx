import { TaskType } from "../../types/types";

const Task = ({ task }: { task: TaskType }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Task;
