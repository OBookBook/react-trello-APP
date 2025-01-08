import { v4 as uuid } from "uuid";
import { TaskData } from "../types/types";

interface AddTaskCardBtnProps {
  taskCardList: TaskData[];
  setTaskCardList: React.Dispatch<React.SetStateAction<TaskData[]>>;
}

const AddTaskCardBtn = ({
  taskCardList,
  setTaskCardList,
}: AddTaskCardBtnProps) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId: `item1-${taskCardId}`,
      },
    ]);
  };
  return (
    <div>
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardBtn;
