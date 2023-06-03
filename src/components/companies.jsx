import  React,  {useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';


const Card = (props) => {
  const {  name, url } = props;
  const [imageSrc , setImageSrc] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
    justifyContent:inView ? 'center' : '',
    display:inView ? 'flex' : '',
    transition: inView? '1.5s':'',
   
  });

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../../public/assets/images/${props.photo}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error('error to load the image:', error);
      }
    };
  
    loadImage();
  }, [props.photo]);
  
  return (
    <animated.div ref={ref} className={`card_container ${inView ? 'in_view' : ''}`} style={slideAnimation}>
      <div className='card_single'>
        <div className='img_and_info'>
        <img src={imageSrc} alt={props.Address} className='img_card' />
        <div className="name">{props.Address}<br></br>
          {props.complement} </div>
       
        <div className="contact">
          {props.contact}<br></br>
          {props.func}
          </div>
      
        </div>
    
      <div className='link_container'>
      <a href={url} className='button'>Veja no Google Maps</a>
      </div>
     
      </div>
    </animated.div>
  );
};

export default Card;
