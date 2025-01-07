import { TaskType } from "../../types/types";

const Task = ({
  task,
  taskList,
  setTaskList,
}: {
  task: TaskType;
  taskList: TaskType[];
  setTaskList: (tasks: TaskType[]) => void;
}) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Task;
