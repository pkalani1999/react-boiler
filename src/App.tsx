import { useEffect } from "react";
import About from "@components/About";
import { getFakeData } from "./api/service";

const App = () => {
  useEffect(() => {
    getFakeData()
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
