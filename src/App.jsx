import { useEffect, useState } from "react";
import { registerLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import RingLoader from "react-spinners/RingLoader";

registerLocale("es", es);

const App = () => {
  const [inputDate, setInputDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(new Date().toDateString());
  const endTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [countDownEnd, setCountDownEnd] = useState(false);
  const [result, setResult] = useState(endTime);

  const getCountDown = (inputDate) => {
    let now = new Date().getTime();
    let wantedTime = inputDate - now;

    let days = Math.floor(wantedTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (wantedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((wantedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((wantedTime % (1000 * 60)) / 1000);
    console.log(
      "day...",
      days,
      "hrs...",
      hours,
      "min...",
      minutes,
      "sec...",
      seconds
    );
    if ((days, hours, minutes, seconds <= 0)) {
      setCountDownEnd(true);
    } else {
      setCountDownEnd(false);
    }
    return { days, hours, minutes, seconds };
  };
  useEffect(() => {
    const intervalTask = setInterval(() => {
      const data = getCountDown(inputDate);
      setResult({ ...data });
    }, 1000);
    return () => clearInterval(intervalTask);
  }, [inputDate]);
  // or displayDate

  const { days, hours, minutes, seconds } = result;

  return (
    <>
      <div className="this mx-auto fixed top-1/2 left-1/2 bg-red-300 w-6/12 flex flex-col items-center px-5 py-16 border-solid border-black border-[10px] rounded-3xl	">
        <div className="text-2xl">
          {countDownEnd ? `Count Down Ended` : `Counting...`}
        </div>
        <div className="text-center text-5xl">{displayDate}</div>
        <DatePicker
          className="text-center"
          selected={inputDate}
          onChange={(date) => {
            setInputDate(date);
            setDisplayDate(date.toDateString());
          }}
          dateFormat="MM/dd/yyyy"
        />
        <div className="time-detail-container flex space-x-4">
          <div>
            <div>{days <= 0 ? `00` : days < 1 ? `0${days}` : days} </div>
            <div>{days > 1 ? `days` : `day`} </div>
          </div>
          <div>
            <div>{hours <= 0 ? `00` : hours < 10 ? `0${hours}` : hours} </div>
            <div>{hours > 1 ? `hrs` : `hr`} </div>
          </div>
          <div>
            <div>
              {minutes <= 0 ? `00` : minutes < 10 ? `0${minutes}` : minutes}
            </div>
            <div>{minutes > 1 ? `mins` : `min`} </div>
          </div>
          <div>
            <div>
              {seconds <= 0 ? `00` : seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <div>{seconds > 1 ? `secs` : `sec`} </div>
          </div>
        </div>
      </div>
      <div className="loader ">
        <RingLoader loading={(days, hours, minutes, seconds >= 0)} size={700} />
      </div>
    </>
  );
};

export default App;
