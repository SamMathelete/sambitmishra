import TextBox from "../../components/UI/TextBox";
import { motion } from "framer-motion";

const AboutPage = () => {
  const about = (
  <div>
    Hi!
    <br /><br />
    I am Sambit Mishra, a 3rd Year Undergraduate Student at IIT Bhubaneswar. 
    <br /><br /> 
    I build beautiful and fully functional Websites and Apps using ReactJS, React Native, NodeJS and Firebase.
     I am also a Competitive Algorithmic Programmer and an Electronics and Communications Engineer. I love to solve Maths and Engineering Problems.
     <br /><br />
      Let&apos;s connect and hope that we will make a difference together!
  </div>
  )
  return (
    <motion.div
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition= {{
        delay: 0.5,
        duration: 1
      }}
    >
      <TextBox title="About Me" desc={about} />
    </motion.div>
  );
};

export default AboutPage;
