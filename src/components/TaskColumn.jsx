import TaskCard from "./TaskCard";

const TaskColumn = ({ icon, title, task, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        {icon} {title}
      </h2>

      {task.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
