import { TaskData } from "../types/types";

type TaskCardDeleteBtnProps = {
  taskCardLis: TaskData[];
  setTaskCardList: (list: TaskData[]) => void;
  taskCard: TaskData;
};

const TaskCardDeleteBtn = ({
  taskCardLis,
  setTaskCardList,
  taskCard,
}: TaskCardDeleteBtnProps) => {
  const TaskCardDelete = (id: string) => {
    setTaskCardList(taskCardLis.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteBtn"
        onClick={() => {
          TaskCardDelete(taskCard.id);
        }}
      >
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteBtn;
