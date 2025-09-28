import "./App.css";
// import DaisyNav from "./assets/componante/DaisyNav/DaisyNav";
import Navbar from "./assets/componante/Navbar/Navbar";
import PricingOptions from "./assets/componante/PricingOptions/PricingOptions";
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <PricingOptions></PricingOptions>
        {/* <DaisyNav></DaisyNav> */}
      </header>
    </>
  );
}

export default App;
