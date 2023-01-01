import Link from "next/link";
import { FC } from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";

const Header: FC = () => {
  return (
    <motion.header
      className={classes.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <motion.nav>
        <motion.ul>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/blog">Blog</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/dev">Dev</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/algo">Algo</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/about">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/contact">Contact</Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
