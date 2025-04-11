import { Question12 } from "./Components/Question12";
import "./App.css";
function App() {
  const fn = "Nandu";
  const ln = "Mahesh";
  return (
    <div className="mainSection">
      <Question12 firstname={fn} lastname={ln} />
    </div>
  );
}

export default App;
