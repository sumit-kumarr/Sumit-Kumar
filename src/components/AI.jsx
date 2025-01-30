import React, { useState } from 'react';
import axios from 'axios';

const Ai = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Welcome to Sanchalak , How can I help you today?', isBot: true }
    ]);
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSend = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { text: input, isBot: false }];
        setMessages(newMessages);
        setInput('');

        // Simulate bot response using a mock API
        try {
            const response = await axios.post('https://mockapi.io/projects/3bbefa6eeb444a41830df6d799bd9258', {
                message: input
            });
            const botResponse = response.data.reply || getMockResponse(input);
            setMessages([...newMessages, { text: botResponse, isBot: true }]);

            // Handle specific commands
            if (input.toLowerCase().includes('create task')) {
                createTask(input);
            } else if (input.toLowerCase().includes('save task')) {
                saveTask(input);
            } else if (input.toLowerCase().includes('delete task')) {
                deleteTask(input);
            } else if (input.toLowerCase().includes('share task')) {
                shareTask(input);
            } else if (input.toLowerCase().includes('close this website')) {
                window.close();
            }
        } catch (error) {
            console.error('Error getting response from mock API:', error);
            setMessages([...newMessages, { text: 'Sorry, something went wrong.', isBot: true }]);
        }
    };

    const getMockResponse = (userInput) => {
        // Simple mock logic for demonstration
        if (userInput.toLowerCase().includes('create task')) {
            return 'Sure, I can help you create a task. What is the task name?';
        } else if (userInput.toLowerCase().includes('save task')) {
            return 'Task saved successfully!';
        } else if (userInput.toLowerCase().includes('delete task')) {
            return 'Task deleted successfully!';
        } else if (userInput.toLowerCase().includes('share task')) {
            return 'Task shared successfully!';
        } else {
            return 'I am not sure how to help with that. Can you please rephrase?';
        }
    };

    const createTask = (input) => {
        const taskName = input.replace('create task', '').trim();
        if (taskName) {
            setTasks([...tasks, { name: taskName }]);
            setMessages([...messages, { text: `Task "${taskName}" created successfully!`, isBot: true }]);
        } else {
            setMessages([...messages, { text: 'Please provide a task name.', isBot: true }]);
        }
    };

    const saveTask = (input) => {
        // Implement save task logic here
        setMessages([...messages, { text: 'Task saved successfully!', isBot: true }]);
    };

    const deleteTask = (input) => {
        const taskName = input.replace('delete task', '').trim();
        const updatedTasks = tasks.filter(task => task.name !== taskName);
        setTasks(updatedTasks);
        setMessages([...messages, { text: `Task "${taskName}" deleted successfully!`, isBot: true }]);
    };

    const shareTask = (input) => {
        const taskName = input.replace('share task', '').trim();
        // Implement share task logic here
        setMessages([...messages, { text: `Task "${taskName}" shared successfully!`, isBot: true }]);
    };

    return (
        <div>
            <button onClick={toggleChatbot} style={styles.chatbotButton}>
                Chat🤖
            </button>

            {isChatbotOpen && (
                <div style={styles.chatbotCard}>
                    <h2>Chatbot</h2>
                    <div style={styles.chatbotMessages}>
                        {messages.map((msg, index) => (
                            <div key={index} style={msg.isBot ? styles.botMessage : styles.userMessage}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        style={styles.chatbotInput}
                        placeholder="Type your message..."
                        className='text-black'
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSend();
                            }
                        }}
                    />
                    <button onClick={handleSend} style={styles.sendButton}>Send</button>
                </div>
            )}
        </div>
    );
};

const styles = {
    chatbotButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    chatbotCard: {
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '400px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '10px'
    },
    chatbotMessages: {
        maxHeight: '200px',
        overflowY: 'auto',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        color: 'black'
    },
    botMessage: {
        backgroundColor: '#f1f1f1',
        padding: '5px',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    userMessage: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '5px',
        borderRadius: '5px',
        marginBottom: '5px',
        textAlign: 'right'
    },
    chatbotInput: {
        width: 'calc(100% - 60px)',
        padding: '5px',
        marginRight: '5px'
    },
    sendButton: {
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
    }
};

export default Ai;