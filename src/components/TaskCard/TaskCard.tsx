import Tasks from "../Tasks/Tasks";
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
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskCard;
