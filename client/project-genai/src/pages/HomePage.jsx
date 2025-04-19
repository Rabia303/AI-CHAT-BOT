// client/src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Meet Dr. AI – Your Smart Health Assistant</h1>
        <p className="text-lg mb-6">Ask medical questions anytime. Get AI-powered answers instantly.</p>
        <Link to="/chat">
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
            Start Chat
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <FeatureCard icon="🧠" title="AI-Powered Chat" desc="Talk to a smart, virtual health assistant." />
          <FeatureCard icon="🎙️" title="Voice Input" desc="Speak your questions for hands-free help." />
          <FeatureCard icon="📄" title="Export Chats" desc="Download or share your chat history." />
          <FeatureCard icon="📧" title="Email Sharing" desc="Send chat links to doctors or loved ones." />
          <FeatureCard icon="🤖" title="Follow-up Suggestions" desc="Ask smarter follow-ups based on context." />
          <FeatureCard icon="🔒" title="Privacy First" desc="Your data is not saved or shared." />
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-100 py-16 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <StepCard number="1" text="Type or speak your medical question" />
          <StepCard number="2" text="Get real-time AI response" />
          <StepCard number="3" text="Follow up or export the chat" />
        </div>
      </section>

      {/* Sample Questions */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Try Sample Questions</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["What causes sore throat?", "Is fever dangerous?", "What to do for chest pain?"].map((q, i) => (
            <button key={i} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition">
              {q}
            </button>
          ))}
        </div>
      </section>

      {/* Dr. AI Persona */}
      <section className="py-12 px-4 md:px-20 text-center bg-blue-50">
        <h2 className="text-2xl font-bold mb-4">Meet Dr. AI</h2>
        <p className="max-w-xl mx-auto">
          Dr. AI is a virtual assistant trained on general medical knowledge and powered by Google's Gemini. It can guide you with health questions – anytime, anywhere.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-10">
        <Link to="/chat">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Start Chat Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 text-sm">
        Built with ❤️ using React, Express & Gemini AI | © 2025
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mt-2">{desc}</p>
  </div>
);

const StepCard = ({ number, text }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-blue-600 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full">{number}</div>
    <p>{text}</p>
  </div>
);

export default HomePage;
