import Tasks from "./Tasks";
import TaskAddInput from "./TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteBtn from "./TaskCardDeleteBtn";
import { useState } from "react";
import { TaskData } from "../types/types";
import { Draggable } from "react-beautiful-dnd";

interface TaskCardProps {
  index: number;
  taskCardLis: TaskData[];
  setTaskCardList: React.Dispatch<React.SetStateAction<TaskData[]>>;
  taskCard: TaskData;
}

const TaskCard = ({
  index,
  taskCardLis,
  setTaskCardList,
  taskCard,
}: TaskCardProps) => {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskData[]>([]);

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
