import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

function AddTodo(props) {
  const [title, setTitle] = useState("");

  const onSubmit = (evt) => {
    // Stop form being submmited to same file and reloading the page
    evt.preventDefault();

    // Validate todo text
    if (!title) {
      alert("Please add a task description.");
      return;
    }

    props.addTodo(title);

    // Clear task text in component state
    setTitle("");
  };

  return (
    <div className="add-items d-flex">
      <form onSubmit={onSubmit} className="form-control todo-list-input transition duration-500 ease-in-out ">
        <input
          name="task-title"
          type="text"
          placeholder="Add task..."
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          className="form-control todo-list-input placeholder-gray-500 focus:outline-none"
          data-testid="task-input-field"
        />
        <button
          type="submit"
          className="transition duration-200 ease-in-out text-gray-400 add btn btn-primary font-weight-bold todo-list-add-btn"
          data-testid="task-submit-btn">
          <FaEdit />
        </button>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
