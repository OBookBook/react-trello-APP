import AddTaskCardBtn from "../AddTaskCardBtn/AddTaskCardBtn";
import TaskCard from "../TaskCard/TaskCard";

const TaskCards = () => {
  return (
    <div className="TaskCardsArea">
      <TaskCard />
      <AddTaskCardBtn />
    </div>
  );
};

export default TaskCards;
