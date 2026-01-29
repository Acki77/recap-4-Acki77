// import CardInput
import { nanoid } from "nanoid";
import "./ColorForm.css";
import ColorInput from "../ColorInput";

const defaultFormData = {
  role: "empty",
  hex: "#cf1414",
  contrastText: "#FFFFFF",
};

export default function ColorForm({ onSubmitColor, initialData }) {
  const defaultValues = initialData || defaultFormData;
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const dataWithId = { ...data, id: nanoid() };
    onSubmitColor(dataWithId);
    event.target.reset();
  }
  return (
    <form className="colorForm" onSubmit={handleSubmit}>
      <h2> {initialData ? "Update Color" : "Add a new Color"}</h2>
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
              defaultValue={defaultValues.role}
            />
          </label>
        </div>
        <div className="colorForm__field">
          <label className="colorForm__label" htmlFor="hex">
            Hex Number
            <br />
            <ColorInput id="hex" defaultValue={defaultValues.hex} />
          </label>
        </div>
        <div className="colorForm__field">
          <label className="colorForm__label" htmlFor="contrastText">
            Contrast
            <br />
            <ColorInput
              id="contrastText"
              defaultValue={defaultValues.contrastText}
            />
          </label>
        </div>
      </div>
      <br />
      <button type="submit" className="colorForm__button">
        {initialData ? "Update Color" : "Add Color"}
      </button>
    </form>
  );
}
