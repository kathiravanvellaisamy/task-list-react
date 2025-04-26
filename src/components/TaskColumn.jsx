import TaskCard from "./TaskCard";

const TaskColumn = ({ icon, title }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        {icon} {title}
      </h2>

      <TaskCard />
    </section>
  );
};

export default TaskColumn;
