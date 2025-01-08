import { TaskType } from "../../types/types";
import Task from "../Task/Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Tasks = ({
  taskList,
  setTaskList,
}: {
  taskList: TaskType[];
  setTaskList: (tasks: TaskType[]) => void;
}) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="draggable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task) => (
                <div key={task.id}>
                  <Task
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
