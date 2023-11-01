import { useEffect, useState } from "react";

import "./App.css";
function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currentDate, setCurrentDate] = useState("3 Jul 2023");
  const [inputDate, setInputDate] = useState("6 Dec 2023");

  // const getCountdown = () => {
  //   let now = new Date().getTime()
  //   return (days, "-", hours, minutes, seconds)
  // }

  useEffect(() => {
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const totalSeconds = (changingDate - currentDate) / 1000;
    console.log("this is total sec", totalSeconds);
    console.log("this is changingDate", changingDate);
    console.log("this is currentDate", currentDate);
    setDays(Math.floor(totalSeconds / 3600 / 24));
    setHours(Math.floor(totalSeconds / 60) % 60);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }, [currentDate]);

  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };

  return (
    <div className="container">
      <h1>Countdown</h1>
      <h4>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, aliquam
        ipsam ipsum iure possimus sint quia culpa doloremque nihil recusandae?
      </h4>
      <div className="countdown">
        <div>{days}</div>
        <div>{hours}</div>
        <div>{minutes}</div>
        <div>{seconds}</div>
        {/* {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}{' '} */}
        {/* {time.getHours()}:{time.getMinutes() + 1}:{time.getSeconds()} */}
      </div>
      <section className="input-container">
        <input type="text" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Countdown</button>
      </section>
    </div>
  );
}

export default App;
