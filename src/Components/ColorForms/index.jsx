// import CardInput
import { nanoid } from "nanoid";
import "./ColorForm.css";
import ColorInput from "../ColorInput";

const initialData = { role: "empty", hex: "#cf1414", contrastText: "#FFFFFF" };

export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("🤔 data:", data);
    const dataWithId = { ...data, id: nanoid() };
    console.log("Fertiges Objekt für die Liste:", dataWithId);
    onAddColor(dataWithId);
    event.target.reset();
  }
  return (
    <form className="colorForm" onSubmit={handleSubmit}>
      <h2>Add a new Color</h2>
      <div className="colorForm__fields">
        <div className="colorForm__field">
          <label className="colorForm__label" htmlFor="role">
            Role
            <br />
            <input
              className="colorForm__input"
              id="role"
              type="text"
              name="role"
              placeholder="some color"
              required
              defaultValue={initialData.role}
            />
          </label>
        </div>
        <div className="colorForm__field">
          <label className="colorForm__label" htmlFor="hex">
            Hex Number
            <br />
            <ColorInput id="hex" defaultValue={initialData.hex} />
          </label>
        </div>
        <div className="colorForm__field">
          <label className="colorForm__label" htmlFor="contrastText">
            Contrast
            <br />
            <ColorInput
              id="contrastText"
              defaultValue={initialData.contrastText}
            />
          </label>
        </div>
      </div>
      <br />
      <button type="submit" className="colorForm__button">
        Add Color
      </button>
    </form>
  );
}
