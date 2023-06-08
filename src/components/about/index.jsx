import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
          <div className='about-card background-shadow'></div>
          <div className="about-card">
            <img src="https://i.kym-cdn.com/photos/images/original/001/920/308/85b.gif" alt="imggwgwg" className="about-image" />
          </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tempora laboriosam distinctio in molestiae nostrum neque perspiciatis?
          </p>
          <p className="about-decription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quo incidunt, expedita sed unde architecto libero 
            perferendis earum maxime provident error cupiditate quos ratione dicta autem tempore assumenda maiores voluptatem. 
            Asperiores ipsam optio eaque quaerat officia voluptatibus natus quam repellendus doloremque in architecto,
            unde earum, minima consequatur nemo dolores nobis?
          </p>
          <div className="about-award">
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/2054520/capsule_616x353.jpg" alt="award-img" className='about-award-image' />
            <div className="about-award-texts">
              <h4 className='about-award-title'>Lorem ipsum dolor sit amet.</h4>
              <div className="about-award-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eum ad illum facilis recusandae sapiente, accusantium impedit.
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About