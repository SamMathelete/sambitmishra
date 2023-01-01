import { FC } from "react";
import { motion } from "framer-motion";
import classes from "./HomeDesc.module.css";

const HomeDesc: FC = () => {
  return (
    <motion.div
      className={classes.mainBodyDesc}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      I am Sambit - a Web and App Developer, Designer and Competitive
      Programmer. I love building simple yet elegant designs, bringing them to
      life using latest frontend technologies and giving them cutting-edge
      functionalities using highly efficient algorithms.
      <br />
      <br /> With each line of code, I strive to make the world a simple,
      beautiful and efficient place.
    </motion.div>
  );
};

export default HomeDesc;
