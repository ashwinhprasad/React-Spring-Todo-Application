import { Fragment } from "react";
import { Spring } from "react-spring/renderprops";
import "./Todolist.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";

const Todolist = (props) => {
  const displayTodo = () => {
    if (props.todos != null) {
      return (
        <tbody>
          {[...props.todos].map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>
                <Button onClick={props.deleteElement.bind(this, todo.id)}>
                  <DeleteIcon style={{ color: "red" }} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      );
    } else {
      return <tbody></tbody>;
    }
  };

  return (
    <Fragment>
      <Spring
        from={{ opacity: 0, marginTop: -200 }}
        to={{ opacity: 1, marginTop: 40 }}
        config={{ delay: 200, duration: 600 }}
      >
        {(springprops) => (
          <div className="table-container" style={springprops}>
            <h2>Things To Do</h2>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {displayTodo()}
            </table>
          </div>
        )}
      </Spring>
    </Fragment>
  );
};

export default Todolist;
