/* eslint-disable react/prop-types */

const Tasks = ({ tasks, toggleTaskComplete, removeTask }) => {
  return (
    <div className="">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="list-unstyled text-start d-flex justify-content-center align-items-center mb-3"
        >
          <p
            className={`mb-0 mx-3 ${
              task.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            {index + 1}. {task.text}
          </p>
          <div className="form-check ms-3">
            <input
              className="form-check-input p-2 me-3"
              type="checkbox"
              checked={task.completed}
              value=""
              id="flexCheckDefault"
              onChange={() => toggleTaskComplete(index)}
            />
          </div>
          <button className="btn btn-danger" onClick={() => removeTask(index)}>
            Remove
          </button>
        </li>
      ))}
    </div>
  );
};

export default Tasks;
