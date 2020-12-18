import React, {useState} from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import api from "../api";

export default function Todo() {
  const [description, setDescription] = useState("");

  async function handleAdd(event){
    event.preventDefault();
    console.log(description);

    const data = {
      description
    }
    const response = await api.post('/api', data);
    console.log(response);
 }
  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm setDescription={setDescription} description={description} handleAdd={handleAdd} />
      <TodoList />
    </div>
  );
}
