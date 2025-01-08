import { useState } from "react";
import AddTaskCardBtn from "../AddTaskCardBtn/AddTaskCardBtn";
import TaskCard from "../TaskCard/TaskCard";

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([
    {
      id: 0,
      draggableId: "item0",
    },
  ]);

  return (
    <div className="TaskCardsArea">
      {taskCardList.map((taskCard) => (
        <TaskCard key={taskCard.id} />
      ))}

      <AddTaskCardBtn
        taskCardList={taskCardList}
        setTaskCardList={setTaskCardList}
      />
    </div>
  );
};

export default TaskCards;
