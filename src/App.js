import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
