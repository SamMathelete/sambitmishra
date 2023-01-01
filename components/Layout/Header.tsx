import Link from "next/link";
import { FC, useState } from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";
import { SwipeableDrawer } from "@mui/material";

const Header: FC = () => {
  const [drawer, setDrawer] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawer(open);
    };
  return (
    <>
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
      <header className={classes.mobileHeader}>
        {/*menu button*/}
        <button className={classes.menuBtn} onClick={toggleDrawer(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <SwipeableDrawer
          anchor="top"
          open={drawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          className={classes.drawer}
        >
          <motion.ul>
            <motion.li
              onClick={toggleDrawer(false)}
              whileHover={{ scale: 1.1 }}
            >
              <Link onClick={toggleDrawer(false)} href="/">
                Home
              </Link>
            </motion.li>
            <motion.li
              onClick={toggleDrawer(false)}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/blog">Blog</Link>
            </motion.li>
            <motion.li
              onClick={toggleDrawer(false)}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/dev">Dev</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link onClick={toggleDrawer(false)} href="/algo">
                Algo
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link onClick={toggleDrawer(false)} href="/about">
                About
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link onClick={toggleDrawer(false)} href="/contact">
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </SwipeableDrawer>
      </header>
    </>
  );
};

export default Header;
