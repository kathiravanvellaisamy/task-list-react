import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn icon="🎯" title="To Do" />
        <TaskColumn icon="⌛" title="Doing" />
        <TaskColumn icon="✅" title="Done" />
      </main>
    </div>
  );
};

export default App;
