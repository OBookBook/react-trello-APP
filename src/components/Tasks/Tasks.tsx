import { TaskType } from "../../types/types";
import Task from "../Task/Task";

const Tasks = ({
  taskList,
  setTaskList,
}: {
  taskList: TaskType[];
  setTaskList: (tasks: TaskType[]) => void;
}) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
