import React from "react";
import Todo from "./Todo";

const List = ({ todos, todoDelete, todoCompleted, setTodoEdit }) => {
  return (
    <div>
      <h2 className="text-center display-4">Lista de Tareas</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas agregar uno {":)"}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todoDelete={todoDelete}
            todoCompleted={todoCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default List;
