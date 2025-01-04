import React, { useState } from 'react';
import { generateContent } from './geminiService';

const GeminiChat = () => {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await generateContent(inputValue);
            setResponse(result.text || 'No response received.');
        } catch (error) {
            setResponse('An error occurred while fetching the response.');
        }
    };

    return (
        <div className="section gemini-chat-section">
            <h2>Gemini Chat</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
            <div className="response-section">
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default GeminiChat;
