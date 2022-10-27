import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/amogh-pujari-88b39520b/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          {/* <a href="https://twitter.com/SarveshLimaye05"><TwitterIcon /></a> */}
          <a href="https://github.com/Amogh1812"><GithubIcon /></a>
      </div>
      <p> &copy; Amogh Pujari</p>
    </div>
  );
}

export default Footer;