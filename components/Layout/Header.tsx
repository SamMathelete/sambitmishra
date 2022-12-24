import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import classes from "./Header.module.css";

const Header: FC = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li className={classes.active}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/dev">Dev</Link>
          </li>
          <li>
            <Link href="/algo">Algo</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
