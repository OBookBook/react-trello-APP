import { TaskData } from "../types/types";
import { Draggable } from "react-beautiful-dnd";

const Task = ({
  index,
  task,
  taskList,
  setTaskList,
}: {
  index: number;
  task: TaskData;
  taskList: TaskData[];
  setTaskList: (tasks: TaskData[]) => void;
}) => {
  const handleDelete = (id: number | string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
