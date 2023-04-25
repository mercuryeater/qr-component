import "./QRCode.css";
import qrCode from "/image-qr-code.png";
function QRCode() {
  return (
    <div className="card__qrCode">
      <img src={qrCode} alt="QR Code" className="card__qrCode__code" />
    </div>
  );
}
export default QRCode;
