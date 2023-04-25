import "./App.css";
import TextContent from "/components/TextContent.jsx";
import QRCode from "/components/QRCode.jsx";

function App() {
  return (
    <div className="card">
      <QRCode />
      <TextContent />
    </div>
  );
}

export default App;
