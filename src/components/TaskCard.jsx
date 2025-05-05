import Tag from "./Tag";
import { AiTwotoneDelete } from "react-icons/ai";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag tagName={tag} key={index} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <AiTwotoneDelete size={24} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
