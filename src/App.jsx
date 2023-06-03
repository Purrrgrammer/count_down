import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //state
  const [time, setTime] = useState(new Date())

  const [birthDate, setBirthDate] = useState(new Date("2023-12-06").getTime());

  const [inputDate, setInputDate] = useState('1 Jan 2023');

  //Handler
  const onChangeHandler = (e) => {
    setInputDate(e.target.value);
  }
  const countDown = () => {
    setBirthDate(inputDate);
  }

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime() // the output will be millisecs
    console.log("this is now", now)

    let timeCount = (birthDate - now) / 1000 //convert Time into milliseconds to seconds
    console.log('timeCount', timeCount)
    let days = Math.floor(timeCount / (60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor(
      (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
    )
    //let minutes => CHECKED
    let minutes = Math.floor(timeCount / (60))
    //let seconds => CHECKED
    let seconds = Math.floor(timeCount)

    console.log("day...", days, "hrs...", hours, "min...", minutes, "sec...", seconds)

    return [days, hours, minutes, seconds]
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date())
      getCountdown()
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  return (
    <div className='container'>
      <h1>Countdown</h1>
      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, aliquam ipsam ipsum iure possimus sint quia culpa doloremque nihil recusandae?</h4>
      <div className='countdown'>
        {/* <div>{days}</div>
        <div>{hours}</div>
        <div>{minutes}</div>
        <div>{seconds}</div> */}
        {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}{' '}
        {time.getHours()}:{time.getMinutes() + 1}:{time.getSeconds()}
      </div>
      <section className='input-container'>
        <input type='text' onChange={onChangeHandler} />
        <button onClick={countDown} >count down</button>
      </section>
    </div>
  )
}

export default App
