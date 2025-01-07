import { TaskType } from "../../types/types";

const Task = ({
  inputText,
  taskList,
}: {
  inputText: string;
  taskList: TaskType[];
}) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>{task.text}</div>
      ))}
    </div>
  );
};

export default Task;
