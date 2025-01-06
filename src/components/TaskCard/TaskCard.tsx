import Task from "../Task/Task";
import TaskAddInput from "../TaskAddInput/TaskAddInput";
import TaskCardDeleteBtn from "../TaskCardDeleteBtn/TaskCardDeleteBtn";
import TaskCardTitle from "../TaskCardTitle/TaskCardTitle";

const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteBtn />
      <TaskAddInput />
      <Task />
    </div>
  );
};

export default TaskCard;
