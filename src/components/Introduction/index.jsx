import React,{useState} from 'react';
import "./intro.css";
import gurachan from "../../assets/gwr.jpeg";
import gurachanAnimation from "../../assets/gwr.gif";
const Instroduction = () => {
  const [isTimeForAnime,setIsTimeForAnime] = useState(true);
  const setImage = ()=>{
    if(isTimeForAnime) return setIsTimeForAnime(false);
    setIsTimeForAnime(true);
  } 
  return (
    <div className='intro' >
      <div className='intro-left'>
        <div className="intro-left-wrapper">
          <h2 className='introduction'>Hello , My name is </h2>
          <h1 className='intro-name' style={{transitionDelay:'0.1s',animation:isTimeForAnime?'none':'vibration 0.1s'}}><span className='blue-line'>Ryugen</span> XD</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Ningen !</div>
              <div className="intro-title-item">FullStack Web Developer</div>
              <div className="intro-title-item">Junior Bughunter</div>
              <div className="intro-title-item">Junior Game Dev 2D</div>
              <div className="intro-title-item">I'm Man</div>
            </div>
          </div>
          <div className="intro-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Sunt assumenda doloremque dicta asperiores optio rem nobis quia recusandae numquam.
            Iure cumque at vel natus impedit voluptatem animi eaque quaerat repellat?
          </div>
          <div className="button-wrapper">
            <button className='button-animation' onClick={setImage} style={{backgroundColor:isTimeForAnime?'#0c6cda':'#df000f',boxShadow:isTimeForAnime?'inset -3px -3px 3px rgb(045, 045, 045),0.3px 0.3px 0.4px white':'-3px -3px 3px rgb(045, 045, 045),0.3px 0.3px 0.4px rgb(045, 045, 045)'}}>{isTimeForAnime?'Play':'Stop'}</button>
            <a className='visit-my-github' href='https://github.com/ryugenxd'><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className="intro-background"></div>
        <img  src={isTimeForAnime?gurachan:gurachanAnimation} alt="gura-chan" className="intro-image" />
      </div>
    </div>
  )
};

export default Instroduction;