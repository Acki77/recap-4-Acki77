//import { initialColors } from "../../lib/colors";
import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm";
//

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return (
      <>
        <ColorForm
          initialData={color}
          onSubmitColor={(newData) => {
            onEditColor(color.id, newData);
            setIsEditing(false);
          }}
        />

        <button
          className="color-card__button"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </>
    );
  }

  return (
    <div className="color-card" style={{ backgroundColor: color.hex }}>
      <h2 className="color-card-headline" style={{ color: color.hex }}>
        {color.hex}
      </h2>

      <p
        className="color__role"
        /*         style={{ backgroundColor: color.contrastText, color: color.hex }}
         */
      >
        {color.role}
      </p>

      <p
        className="color__contrast"
        /*         style={{ backgroundColor: color.contrastText, color: color.hex }}
         */
      >
        contrast: {color.contrastText}
      </p>
      <br />
      <div className="color-card__buttons">
        {!showConfirm ? (
          <>
            <button
              className="color-card__delete"
              onClick={() => setShowConfirm(true)}
            >
              Delete
            </button>
            <button
              className="color-card__edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </>
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
    </div>
  );
}
