// import { Suspense } from "react";
import { Suspense } from "react";
import "./App.css";
import Countries from "./componants/countries/countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
// console.log(countriesPromise);

function App() {
  return (
    <>
      <Suspense fallback={<p>Countries Data Is Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
