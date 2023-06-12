import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from "react-spring";
import image1 from "../../public/assets/images/Home.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideItem = ({ image, caption }) => (
  <div>
    <img src={image} alt={caption} />
    <h3>{caption}</h3>
  </div>
);
//9993-> para colocar no botao 
const SliderComponent = () => {
  const [estabelecimentos, setEstabelecimentos] = useState(0);
  const [vagas , setVagas] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setEstabelecimentos((prevEstabelecimentos) => {
        if (prevEstabelecimentos >= 10) {
          clearInterval(timer);
          return 10;
        } else {
          return prevEstabelecimentos + 1;
        }
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setVagas((prevVagas) => {
        if (prevVagas >= 683) {
          clearInterval(timer);
          return 683;
        } else {
          return prevVagas + 1;
        }
      });
    }, 8);

    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    fade: true,
    adaptiveWitdth: true,
    centerPadding: '0%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '0%',
        },
      },
    ],
  };

  const Animation = useSpring({
    opacity: 1,
    from: { opacity: 0},
    to: { opacity: 1},
    config: { duration: 1000 },
  });

  const slideItems = [
    {
      image: image1,
      caption: '',
    }
  ];

  return (
    <div style={{ position: 'relative' }} className="teste">
      <Slider {...settings}>
        {slideItems.map((item, index) => (
          <div
            key={index}
            style={{ display: 'flex', justifyContent: 'center', height: '200px', padding: 0, backgroundColor: 'black', position: 'relative' }}
          >
            <img
              className="images_home"
              src={item.image}
              alt={item.caption}
              style={{objectFit: 'cover' ,maxWidth:'100%',maxHeight:'80%'}}
            />
            <h3>{item.caption}</h3>
          </div>
        ))}
      </Slider>
      
      <animated.div style={Animation}>
        <div className="info-overlay">
          <h1>{estabelecimentos}<br />Estacionamentos</h1>
          <h1>{vagas}<br/>Vagas</h1>
          <h1>500+<br></br>Convênios</h1>
        </div>
      </animated.div>
    </div>
  );
};

export default SliderComponent;
