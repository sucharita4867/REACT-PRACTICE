import "./App.css";
import Counter from "./counter";
function App() {
  function handelClick() {
    alert("btn 1 is clicked");
  }
  const handelClick3 = () => {
    alert("btn 3 is clicked");
  };

  const AddNum = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me1</button>
      <button
        onClick={function handelClick2() {
          alert("click me btn click2");
        }}
      >
        Click Me2
      </button>
      <button onClick={handelClick3}>Click Me3</button>
      <button onClick={() => alert("click btn 4")}>Click Me 4</button>
      <button onClick={() => AddNum(157)}>Add Num 5</button>
    </>
  );
}

export default App;
