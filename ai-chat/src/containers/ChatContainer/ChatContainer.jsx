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
    };

    useEffect(() => {
        if (messages.length) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages.length]);

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
