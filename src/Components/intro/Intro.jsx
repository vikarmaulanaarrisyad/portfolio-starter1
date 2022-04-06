import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassessimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {themeContext} from '../../Context';
import { useContext } from "react";

const Intro = () => {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{color: darkMode? 'white' : ''}}>Hy! I Am</span>
            <span>Vikar Maulana</span>
            <span>
              Backend Developer with high level of experience in web programmer
              and development framework Laravel, producting the quality work
            </span>
          </div>

          <button className="button i-button">Hire Me</button>

          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Boy} alt="" />
          <img src={Glassessimoji} alt="" />

          <div style={{ top: "-4%", left: "68%" }}>
            <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
          </div>

          <div style={{ top: "18rem", left: "0rem" }}>
            <FloatingDiv
              image={Thumbup}
              txt1="Best Framework Laravel"
              txt2="Award"
            />
          </div>

          {/* blur divs */}
          <div
            className="blur"
            style={{ background: "rgba(238 210 255)" }}
          ></div>
          <div className="blur"
          style={{ 
              background: '#C1F5FF',
              top: '17rem',
              width: '21rem',
              height: '11rem',
              left: '-9rem'
           }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
