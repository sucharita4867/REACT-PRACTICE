export default function Todo({ todo }) {
  return (
    <div className="card">
      <h3>id: {todo.id}</h3>
      <h3>{todo.title}</h3>
    </div>
  );
}
