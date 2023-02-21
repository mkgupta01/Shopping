import './Hero.css'
import heroimg from '../../assests/heroimg.png'
// src\assests\heroimg.png

function Hero(props){
    return(
        <div className="hero">
            <h2>{props.title}</h2>
            <p>{props.tagline}</p>
            <img src={heroimg} alt="" />
        </div>
    );
}

export default Hero;