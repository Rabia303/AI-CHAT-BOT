import jsPDF from 'jspdf';

const ExportChat = ({ messages }) => {
  const exportPDF = () => {
    const doc = new jsPDF();
    messages.forEach((msg, i) => {
      doc.text(`${msg.from.toUpperCase()}: ${msg.text}`, 10, 10 + i * 10);
    });
    doc.save('DrAI_Chat.pdf');
  };

  return (
    <button onClick={exportPDF} className="mt-2 bg-yellow-400 px-4 py-1 rounded">
      📄 Export as PDF
    </button>
  );
};

export default ExportChat;
