import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import TimerCard from "./TimerCard";
import images from "../../assets/images";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);

  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }


function onComplete() {
  const audio = new Audio(images.tune);
  audio.play();
  }


  return (
    <div className="timer">
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
          onComplete={onComplete}
        >
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "25px" }}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div style={{ width: "35vw", textAlign: "center" }}>
        <div
          style={{
            color: "#949494",
            display: "flex",
            fontSize: "20px",
            justifyContent: "space-evenly",
          }}
        >
          <TimerCard
            label="Hours"
            value={hours}
            onIncrease={increaseHour}
            onDecrease={decreaseHour}
          />
          <TimerCard
            label="Minutes"
            value={minutes}
            onIncrease={increaseMinute}
            onDecrease={decreaseMinute}
          />
          <TimerCard
            label="Seconds"
            value={seconds}
            onIncrease={increaseSecond}
            onDecrease={decreaseSecond}
          />
        </div>
        <div
          className="start--circle"
          onClick={() => setPlaying((prev) => !prev)}
        >
          {playing ? <p>Pause</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};

export default Timer;