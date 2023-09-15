import { useState, useEffect } from "react";
import axios from "axios";
import buttonImg from "./images/icon-dice.svg";
import "./styles.scss";

function App() {
  const [adviceNumber, setAdviceNumber] = useState("");
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(response.data.slip.advice);
    setAdviceNumber(response.data.slip.id);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <div className="card">
      <p className="adviceNumber">
        ADVICE <span>#{adviceNumber}</span>
      </p>

      <p className="advice">“{advice}”</p>

      <div className="divider"></div>

      <div onClick={handleClick} className="adviceChanger">
        <img src={buttonImg} alt="diceImg" />
      </div>
    </div>
  );
}
export default App;
