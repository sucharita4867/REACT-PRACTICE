import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./counter";
import User from "./user";
import Friends from "./friends";
import Todos from "./Todos";
import Albums from "./Albums";
// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchTodos = fetch("https://jsonplaceholder.typicode.com/todos").then(
  (res) => res.json()
);

const fetchAlbums = async () => {
  const albumsUrl = await fetch("https://jsonplaceholder.typicode.com/albums");
  return albumsUrl.json();
};

function App() {
  const friendsPromise = fetchFriends();
  const albumsPromise = fetchAlbums();

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
      <Suspense fallback={<h3>All Albums is Loading...</h3>}>
        <Albums albumsPromise={albumsPromise}></Albums>
      </Suspense>
      <Suspense fallback={<h2>Todo list is coming...</h2>}>
        <Todos fetchTodos={fetchTodos}></Todos>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        {/* <User fetchUsers={fetchUsers}></User> */}
      </Suspense>
      <Suspense fallback={<h3>Friend are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
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
