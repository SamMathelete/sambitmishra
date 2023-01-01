import { FC } from "react";
import { motion } from "framer-motion";
import classes from "./HomeLogo.module.css";

const HomeLogo: FC = () => {
  return (
    <motion.div
      className={classes.mainLogo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className={classes.fname}>sambit</div>
      <div className={classes.lname}>mishra</div>
      <div className={classes.description}>
        Designer, Developer and Programmer
      </div>
    </motion.div>
  );
};

export default HomeLogo;
