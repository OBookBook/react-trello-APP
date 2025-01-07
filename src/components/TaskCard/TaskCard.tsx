import Task from "../Task/Task";
import TaskAddInput from "../TaskAddInput/TaskAddInput";
import TaskCardTitle from "../TaskCardTitle/TaskCardTitle";
import TaskCardDeleteBtn from "../TaskCardDeleteBtn/TaskCardDeleteBtn";
import { useState } from "react";
import { TaskType } from "../../types/types";

const TaskCard = () => {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskCardDeleteBtn />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Task />
    </div>
  );
};

export default TaskCard;
