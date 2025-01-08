import { TaskType } from "../types/types";
import Task from "./Task";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const reorder = (
  taskList: TaskType[],
  startIndex: number,
  endIndex: number
) => {
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
};

const Tasks = ({
  taskList,
  setTaskList,
}: {
  taskList: TaskType[];
  setTaskList: (tasks: TaskType[]) => void;
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
