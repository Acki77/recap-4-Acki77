//import { initialColors } from "../../lib/colors";
import "./Color.css";
//

export default function Color({ color }) {
  return (
    <div className="color-card" style={{ backgroundColor: color.hex }}>
      <h2
        className="color-card-headline"
        style={{ backgroundColor: color.contrastText, color: color.hex }}
      >
        {color.hex}
      </h2>
      <p
        className="color__role"
        style={{ backgroundColor: color.contrastText, color: color.hex }}
      >
        {color.role}
      </p>
      <p
        className="color__contrast"
        style={{ backgroundColor: color.contrastText, color: color.hex }}
      >
        contrast: {color.contrastText}
      </p>
    </div>
  );
}
