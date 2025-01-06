import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './Chatbot.css';

// Define the steps for the chatbot
const steps = [
  {
    id: '1',
    message: 'Welcome to Eazy-Mart! How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'products', label: 'Show me products', trigger: '3' },
      { value: 'cart', label: 'View my cart', trigger: '4' },
      { value: 'contact', label: 'Contact support', trigger: '5' },
    ],
  },
  {
    id: '3',
    message: 'You can view our products on the Home page.',
    end: true,
  },
  {
    id: '4',
    message: 'You can view your cart by clicking on the Cart button.',
    end: true,
  },
  {
    id: '5',
    message: 'You can contact support at support@eazy-mart.com.',
    end: true,
  },
];

// Define the theme for the chatbot
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#00bfff',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00bfff',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const minimizeChatbot = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className={`chatbot-wrapper ${isMinimized ? 'minimized' : ''}`}>
          <div className="chatbot-header">
            <button onClick={minimizeChatbot} className="chatbot-minimize-btn">
              {isMinimized ? '▲' : '▼'}
            </button>
            <button onClick={toggleChatbot} className="chatbot-close-btn">
              ✖
            </button>
          </div>
          {!isMinimized && (
            <ThemeProvider theme={theme}>
              <ChatBot steps={steps} />
            </ThemeProvider>
          )}
        </div>
      )}
      {!isOpen && (
        <button onClick={toggleChatbot} className="chatbot-open-btn">
          Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;