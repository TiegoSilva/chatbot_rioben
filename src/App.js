import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

//imagens
import promotional_banner from './assets/promotional-image.png'

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Tahoma',
  headerBgColor: '#6a99b2',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6a99b2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const PromotionalBanner = () => { 
  return (
    <img 
      src={promotional_banner} 
      alt="Imagem promocional" 
      style={{width: 270, height: 270}} />
  )
}

const Ctas = () => {
  return(
      <button 
        style={{backgroundColor: '#6a99b2', color: '#fff', padding: 12, borderRadius: 24, border: 'none'}} 
        onClick={() => window.open('https://api.whatsapp.com/send?phone=5521996877625&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20benef%C3%ADcio%20carro%20reserva.', '_self')}
      >
          Falar com atendente pelo WhatsApp!
      </button>
    )
}

const steps = [
  {
    id: '1',
    message: 'Olá, Caro Associado (a)! Sou a atendente virtual da Rio Ben Proteção Veicular sua Associação de Benefícios.',
    trigger: '2'
  },
  {
    id: '2',
    message: 'Sabia que se você tiver um roubo, furto, colisão ou perda total(PT), você poderá NÃO ficar sem carro?',
    trigger: '3'
  },
  {
    id: '3',
    message: 'Então, vi aqui que você AINDA NÃO TEM O BENEFÍCIO DE CARRO RESERVA...',
    trigger: '4'
  },
  {
    id: '4',
    component: <PromotionalBanner />,
    trigger: '5'
  },
  {
    id: '5',
    message: 'E temos este benefício para você, que possui duas formas de contratação:',
    trigger: '6'
  },
  {
    id: '6',
    message: 'Carro reserva 15 dias ou 30 dias, onde você terá um veículo disponível nestes períodos.',
    trigger: '7'
  },
  {
    id: '7',
    message: 'Você com um carro novinho a sua disposição, com quilometragem livre, entrega e retirada de veículo delivery e a comodidade que só este beneficio lhe proporcionará; já pensou nisso? Uau será incrível!',
    trigger: '8'
  },
  {
    id: '8',
    message: 'Gostou do benefício Carro Reserva? Caso você tenha interesse em saber mais ou contratar o benefício, clique no botão abaixo.',
    trigger: '9'
  },
  {
    id: '9',
    options: [
      { value: 1, label: 'Quero contratar agora!', trigger: '10' },
      { value: 2, label: 'Não, obrigado', trigger: '11' },
    ],
    trigger: '10',
  },
  {
    id: '10',
    component: <Ctas />,
    end: true
  },
  {
    id: '11',
    message: "Nós agradecemos a sua atenção. Caso queira entrar em contato conosco, ligue para (21)2421-1608",
    end: true
  },
];


const App = () => (
  <ThemeProvider theme={theme}>
    <ChatBot 
      headerTitle="Assistente virtual Rio Ben - Proteção Veicular"
      steps={steps} 
      style={{width: '80vw', height: '700px', marginLeft: '10vw', marginTop: '5vh'}}
      botDelay={3000}
      botAvatar={require('./assets/avatar.png')}
    />
  </ThemeProvider>
);

export default App;