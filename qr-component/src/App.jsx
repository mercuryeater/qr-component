import "./App.css";
import TextContent from "/src/components/TextContent.jsx";
import QRCode from "/src/components/QRCode.jsx";

function App() {
  return (
    <div className="card">
      <QRCode />
      <TextContent />
    </div>
  );
}
export default App;
