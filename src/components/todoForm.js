import React, { useState, useEffect } from "react";

const initialfromValues = {
  titulo: "",
  descripcion: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpDate, setTodoEdit }) => {
  const [formValues, setformValue] = useState(initialfromValues);

  const { titulo, descripcion } = formValues;

  const [error, setError] = useState(null);

  const [message, setmessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setformValue(todoEdit);
    }else{
      setformValue(initialfromValues);
    }
  }, [todoEdit]);

  const handleImputChange = (e) => {
    const changedFromValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setformValue(changedFromValues);
  };
  const hundleSubmit = (e) => {
    e.preventDefault();

    if (titulo.trim() === "" || descripcion.trim() === "") {
      setError("El campo de Titulo o Descripción se encuentran vacios");
      return;
    }

    if (todoEdit) {
      todoUpDate(formValues);
      setmessage("Actualizado exitosamente");
    } else {
      todoAdd(formValues);
      setmessage("Agregado exitosamente");
      setformValue(initialfromValues);
    }
    setTimeout(() => {
      setmessage(null);
    }, 3500);
    setError(null);
  };
  return (
    <div>
      <h2 className="text-center display-4">{todoEdit ? "Editar Tarea" : "Nueva Tarea"}</h2>
      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-sm btn-warning mb-2"
        >
          Cancelar Edición
        </button>
      )}

      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Titulo"
          value={titulo}
          name="titulo"
          onChange={handleImputChange}
        />
        <textarea
          placeholder="Descripción"
          className="form-control mt-2"
          value={descripcion}
          name="descripcion"
          onChange={handleImputChange}
        ></textarea>
        <button className="btn btn-block btn-primary mt-2">
          {todoEdit ? "Actualizar Tarea" : "Agregar Tarea"}
        </button>
      </form>
      {error ? <div className="alert alert-danger mt-2">{error}</div> : null}
      {message ? (
        <div className="alert alert-success mt-2">{message}</div>
      ) : null}
    </div>
  );
};

export default TodoForm;
