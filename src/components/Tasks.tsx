import { TaskData } from "../types/types";
import { reorder } from "../utils/reorder";
import Task from "./Task";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const Tasks = ({
  taskList,
  setTaskList,
}: {
  taskList: TaskData[];
  setTaskList: (tasks: TaskData[]) => void;
}) => {
  const handleDragEnd = (result: DropResult) => {
    if (result.destination) {
      reorder(taskList, result.source.index, result.destination.index);
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="draggable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
