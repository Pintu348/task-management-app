import { useState } from "react";

export default function NewSubTask({ onAddSubTask }) {
  const [enteredSubTask, setEnteredSubTask] = useState("");
  function handleChange(event) {
    setEnteredSubTask(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key?.toLowerCase() === "enter") {
      handleClick()
    }
  }

  function handleClick() {
    if (enteredSubTask.trim() === "") {
      return;
    }
    onAddSubTask(enteredSubTask);
    setEnteredSubTask("");
  }

  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={enteredSubTask}
      />
      <button
        className='text-stone-700 hover:text-stone-950'
        onClick={handleClick}
      >
        + Add Sub task
      </button>
    </div>
  );
}
