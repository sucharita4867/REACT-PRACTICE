// import { Suspense } from "react";
import { Suspense } from "react";
import "./App.css";
import Countries from "./componants/countries/countries";
// import Foods from "./Foods/Foods";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
console.log(countriesPromise);

// const foodsPromise = fetch(
//   "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
// ).then((res) => res.json());
// console.log(foodsPromise);

function App() {
  return (
    <>
      <Suspense fallback={<p>Countries Data Is Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

      {/* <Suspense fallback={<h4>Foods Data Is Loading... </h4>}>
        <Foods foodsPromise={foodsPromise}></Foods>
      </Suspense> */}
    </>
  );
}

export default App;
