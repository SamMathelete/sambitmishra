import { FC } from "react";
import classes from "./HomeDesc.module.css";

const HomeDesc: FC = () => {
  return (
    <div className={classes.mainBodyDesc}>
      I am Sambit - a Web and App Developer, Designer and Competitive
      Programmer. I love building simple yet elegant designs, bringing them to
      life using latest frontend technologies and giving them cutting-edge
      functionalities using highly efficient algorithms.
      <br />
      <br /> With each line of code, I strive to make the world a simple,
      beautiful and efficient place.
    </div>
  );
};

export default HomeDesc;
