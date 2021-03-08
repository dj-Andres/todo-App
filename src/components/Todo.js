import React from "react";

const Todo = ({ todo, todoDelete, todoCompleted, setTodoEdit }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-right">
          {todo.titulo}
          <button
            onClick={() => todoCompleted(todo.id)}
            className={`btn btn-sm ${
              todo.complet ? "btn-outline-success" : "btn-success"
            } ml-2`}
          >
            {todo.complet ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text justify-text">{todo.descripcion}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-primary mr-2"
            onClick={() => setTodoEdit(todo)}
          >
            Editar
          </button>
          <button
            onClick={() => todoDelete(todo.id)}
            className="btn btn-sm btn-outline-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
