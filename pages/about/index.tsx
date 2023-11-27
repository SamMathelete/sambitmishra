import TextBox from "../../components/UI/TextBox";

const AboutPage = () => {
  const about = (
  <div>
    Hi! I am Sambit Mishra, a 3rd Year Undergraduate Student at IIT Bhubaneswar. 
    <br /><br /> 
    I build beautiful and fully functional Websites and Apps using ReactJS, React Native, NodeJS and Firebase.
     I am also a Competitive Algorithmic Programmer and an Electronics and Communications Engineer. I love to solve Maths and Engineering Problems.
     <br /><br />
      Let's connect and hope that we will make a difference together!
  </div>
  )
  return (
    <div>
      <TextBox title="About Me" desc={about} />
    </div>
  );
};

export default AboutPage;
