import React from 'react'
import './contact.css' 
const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-background'></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">
                    Contact Me
                </h1>
                <div className="contact-info">
                    <div className="contact-info-item">
                    <i className='fa-solid fa-phone contact-icon'></i>
                    +62-0800-0000-0000
                    </div>
                    <div className="contact-info-item">
                    <i className="fa-solid fa-location-dot contact-icon"></i>
                    Central Indonesia
                    </div>
                    <div className="contact-info-item">
                    <i className="fa fa-envelope contact-icon"></i>
                    ryugen@mail.com
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <p className="contact-description">
                    <b>Lorem, ipsum.</b>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Beatae molestias quas nam cum qui eligendi.
                </p>
                <form>
                    <input type="email"  placeholder='email' />
                    <input type="text"  placeholder='name' />
                    <input type="text"  placeholder='subject' />
                    <textarea rows="5" placeholder='message'/>
                    <button className='button-submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact