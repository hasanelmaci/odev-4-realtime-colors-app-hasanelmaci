import { useEffect, useContext } from "react";
import ColorContext from "../contexts/ColorContext";

function DisplayReceivedDatas({ datas }) {
  const { color } = useContext(ColorContext);

  useEffect(() => {
    document.body.style.backgroundColor = datas.color;
  }, [{ datas }]);

  return (
    <div>
      <h1>
        {" "}
        Change:{" "}
        <span>
          {color.username === datas.username && datas.username !== ""
            ? "You"
            : datas.username}
        </span>
      </h1>
      <h2>{datas.color}</h2>
    </div>
  );
}

export default DisplayReceivedDatas;
