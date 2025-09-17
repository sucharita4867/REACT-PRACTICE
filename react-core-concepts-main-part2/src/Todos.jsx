import { use } from "react";

export default function Todos({ fetchTodos }) {
  const todos = use(fetchTodos);
  console.log(todos);
  return (
    <div className="card">
      <h3>Todos:{todos.length}</h3>
    </div>
  );
}
