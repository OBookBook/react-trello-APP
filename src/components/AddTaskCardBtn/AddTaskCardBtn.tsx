import { v4 as uuid } from "uuid";

const AddTaskCardBtn = ({ taskCardList, setTaskCardList }) => {
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
