import { Fragment, useState } from "react";
import { Spring } from "react-spring/renderprops";
import "./AddTodo.css";
import { Button } from "@material-ui/core";

const AddTodo = (props) => {
  const [field, setField] = useState("");
  const todos = props.todos;
  const setTodos = props.setTodos;

  const addTodoSubmit = (e) => {
    e.preventDefault();
    if (todos) {
      setTodos([
        ...todos,
        {
          id: [...todos].length + 1,
          name: field,
        },
      ]);
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todos,
          {
            id: [...todos].length + 1,
            name: field,
          },
        ])
      );
    } else {
      setTodos([
        {
          id: 1,
          name: field,
        },
      ]);
      localStorage.setItem(
        "todos",
        JSON.stringify([
          {
            id: 1,
            name: field,
          },
        ])
      );
    }
    setField("");
  };

  return (
    <Fragment>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 200, duration: 1000 }}
      >
        {(springprops) => (
          <form style={springprops}>
            <h2>Add to the List</h2>
            <input
              value={field}
              onChange={(e) => setField(e.target.value)}
              type="text"
              placeholder="Enter Todo"
            />
            <Button
              variant="contained"
              color="secondary"
              id="add-todo"
              onClick={addTodoSubmit}
            >
              Add Todo
            </Button>
          </form>
        )}
      </Spring>
    </Fragment>
  );
};

export default AddTodo;
