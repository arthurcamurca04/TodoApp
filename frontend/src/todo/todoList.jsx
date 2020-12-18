import React, { useState, useEffect } from "react";
import api from "../api";
import IconButton from "../template/iconButton";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    api
      .get("/api")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo._id}>
              <td>{todo.description}</td>
              <td><IconButton onClick={()=>{}} action="delete" hide={false} styles="danger"/></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
