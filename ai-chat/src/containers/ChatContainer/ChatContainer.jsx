// src/containers/ChatContainer/ChatContainer.jsx
import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import ChatInput from '../../components/ChatInput/ChatInput';
import ChatSuggestion from '../../components/ChatSuggestion/ChatSuggestion';
import './ChatContainer.css';

const ChatContainer = () => {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const handleSendMessage = (newMessage) => {
        setMessages(messages => [...messages, { text: newMessage, isOwn: true }]);
        // Scroll logic moved to the effect below
    };

    useEffect(() => {
        if (messages.length) {
            // Only scroll if there are messages, and do so after the state update completes
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages.length]);  // Depend on messages.length to trigger scroll only when a new message is added

    return (
        <div className="chat-container">
            <ChatBubble message="Hello Stranger!" isOwnMessage={false} />
            <ChatBubble message="I am the coolest AI, how can I help you today?" isOwnMessage={false} />
            {messages.map((message, index) => (
                <ChatBubble key={index} message={message.text} isOwnMessage={message.isOwn} />
            ))}
            <div ref={messagesEndRef} />
            <ChatSuggestion onSuggestionSelect={handleSendMessage} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatContainer;
