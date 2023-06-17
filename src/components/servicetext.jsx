import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import wallpaper from '../../public/assets/images/parking (1).png';
import wallpaper2 from '../../public/assets/images/camera-de-seguranca.png'
import wallpaper3 from '../../public/assets/images/employees (1).png'

const ServicesText = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true, // A animação só será acionada uma vez
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // A animação só será acionada uma vez
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // A animação só será acionada uma vez
  });

  const textAnimation1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? "translateY(0)" : "translateY(20px)",
    config: { duration: 1000 },
  });

  const textAnimation2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translateY(0)" : "translateY(20px)",
    config: { duration: 1000 },
  });

  const textAnimation3 = useSpring({
    opacity: inView3 ? 1 : 0,
    
    transform: inView3 ? "translateY(0)" : "translateY(20px)",
    config: { duration: 1000 },
  });

  return (
    <div className="services-text">
        <h1>Serviços</h1>
      <animated.div ref={ref1} style={textAnimation1} className="service-texts">
         <p className="text_single_service">Um dos maiores diferenciais de nossa empresa, é a busca pelas melhores condições operacionais do mercado, visando a melhor gestão do negócio. 
            Diante dessa perspectiva, é válido salientar que atualmente conseguimos trabalhar com sistemas POS de impressão térmica que nos permite um controle preciso do pátio, 
            onde é possível saber a quantidade de veículos no pátio, o horário de entrada e o valor gerado no momento de saída. 
            Contamos também com um conjunto de cancelas, onde utilizamos principalmente em espaços o qual há grande fluxo de veículos durante o dia, 
            mas também em ambientes onde há uma entrada e saída separada, pois assim podemos proporcionar um maior controle sobre o pátio e sobre 
            eventuais entraves. 
        </p>
      <img src={wallpaper} className="service_img" alt="car_icon" />
      </animated.div>
      <animated.div ref={ref2} style={textAnimation2} className="service-texts">
      <img src={wallpaper2} alt="car_icon" />
        <p>Outro serviço crucial para o desenvolvimento de nossas atividades é o sistema de videomonitoramento 24 horas que, com o auxílio de câmeras 360º, nos possibilita a visualização em tempo real e em caso de necessidade, gravadas do ambiente.
            Na parte estrutural é imensurável as capacidades que possuímos de evolução de nosso negócio. Este fator é muito relevante e um diferencial que pode ser visualizado pelo alcance de nosso serviço pela cidade. Nessa questão, nem sempre trabalhamos 
            com algo já consolidado e em grande maioria, 
            somos responsáveis pela reforma e construção de um ambiente propicio para atuarmos. 
            É razoável dizermos que conforme a negociação, podemos dispor de um projeto de guarita para alocar o funcionário, sistemas de portões eletrônicos, prestação de serviços de pintura, iluminação, revitalização dentre outras.
        </p>
        
      </animated.div>
      <animated.div ref={ref3} style={textAnimation3} className="service-texts">
        <p>Um ponto importante a se ressaltar, é com relação a nossa equipe de funcionários. 
          Aqui todos são capacitados para exercerem suas respectivas funções, desde o cuidado com o 
          ambiente pela limpeza e organização até o relacionamento com o cliente final com o intuito de garantirem um serviço para além de excelente, 
          fato esse que auxilia constantemente no desempenho de nossa empresa. </p>
          <img src={wallpaper3} alt="car_icon_3" />
      </animated.div>
    </div>
  );
};

export default ServicesText;
