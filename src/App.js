import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleChipDelete = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  };

  return (
    <div className="App">
      <h1>Chips Input</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Type a chip and press tag"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          className="input"
        />
      </div>
      <div className="chips">
        {chips.map((chip, index) => (
          <div className="chip-container">
            {chip}
            <button className="button" onClick={() => handleChipDelete(index)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
