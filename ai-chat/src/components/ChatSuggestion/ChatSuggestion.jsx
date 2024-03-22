// src/components/ChatSuggestions/ChatSuggestions.jsx
import React from 'react';
import './ChatSuggestion.css';

const ChatSuggestion = ({ onSuggestionSelect }) => {
  const suggestions = ['How are you?', 'What’s the weather today?', 'Tell me a joke'];

  return (
    <div className="chat-suggestion">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="suggestion"
          onClick={() => onSuggestionSelect(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestion;
