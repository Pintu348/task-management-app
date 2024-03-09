import TaskSidebar from "./components/TaskSidebar";
import NewTask from "./components/newTask";
import EmptyProject from "./components/EmptyProject";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SelectedTask from "./components/SelectedTask";
const existingTask = JSON.parse(localStorage.getItem("tasks")) || {
  selectedTasks: undefined,
  tasks: [],
  subTasks: [],
};
function App() {
  const [taskStates, setTaskState] = useState(existingTask);

  function handleAddSubTask(text) {
    const newSubTask = {
      text: text,
      subTaskId: uuidv4(),
      taskId: taskStates.selectedTasks,
    };
    setTaskState((prevState) => {
      return {
        ...prevState,
        subTasks: [...prevState.subTasks, newSubTask],
      };
    });
    localStorage.setItem(
      "tasks",
      JSON.stringify({
        ...taskStates,
        subTasks: [...taskStates.subTasks, newSubTask],
      })
    );
  }

  function handleDeleteSubTask(id) {
    setTaskState((prevState) => {
      return {
        ...prevState,
        subTasks: prevState.subTasks.filter(
          (subTask) => subTask.subTaskId !== id
        ),
      };
    });
    localStorage.setItem(
      "tasks",
      JSON.stringify({
        ...taskStates,
        subTasks: taskStates.subTasks.filter(
          (subTask) => subTask.subTaskId !== id
        ),
      })
    );
  }

  function handleStartAddTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTasks: null,
      };
    });
  }

  function handleAddTask(project) {
    const newTask = {
      ...project,
      id: uuidv4(),
    };
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTasks: undefined,
        tasks: [...prevState.tasks, newTask],
      };
    });
    localStorage.setItem(
      "tasks",
      JSON.stringify({
        ...taskStates,
        selectedTasks: undefined,
        tasks: [...taskStates.tasks, newTask],
      })
    );
  }

  function handleCancelTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTasks: undefined,
      };
    });
  }

  function handleSelectTask(id) {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTasks: id,
      };
    });
  }

  function handleDeleteTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTasks: undefined,
        tasks: prevState.tasks.filter(
          (task) => task.id !== prevState.selectedTasks
        ),
        subTasks: prevState.subTasks.filter(
          (subTask) => subTask.taskId !== prevState.selectedTasks
        ),
      };
    });
    localStorage.setItem(
      "tasks",
      JSON.stringify({
        ...taskStates,
        selectedTasks: undefined,
        tasks: taskStates.tasks.filter(
          (task) => task.id !== taskStates.selectedTasks
        ),
        subTasks: taskStates.subTasks.filter(
          (subTask) => subTask.taskId !== taskStates.selectedTasks
        ),
      })
    );
  }

  const selectedTask = taskStates.tasks.find(
    (task) => task.id === taskStates.selectedTasks
  );
  const subTask = taskStates.subTasks.filter(
    (subTask) => subTask.taskId === taskStates.selectedTasks
  );
  let content = (
    <SelectedTask
      task={selectedTask}
      onDeleteTask={handleDeleteTask}
      onAddSubTask={handleAddSubTask}
      onDeleteSubTask={handleDeleteSubTask}
      subTasks={subTask}
    />
  );
  if (taskStates.selectedTasks === null) {
    content = (
      <NewTask onAddTask={handleAddTask} onCancelTask={handleCancelTask} />
    );
  } else if (taskStates.selectedTasks === undefined) {
    content = <EmptyProject onStartAddTask={handleStartAddTask} />;
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <TaskSidebar
        onStartAddTask={handleStartAddTask}
        projects={taskStates.tasks}
        onSelectTask={handleSelectTask}
        selectedTaskId={taskStates.selectedTasks}
      />
      {content}
    </main>
  );
}

export default App;
