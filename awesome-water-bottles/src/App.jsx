import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("./bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h3>buy Awesome Bottles</h3>
      <Suspense fallback={<h3>Bottles Are Loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
