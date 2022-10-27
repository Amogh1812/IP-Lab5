import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Amogh Pujari</h2>
        <div className="prompt">
          <p>A front end  developer and socialMedia manager </p>
         <a href="https://www.linkedin.com/in/amogh-pujari-88b39520b/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          <a href="mailto:amoghp44@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/Amogh1812"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM,
               BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
           <li className="item">
            <h2>Social media handling</h2>
            <span>
             social media marketing, handling social accounts 
            </span>
          </li> 
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C,C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;