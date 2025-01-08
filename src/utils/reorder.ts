import { TaskData } from "../types/types";

export const reorder = (
  taskList: TaskData[],
  startIndex: number,
  endIndex: number
) => {
  const [removed] = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, removed);
};
