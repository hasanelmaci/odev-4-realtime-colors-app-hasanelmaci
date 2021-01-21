import { useEffect, useState, useContext } from "react";
import ColorInput from "./components/ColorInput";
import DisplayReceivedDatas from "./components/DisplayReceivedDatas";
import UsernameInput from "./components/UsernameInput";
import { disconnectSocket, initSocket, receiveColor } from "./socketService";
import ColorContext from "./contexts/ColorContext";

function Container() {
  const { color } = useContext(ColorContext);
  let localColor = localStorage.getItem("localColor");

  const [receivedDatas, setReceivedDatas] = useState({
    color: localColor,
    username: "",
  });
  console.log(receivedDatas);

  useEffect(() => {
    initSocket();

    //karşı taraftan gelen username ve color
    receiveColor((color) => {
      setReceivedDatas(color);
    });

    return () => disconnectSocket();
  }, [setReceivedDatas]);

  return (
    <div>
      <DisplayReceivedDatas datas={receivedDatas} />
      <ColorInput />
      <UsernameInput />

      {color.username === "" ? (
        <h3>Please enter a name </h3>
      ) : (
        <h3>Your username: {color.username}</h3>
      )}
    </div>
  );
}

export default Container;
