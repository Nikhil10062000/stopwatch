import React, {useEffect , useState} from "react";
import './style.css'

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="contain">
      <h1 className="header">Stopwatch</h1>
      <div className="screen">
        <b>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</b>
        <b>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</b>
        <b>{("0" + ((time / 10) % 100)).slice(-2)}</b>
      </div>

      <div className="button">
        {!timerOn && time === 0 && (
          <button className="start" onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button className="stop," onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button className="reset" onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button className="resume" onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default App;
