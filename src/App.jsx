import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForms";
import "./App.css";
import "./Components/ColorInput/Colorinput.css";
import "./Components/ColorForms/ColorForm.css";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    setColors([newColor, ...colors]);
  }
  function handleDeleteColor(idToDelete) {
    setColors(colors.filter((color) => color.id !== idToDelete));
  }

  return (
    <main>
      <ColorForm onAddColor={handleAddColor} />
      <section className="theme">
        <h1>Theme Creator</h1>
        <ul className="theme__colorlist">
          {colors.length > 0 ? (
            colors.map((oneColor) => (
              <li key={oneColor.id} className="theme__coloritem">
                <Color color={oneColor} onDeleteColor={handleDeleteColor} />
              </li>
            ))
          ) : (
            <h2 style={{ color: "#ff0000" }}>
              No colors left. Please add some!
            </h2>
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
