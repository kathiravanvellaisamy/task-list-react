import { useState } from "react";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");
  // console.log(task, status);
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const changeTask = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          onChange={changeTask}
          className="task_input"
          placeholder="Enter your task..."
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
            <Tag
              tagName="ExpressJs"
              selectTag={selectTag}
              selected={checkTag("ExpressJs")}
            />
            <Tag
              tagName="AWS"
              selectTag={selectTag}
              selected={checkTag("AWS")}
            />
            <Tag
              tagName="Git"
              selectTag={selectTag}
              selected={checkTag("Git")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={changeTask}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
