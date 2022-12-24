import { FC } from "react";
import classes from "./HomeLogo.module.css";

const HomeLogo: FC = () => {
  return (
    <div className={classes.mainLogo}>
      <div className={classes.fname}>sambit</div>
      <div className={classes.lname}>mishra</div>
      <div className={classes.description}>
        Designer, Developer and Programmer
      </div>
    </div>
  );
};

export default HomeLogo;
