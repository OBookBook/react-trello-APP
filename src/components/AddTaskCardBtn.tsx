import { v4 as uuid } from "uuid";

interface TaskCard {
  id: string;
  draggableId: string;
}

interface AddTaskCardBtnProps {
  taskCardList: TaskCard[];
  setTaskCardList: React.Dispatch<React.SetStateAction<TaskCard[]>>;
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
