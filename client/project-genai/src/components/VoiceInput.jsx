import { useEffect } from 'react';

const VoiceInput = ({ setInput, onSend }) => {
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';


    const micBtn = document.getElementById('start-voice');
    if (micBtn) {
      micBtn.addEventListener('click', () => {
        recognition.start();
      });
    }
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("🎙️ Voice recognized:", transcript); // ✅ Check this in browser console
      setInput(transcript);
      if (onSend) onSend(transcript);
    };
    

    return () => {
      if (micBtn) micBtn.removeEventListener('click', () => recognition.start());
    };
  }, [setInput, onSend]);

  return (
    <button id="start-voice" className="mt-2 bg-purple-600 text-white px-4 py-1 rounded">
      🎙️ Speak
    </button>
  );
};

export default VoiceInput;
