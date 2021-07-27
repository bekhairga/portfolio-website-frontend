import React from "react";
import styled from "styled-components";
import Particle from "../components/Particles";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>Hi, I'm <span>BekhaIrga</span></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          commodi expedita harum impedit nemo nihil.
        </p>
        <div className="icons">
          <a href='https://facebook.com' className="icon i-facebook" target='_blank'>
            <FacebookIcon />
          </a>
          <a href='https://facebook.com' className="icon i-github" target='_blank'>
            <GithubIcon />
          </a>
          <a href='https://facebook.com' className="icon i-youtube" target='_blank'>
            <YoutubeIcon />
          </a>
          <a href='https://facebook.com' className="icon i-instagram" target='_blank'>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography{
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .icons{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      .icon{
        border: 2px solid var(--border-color);
        border-radius: 50%;
        display: flex;
        cursor: pointer;
        transition: all .4s ease-in-out;
        &:hover{
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child){
          margin-right: 1rem;
        }
        svg{
          margin: 0.5rem;
        }
        &.i-youtube:hover{
          border: 2px solid #FF0000;
          color: #FF0000;
        }
        &.i-facebook:hover{
          border: 2px solid #4267B2;
          color: #4267B2;
        }
        &.i-instagram:hover{
          border: 2px solid #8a3ab9;
          color: #8a3ab9;
        }
        &.i-github:hover{
          border: 2px solid #fff;
          color: #fff;
        }
      }
    }
  }
`;
export default HomePage;
