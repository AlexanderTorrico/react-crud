import logo from "./logo.svg";
import "./App.css";
import { Persona } from "./components/persona";
import StorePrueba from "./components/test/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import reducer from "./components/test/reducer";

function App() {
  return (
    <Provider store={reducer}>
      <div className="App">
        <Persona />
        {/* <StorePrueba /> */}
      </div>
    </Provider>
  );
}

export default App;
