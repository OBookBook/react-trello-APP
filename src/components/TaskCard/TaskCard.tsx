import Tasks from "../Tasks/Tasks";
import TaskAddInput from "../TaskAddInput/TaskAddInput";
import TaskCardTitle from "../TaskCardTitle/TaskCardTitle";
import TaskCardDeleteBtn from "../TaskCardDeleteBtn/TaskCardDeleteBtn";
import { useState } from "react";
import { TaskType } from "../../types/types";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ index, taskCardLis, setTaskCardList, taskCard }) => {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  return (
    <Draggable index={index} draggableId={taskCard.id}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteBtnArea"
            {...provided.dragHandleProps}
          >
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
      )}
    </Draggable>
  );
};

export default TaskCard;
