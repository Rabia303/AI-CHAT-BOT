import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import VoiceInput from '../components/VoiceInput';
import EmailForm from '../components/EmailForm';
import ExportChat from '../components/ExportChat';
import '/src/App.css'; // Make sure this is imported

const ChatPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const speakText = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
  };

  const typeResponse = (text) => {
    let idx = 0;
    setMessages((prev) => [...prev, { from: 'ai', text: '' }]);
    const timer = setInterval(() => {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1].text = text.slice(0, idx + 1);
        return copy;
      });
      idx++;
      if (idx === text.length) {
        clearInterval(timer);
        speakText(text);
      }
    }, 30);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post('http://localhost:5000/api/ai/generate', {
        message: input,
      });
      typeResponse(res.data.response);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Check your server.');
    }
  };

  return (
    <div className="container">
      <h1>🧠 Dr. AI – Smart Health Assistant</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.from === 'user' ? 'user' : 'ai'}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a medical question..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <VoiceInput
        setInput={setInput}
        onSend={(voiceText) => {
          setInput(voiceText);
          setTimeout(() => sendMessage(), 300);
        }}
      />

      <div className="export-email">
        <EmailForm
          chatText={messages
            .map((m) => `${m.from.toUpperCase()}: ${m.text}`)
            .join('\n')}
        />
        <ExportChat messages={messages} />
      </div>
    </div>
  );
};

export default ChatPage;
