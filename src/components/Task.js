import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{`${task.day} At ${task.time}`}</p>
    </div>
  );
};

export default Task;
