import Tasks from "../Tasks/Tasks";
import TaskAddInput from "../TaskAddInput/TaskAddInput";
import TaskCardTitle from "../TaskCardTitle/TaskCardTitle";
import TaskCardDeleteBtn from "../TaskCardDeleteBtn/TaskCardDeleteBtn";
import { useState } from "react";
import { TaskType } from "../../types/types";

const TaskCard = ({ taskCardLis, setTaskCardList, taskCard }) => {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  return (
    <div className="taskCard">
      <div className="taskCardTitleAndTaskCardDeleteBtnArea">
        <TaskCardTitle />
        <TaskCardDeleteBtn
          taskCardLis={taskCardLis}
          setTaskCardList={setTaskCardList}
          taskCard={taskCard}
        />
      </div>
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
