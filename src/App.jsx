import { useState } from "react";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          icon="🎯"
          title="To Do"
          task={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          icon="⌛"
          title="Doing"
          task={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          icon="✅"
          title="Done"
          task={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
