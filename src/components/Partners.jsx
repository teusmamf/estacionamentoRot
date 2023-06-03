import React, { useEffect, useState } from "react";
import { useInView, useSpring, animated } from "react-spring";

const PartnerCard = (props) => {
  const [imgSrc, setImageSrc] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)",
    justifyContent: inView ? "center" : "",
    display: inView ? "flex" : "",
    transition: inView ? "1.5s" : "",
  });

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../assets/images/Partners/${props.photo}`);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Erro ao carregar a imagem:", error);
      }
    };

    loadImage();
  }, [props.photo]);

  return (
    <animated.div className="partner_card" ref={ref} style={slideAnimation}>
      <div className="partner-logo">
        <img src={imgSrc} alt={props.name} className="partner_image" />
      </div>
    </animated.div>
  );
};

export default PartnerCard;
