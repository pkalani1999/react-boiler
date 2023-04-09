import { useEffect } from "react";
import { getFakeData } from "src/api/service";

const About = () => {
  useEffect(() => {
    getFakeData()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>About</div>;
};

export default About;
