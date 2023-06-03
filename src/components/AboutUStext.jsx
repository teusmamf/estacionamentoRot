import React from "react";
import { useSpring, animated } from "react-spring";
import cars from '../assets/images/Shutterstock_248053633-1.png'

const TextoSobreNos = () => {
  const textAnimation = useSpring({
    from: { opacity : 0,transform: "translateY(200px)" },
    to: { opacity : 1,transform: "translateY(0)" },
    config: { duration: 500 },
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <div className="textoSobreNos">

     <animated.div className="imageAnimation" style={imageAnimation}>
        <img src={cars} alt="Imagem de exemplo" />
      </animated.div>

      <animated.div className="textAnimation" style={textAnimation}>
        <h2>Sobre Nós</h2>
        <p>A JM Estacionamentos, atua no mercado desde a inauguração de sua matriz em 2012. Com mais de 10 anos no mercado de Estacionamentos, 
          em especial na área da Saúde, buscamos sempre oferecer as melhores condições para dispor de organização e segurança de pátios e veículos, 
          respectivamente na região de Cascavel. Oferecemos uma proposta de investimento para empreendimentos por meio de parcerias e/ou convênios, 
          dispondo de uma estruturação otimizada e minimalista, cujo objetivo é preservar a imagem do empreendimento do contratante. 
          A fim de garantir comodidade para nossos clientes, operamos com enfoque no gerenciamento do fluxo de movimento e a rotatividade de acordo com a necessidade de nossos contratantes.
        </p>
        
      </animated.div>

      
    </div>
  );
};

export default TextoSobreNos;
