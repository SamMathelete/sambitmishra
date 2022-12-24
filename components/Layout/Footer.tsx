import Image from "next/image";
import { FC } from "react";
import classes from "./Footer.module.css";
import linkedin from "../../assets/LinkedIn.png";
import github from "../../assets/Github.png";
import twitter from "../../assets/Twitter.png";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className={classes.mainDiv}>
      <div className={classes.subDiv}>
        <Link href="https://www.linkedin.com/in/thesambitmishra/">
          <Image className={classes.image} src={linkedin} alt="LinkedIn" />
        </Link>
        <div className={classes.text}>
          <Link href="https://www.linkedin.com/in/thesambitmishra/">
            thesambitmishra
          </Link>
        </div>
      </div>
      <div className={classes.subDiv}>
        <Link href="https://github.com/SamMathelete">
          <Image className={classes.image} src={github} alt="Github" />
        </Link>
        <div className={classes.text}>
          <Link href="https://github.com/SamMathelete">SamMathelete</Link>
        </div>
      </div>
      <div className={classes.subDiv}>
        <Link href="https://twitter.com/thesambitmishra">
          <Image className={classes.image} src={twitter} alt="Twitter" />
        </Link>
        <div className={classes.text}>
          <Link href="https://twitter.com/thesambitmishra">
            thesambitmishra
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
