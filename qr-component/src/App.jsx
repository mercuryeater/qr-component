import "./App.css";
import TextContent from "/src/components/TextContent/TextContent.jsx";
import QRCode from "/src/components/QRCode/QRCode.jsx";

function App() {
  return (
    <div className="card">
      <QRCode />
      <TextContent />
    </div>
  );
}
export default App;
