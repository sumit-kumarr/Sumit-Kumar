import React, { useState } from 'react';

const Ai = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <div>
            {/* Other content of the page */}

           <a href='https://tasker-ai.netlify.app/'> <button onClick={toggleChatbot} style={styles.chatbotButton}>
                Chat🤖
            </button></a>

            {isChatbotOpen && (
                <div style={styles.chatbotCard}>
                    <h2>Chatbot</h2>
                    <p>How can I help you today?</p>
                    {/* Chatbot content goes here */}
                </div>
            )}

            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

const styles = {
    chatbotButton: {
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    chatbotCard: {
        position: 'fixed',
        bottom: '150px',
        right: '20px',
        width: '300px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
    },
};

export default Ai;