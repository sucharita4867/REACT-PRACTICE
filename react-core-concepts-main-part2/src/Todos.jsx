import { use } from "react";
import Todo from "./Todo";

export default function Todos({ fetchTodos }) {
  const todos = use(fetchTodos);
  console.log(todos);
  return (
    <div className="card">
      <h3>Todos:{todos.length}</h3>
      {todos.map((Todos) => (
        <Todo key={Todos.id} todo={Todos}></Todo>
      ))}
    </div>
  );
}
