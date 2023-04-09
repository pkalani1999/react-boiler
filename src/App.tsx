import { Provider } from "react-redux";
import { store } from "./store";
import About from "@components/About";

const App = () => {
  return (
    <Provider store={store}>
      <About />
    </Provider>
  );
};

export default App;
