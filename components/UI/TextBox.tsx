import { FC } from "react";
import styles from "./TextBox.module.css";
import Image from "next/image";
import SambitImage from "../../assets/sambit.jpg";

interface Props {
    title: string,
    desc: string,
    titleClassName?: string,
    boxClassName?: string,
    descClassName?: string,
    textBoxClassName?: string,
    imgBoxClassName?: string
};

const TextBox: FC<Props> = ({ title, desc, boxClassName, titleClassName, descClassName, textBoxClassName, imgBoxClassName }) => {
    return(
        <div className={boxClassName ? boxClassName : styles.box}>
            <div className={imgBoxClassName ? imgBoxClassName : styles.imgBox}>
                <Image src={SambitImage} alt="Me!" style={{
                    height: "auto",
                    maxWidth: "100%",
                    borderRadius: "50%"
                }} />
            </div>
            <div className={textBoxClassName ? textBoxClassName : styles.textBox}>
                <div className={titleClassName ? titleClassName : styles.title}>{title}</div>
                <div className={descClassName ? descClassName : styles.desc}>{desc}</div>
            </div>
        </div>
    )
};

export default TextBox;