import bookPng from "../assets/no-projects.png";
import Button from "./Button";
export default function EmptyProject({ onStartAddTask }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={bookPng}
        alt='Task Image'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        No Task Selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Select a project or get started with new one
      </p>
      <p className='mt-8'>
        <Button onClick={onStartAddTask}>Create new Task</Button>
      </p>
    </div>
  );
}
