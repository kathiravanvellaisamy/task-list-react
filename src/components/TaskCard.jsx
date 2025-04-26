import Tag from "./Tag";
import { AiTwotoneDelete } from "react-icons/ai";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is sample text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="React" />
          <Tag tagName="Git" />
        </div>
        <div className="task_delete">
          <AiTwotoneDelete size={24} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
