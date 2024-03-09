import NewSubTask from "./NewSubTask";
export default function SubTasks({ subTasks, onAddSubTask, onDeleteSubTask }) {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>Sub Tasks</h2>
      <NewSubTask onAddSubTask={onAddSubTask} />
      {subTasks.length === 0 && (
        <p className='text-stone-800 my-4'>
          This Task doesn't have any sub-task
        </p>
      )}

      {subTasks.length > 0 && (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {subTasks.map((subTask) => (
            <li key={subTask.subTaskId} className='flex justify-between my-4'>
              <span>{subTask.text}</span>
              <button
                className='text-stone-700 hover:text-red-500'
                onClick={() => onDeleteSubTask(subTask.subTaskId)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
