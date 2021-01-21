import { useState, useContext } from "react";
import ColorContext from "../contexts/ColorContext";

function UsernameInput() {
  const { setColor } = useContext(ColorContext);
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor((prevState) => ({ ...prevState, username: user })); // username contexte gönderilir
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
        />
      </form>
    </div>
  );
}

export default UsernameInput;
