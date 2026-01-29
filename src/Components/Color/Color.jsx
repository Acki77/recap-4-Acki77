//import { initialColors } from "../../lib/colors";
import "./Color.css";
import { useState } from "react";

//

export default function Color({ color, onDeleteColor }) {
  const [showConfirm, setShowConfirm] = useState(false);

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
      <br />
      {!showConfirm ? (
        <button
          className="color-card__delete"
          onClick={() => setShowConfirm(true)}
        >
          Delete
        </button>
      ) : (
        <div className="color-card__confirm">
          <p
            className="color-card-headline"
            style={{
              backgroundColor: color.contrastText,
              color: color.hex,
              fontWeight: "bold",
            }}
          >
            Really delete?
          </p>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
          <button onClick={() => onDeleteColor(color.id)}>Confirm</button>
        </div>
      )}
    </div>
  );
}
