import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'



const Works = () => {
  return (
    <div className='works'>
        <div className="awesome">
            <span>My Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Incidunt obcaecati culpa expedita possimus blanditiis aut ratione sit vitae labore sapiente. <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit text of plinting
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit text of plinting
            </span>

            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiver} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>

            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works
