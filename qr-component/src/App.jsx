import "./App.css";
import qrCode from "/image-qr-code.png";

function App() {
  return (
    <div className="card">
      <div className="card__qrCode">
        <img src={qrCode} alt="QR Code" className="card__qrCode__code" />
      </div>
      <div className="card__textContent">
        <h1 className="card__textContent__Title">
          Improve your front-end skills by building projects
        </h1>
        <p className="card__textContent__callToAction">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
