import React from "react";
import styled from "styled-components";
import { GitHub } from "@material-ui/icons";
import { Pinterest } from "@material-ui/icons";

const Menu = ({ menuItem }) => {
  return (
    <MenuStyled>
      {menuItem.map((item) => (
        <div className="grid-item" key={item.id}>
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <ul>
                <li>
                  <a href={item.link1}>
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a href={item.link2}>
                    <Pinterest />
                  </a>
                </li>
              </ul>
            </div>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  .grid-item {
    .portfolio-content {
      display: block;
      height: 100%;

      .portfolio-image-container {
        height: 250px;
        position: relative;

        ul {
          position: absolute;
          left: 50%;
          top: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translate(-50%, 50%);
          transition: all 0.4s ease-in-out;

          li {
            background-color: var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            margin: 0 0.5rem;
          }

          svg {
            display: block;
            font-size: 2rem;
          }
        }

        &:hover {
          ul {
            opacity: 1;
            transform: translate(-50%, -50%);
          }

          .portfolio-image::before {
            transform: scale(1);
          }
        }

        .portfolio-image {
          img {
            width: 100%;
            height: 220px;
            object-fit: cover;
          }

          &::before {
            content: "";
            position: absolute;
            left: 2%;
            top: 2%;
            height: 84.5%;
            width: 96%;
            background-color: var(--white-color);
            opacity: 0.9;
            transform-origin: left top;
            transform: scale(0);
            transition: all 0.4s ease-in-out;
          }
        }
      }

      h6 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Menu;
