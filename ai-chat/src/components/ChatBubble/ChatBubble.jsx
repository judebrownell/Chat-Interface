import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ message, isOwnMessage }) => {
  return (
    <div className={`chat-bubble ${isOwnMessage ? 'own-message' : ''}`}>
      {message}
    </div>
  );
};

export default ChatBubble;