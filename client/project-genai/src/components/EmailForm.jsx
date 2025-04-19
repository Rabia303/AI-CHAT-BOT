import { useState } from 'react';
import axios from 'axios';

const EmailForm = ({ chatText }) => {
  const [email, setEmail] = useState('');

  const handleSend = async () => {
    try {
      await axios.post('http://localhost:5000/api/email/send', {
        to: email,
        subject: 'Your Dr. AI Chat Summary',
        text: chatText,
      });
      alert('Chat sent via email!');
      setEmail('');
    } catch (err) {
      console.error(err);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="mt-4">
      <input
        className="border p-2 mr-2 rounded"
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSend} className="bg-green-500 text-white px-4 py-1 rounded">
        📧 Send Chat
      </button>
    </div>
  );
};

export default EmailForm;
