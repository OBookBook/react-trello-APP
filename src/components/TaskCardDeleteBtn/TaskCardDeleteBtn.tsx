const TaskCardDeleteBtn = ({ taskCardLis, setTaskCardList, taskCard }) => {
  const TaskCardDelete = (id) => {
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
