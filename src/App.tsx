import { useEffect } from "react";
import apiClient from "./api/apiClient";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    apiClient
      .get("")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <About />
    </div>
  );
};

export default App;
