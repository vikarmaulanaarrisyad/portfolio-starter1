import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className='services'>

        {/* left side */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Incidunt obcaecati culpa expedita possimus blanditiis aut ratione sit vitae labore sapiente.
          </span>
          <a href={Resume} download>
          <button className="button s-button">Download CV</button>

          </a>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards"> 
          <div style={{ left: '14rem' }}>
            <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail= {"Figma, Photoshop and CorelDraw"}
            />
          </div>

          {/* second card */}
          <div style={{ top: '12rem', left: '-4rem' }}> 
            <Card
              emoji = {Glasess}
              heading = {'Developer'}
              detail = {'Html, CSS, Javascript, Vue, React and Laravel'}
            />
          </div>

          {/* 3rd */}
          <div style={{ top: '19rem', left: '12rem' }}>
            <Card
              emoji={Humble}
              heading={'UI/UX'}
              detail={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit'
              }
            />
          </div>
        </div>
    </div>
  )
}

export default Services
