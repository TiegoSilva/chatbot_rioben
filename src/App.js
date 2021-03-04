import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

//imagens
import promotional_banner from './assets/promotional-banner.jpg'

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
        onClick={() => window.open('https://api.whatsapp.com/send?phone=5521996877625&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20benef%C3%ADcio%proteção%20de%20vidros.', '_self')}
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
    message: 'Sabia que por um valor justo você pode adicionar um benefício na sua proteção veicular e que aqui temos uma solução que vai acabar com seus problemas em caso de algum evento com seus vidros, lentes dos retrovisores e lanternas?',
    trigger: '3'
  },
  {
    id: '3',
    message: 'Então, vi aqui que você AINDA NÃO TEM O BENEFÍCIO DE PROTEÇÃO DE VIDROS...',
    trigger: '4'
  },
  {
    id: '4',
    component: <PromotionalBanner />,
    trigger: '5'
  },
  {
    id: '5',
    message: 'E temos este benefício para você, em caso de quebra ou rachadura das seguintes peças: Faróis, lanternas, Lente do retrovisor, vidros laterais, Para-brisas a partir de R$ 13,99 ',
    trigger: '6'
  },
  {
    id: '6',
    message: 'Os serviços de troca e/ou reparo dos vidros serão executados por empresas referenciadas em todo o Estado do Rio de Janeiro.',
    trigger: '7'
  },
  {
    id: '7',
    message: 'Gostou do benefício Cobertura para seus vidros? Caso você tenha interesse em saber mais ou contratar o benefício, clique no botão abaixo.',
    trigger: '8'
  },

  {
    id: '8',
    options: [
      { value: 1, label: 'Quero contratar agora!', trigger: '9' },
      { value: 2, label: 'Não, obrigado', trigger: '10' },
    ],
    trigger: '9',
  },
  {
    id: '9',
    component: <Ctas />,
    end: true
  },
  {
    id: '10',
    message: "Nós agradecemos a sua atenção. Caso queira entrar em contato conosco, ligue para (21)2421-1608",
    end: true
  },
];


const App = () => (
  <ThemeProvider theme={theme}>
    <ChatBot 
      headerTitle="Assistente virtual Rio Ben - Proteção Veicular"
      steps={steps} 
      style={{width: '80vw', height: '600px', marginLeft: '10vw', marginTop: '5vh'}}
      botDelay={3000}
      botAvatar={require('./assets/avatar.png')}
    />
  </ThemeProvider>
);

export default App;