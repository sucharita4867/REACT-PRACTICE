import "./App.css";
import ControlledField from "./Componants/ControlledField/ControlledField";
import FormAction from "./Componants/FormAction/FormAction";
import UnControlledField from "./Componants/UnControlledField/UnControlledField";
import SimpleFrom from "./Componants/SimpleFrom/SimpleFrom";

function App() {
  return (
    <>
      <h1>Explore React From</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      <UnControlledField></UnControlledField>
    </>
  );
}

export default App;
