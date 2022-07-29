import QRCode from "qrcode.react";
import { useState } from "react";

export default function QrCode2() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmit] = useState(false);

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div style={{ marginTop: 200, display: "flex", flexDirection: "row" }}>
      <div>
        <QRCode
          value="https://www.tutorialspoint.com"
          style={{ marginRight: 50 }}
        />
        <p>tutorialspoint</p>
      </div>

      <div>
        <QRCode value="https://www.google.com" style={{ marginRight: 50 }} />
        <p>Google</p>
      </div>

      <div>
        <QRCode value={url} style={{ marginRight: 50 }} />
        {submitted ? <p>{name}</p> : ""}
      </div>
      <br />
      <br />
      <form onSubmit={handleChange}>
        <label>Enter Url</label>
        <input type="text" onChange={qrCodeEncoder} />

        <label>Enter Name</label>
        <input type="text" onChange={nameChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
