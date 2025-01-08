import { useState } from "react";
import AddTaskCardBtn from "../AddTaskCardBtn/AddTaskCardBtn";
import TaskCard from "../TaskCard/TaskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  return (
    <DragDropContext>
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
