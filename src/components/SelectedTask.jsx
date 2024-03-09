import SubTasks from "./SubTask";

export default function SelectedTask({
  task,
  onDeleteTask,
  onAddSubTask,
  onDeleteSubTask,
  subTasks,
}) {
  const formattedDate = new Date(task.dueDate).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b-2 border-stone-300'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-600 mb-2'>
            {task.title}
          </h1>
          <button
            className='text-stone-600 hover:text-stone-950'
            onClick={onDeleteTask}
          >
            Delete
          </button>
        </div>
        <p className='text-stone-400 mb-4'>{formattedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>{task.description}</p>
      </header>
      <SubTasks
        onAddSubTask={onAddSubTask}
        onDeleteSubTask={onDeleteSubTask}
        subTasks={subTasks}
      />
    </div>
  );
}
