import { useContext, useState, useEffect } from "react";
import ColorContext from "../contexts/ColorContext";
import { sendColor } from "../socketService";

function ColorInput() {
  let localColor = localStorage.getItem("localColor");
  const [colorInput, setColorInput] = useState(localColor);

  const { color, setColor } = useContext(ColorContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor((prevState) => ({ ...prevState, color: colorInput }));
    localStorage.setItem("localColor", colorInput);
    sendColor({ color: colorInput, username: color.username });
  };

  useEffect(() => {
    document.body.style.backgroundColor = colorInput;
  }, [colorInput]);

  return (
    <div>
      <form className="colorInput" onSubmit={handleSubmit}>
        <input
          value={colorInput}
          onChange={(e) => setColorInput(e.target.value)}
          type="color"
        />
        <button type="submit">Send Color</button>
      </form>
    </div>
  );
}

export default ColorInput;
