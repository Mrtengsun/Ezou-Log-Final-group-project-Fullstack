import { createContext } from "react";

export const CardCTX = createContext();

function CardCTXProvider({ children }) {
  const [qrcode, setQrcode] = useState();

  fetch("http://localhost:5000/api/user/register")
    .then((res) => res.json())
    .then((qrcode) => setQrcode(qrcode));

  return <div value={{ qrcode, setQrcode }}>{children}</div>;
}

export default CardCTXProvider;