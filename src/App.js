import React, { useState,useEffect } from "react";
import TodoForm from "./components/todoForm";
import List from "./components/todoList";

const initialTodos = [
  {
    id: 1,
    titulo: "titulo 1",
    descripcion: " es simplemente texto de relleno de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la mezcló para hacer un libro de muestras tipográfico. Ha sobrevivido no solo a cinco siglos, sino también al salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker que incluía versiones de Lorem Ipsum.",
    complet: false,
  },
  {
    id: 2,
    titulo: "titulo 2",
    descripcion: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El objetivo de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su modelo de texto predeterminado, y una búsqueda de 'lorem ipsum' revelará muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y cosas por el estilo).",
    complet: true,
  },
];

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {
  const [todos, setTodos] = useState(localTodos || initialTodos);

  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() =>{
    localStorage.setItem('todos',JSON.stringify(todos));    
  },[todos]);

  const todoDelete = (todoId) => {
    
    if(todoEdit && todoId === todoEdit.id){
      setTodoEdit(null);
    }

    const chageTodo = todos.filter((todo) => todo.id !== todoId);

    setTodos(chageTodo);
  };

  const todoCompleted = (todoId) => {
    const changesTodos = todos.map((todo) => {
      const todoEdit = {
        ...todo,
        complet: !todo.complet,
      };
      if (todo.id === todoId) {
        return todoEdit;
      } else {
        return todo;
      }
    });
    setTodos(changesTodos);
  };

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      complet: false,
    };
    const changedTodos = [newTodo, ...todos];
    setTodos(changedTodos);
  };

  const todoUpDate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );
    setTodos(changedTodos);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <List
            todos={todos}
            todoDelete={todoDelete}
            todoCompleted={todoCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpDate={todoUpDate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
