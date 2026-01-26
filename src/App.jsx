import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <main>
      <section className="theme">
        <h1>Theme Creator</h1>
        <ul className="theme__colorlist">
          {initialColors.map((oneColor) => (
            <li key={oneColor.id} className="theme__coloritem">
              <Color color={oneColor} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
