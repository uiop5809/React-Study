import "./App.css";
import Composition from "./components/Props/Composition.jsx";
import Extraction from "./components/Props/Extraction/Extraction.jsx";
import ClassComponent from "./components/State/ClassComponent.jsx";
import FunctionalComponent from "./components/State/FunctionalComponent.jsx";

function App() {
  return (
    <div className="App">
      <Composition />
      <Extraction />
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
