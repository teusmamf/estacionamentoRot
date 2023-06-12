import React, { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring';
import checkIcon from '../../public/assets/images/check_icon.png'
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const slideAnimation = useSpring({
    to: {
      opacity: showDiv ? 1 : 0,
      transform: showDiv ? 'translateX(0)' : 'translateX(100%)',
    },
    config: {
      duration: 500
    }
  });

  useEffect(() => {
    setShowDiv(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const requestData = {
      name,
      email,
      subject,
      description
    };

    try {
      // Envie o e-mail
      await axios.post('https://back-end-teusmamf.vercel.app/send_email', requestData);
      setConfirmation(true);
      console.log('E-mail enviado com sucesso!');

      // Resetar a confirmação após 3 segundos
      setTimeout(() => {
        setConfirmation(false);
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }

    limparFormulario();
  };

  const limparFormulario = () => {
    setName("");
    setEmail("");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} id="form_contact_us">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          className="input_email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="subject">Assunto:</label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          <option value="">Selecione um assunto</option>
          <option value="Convênio">Convênio</option>
          <option value="Parceria">Parceria</option>
          <option value="Mensalidade">Mensalidade</option>
          <option value="Selos">Selos</option>
          <option value="Assunto 3">Outros</option>
        </select>
        <br />
        <label htmlFor="description" className="description">Descrição:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">Enviar</button>
        {confirmation && (
          <div><span className="confirmation_email">Email enviado!</span> 
            <img src={checkIcon} alt="check_icon" className="check_icon"/>
          </div>
        )}
      </form>

      <animated.div className="let_get_in_touch" style={slideAnimation}>
        <h3>Entre em contato</h3>
        <svg
          fill="#5c0101"
          height="800px"
          width="800px"
          className="img_contact_us"
          version="1.1"
          id="Filled_Icons"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          enableBackground="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <g id="Contact-Us-Filled">
            <path d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z" />
          </g>
        </svg>
      </animated.div>
    </div>
  );
};

export default ContactForm;
