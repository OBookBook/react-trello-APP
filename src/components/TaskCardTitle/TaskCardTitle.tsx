import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [inputCardTitle, setInputCardTitle] = useState<string>("Today");

  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  };

  return (
    <div onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
