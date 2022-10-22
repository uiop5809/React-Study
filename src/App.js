import "./App.css";
import Composition from "./components/Props/Composition.jsx";
import Extraction from "./components/Props/Extraction/Extraction.jsx";
import ClassComponent from "./components/State/ClassComponent.jsx";
import FunctionalComponent from "./components/State/FunctionalComponent.jsx";
import ClassComponent2 from "./components/LifeCycle/ClassComponent2";

function App() {
  return (
    <div className="App">
      <Composition />
      <Extraction />
      <ClassComponent />
      <FunctionalComponent />
      <ClassComponent2 />
    </div>
  );
}

export default App;
