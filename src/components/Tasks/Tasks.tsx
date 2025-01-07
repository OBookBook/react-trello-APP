import { TaskType } from "../../types/types";
import Task from "../Task/Task";

const Tasks = ({ taskList }: { taskList: TaskType[] }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
