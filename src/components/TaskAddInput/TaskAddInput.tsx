import { TaskType } from "../../types/types";

interface TaskAddInputProps {
  inputText: string;
  setInputText: (text: string) => void;
  taskList: TaskType[];
  setTaskList: (list: TaskType[]) => void;
}

const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}: TaskAddInputProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        text: inputText,
      },
    ]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
