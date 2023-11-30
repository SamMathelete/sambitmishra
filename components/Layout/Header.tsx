import Link from "next/link";
import { FC, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";
import { SwipeableDrawer } from "@mui/material";
import headerlogo from "../../assets/Group 2.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Header: FC = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  const showLogoStatus = currentPage !== "/";
  const [showLogo, setShowLogo] = useState<boolean>(showLogoStatus);

  useEffect(() => {
    if (router.pathname !== '/') {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
    if (typeof window !== undefined && router.pathname === '/') {
      window.addEventListener("scroll", () => {
        setShowLogo(window.scrollY > 400);
      })
    }
  }, [router])

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
              <Link href="/notes">Notes</Link>
            </motion.li>
            <div className={`${classes.headerlogo} ${showLogo && classes.hlshow}`}>
            <Image src={headerlogo} alt="Header Logo" style={{
              width: "100%",
              height: "100%"
            }} />
            </div>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/works">Works</Link>
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
        <button className={classes.menuBtn} onClick={toggleDrawer(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={classes.menusvg}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className={`${classes.mobileheaderlogo} ${showLogo && classes.hlshow}`}>
            <Image src={headerlogo} alt="Header Logo" style={{
              width: "100%",
              height: "100%"
            }} />
        </div>
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
              <Link href="/notes">Notes</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link onClick={toggleDrawer(false)} href="/works">
                Works
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
