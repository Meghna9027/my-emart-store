import React from "react";
import "./About.css";
import { Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://avatars.githubusercontent.com/u/96099699?v=4"
              alt="Founder"
            />
            <Typography>Meghna Singh</Typography>
            <span>
              This is a sample website made by @meghnasingh.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact Us</Typography>
            <a
              href="https://www.linkedin.com/in/meghna-singh-766348224/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://twitter.com/MeghnaS56899419" target="blank">
              <TwitterIcon className="twitterSvgIcon" />
            </a>

            <a href="https://github.com/Meghna9027" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;