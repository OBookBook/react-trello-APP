import { useState } from "react";
import AddTaskCardBtn from "./AddTaskCardBtn";
import TaskCard from "./TaskCard";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { reorder } from "../utils/reorder";

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="draggable" direction="horizontal">
        {(provided) => (
          <div
            className="TaskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardLis={taskCardList}
                setTaskCardList={setTaskCardList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardBtn
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
