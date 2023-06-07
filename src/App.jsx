import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //state
  const [time, setTime] = useState(new Date())
  const [inputDate, setInputDate] = useState('1 Jan 2023');
  const [birthDate, setBirthDate] = useState(new Date("2023-12-06").getTime());

  //Handler
  const onChangeHandler = (e) => {
    setInputDate(e.target.value);
  }
  const countDown = () => {
    setBirthDate(new Date(inputDate));
  }

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountDown = (birthDate) => {
    let now = new Date().getTime() // the output will be millisecs
    let timeCount = (birthDate - now) / 1000 //convert Time into milliseconds to seconds
    console.log('timeCount', timeCount)
    console.log('birth date', birthDate)
    let days = Math.floor(timeCount / (60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor(
      (timeCount / (60 * 60)) % 24 //convert seconds to hours
    )
    //let minutes => CHECKED
    let minutes = Math.floor((timeCount / 60) % 60)
    //let seconds => CHECKED
    let seconds = Math.floor(timeCount % 60)

    console.log("day...", days, "hrs...", hours, "min...", minutes, "sec...", seconds)
    return [days, hours, minutes, seconds]
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date())
      getCountDown(birthDate)

    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  return (
    < div className='container' >
      <h1>Countdown</h1>
      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, aliquam ipsam ipsum iure possimus sint quia culpa doloremque nihil recusandae?</h4>
      <div className='countdown'>
        <div >{ }</div>
        <div>{birthDate.hours}</div>
        <div>{birthDate.minutes}</div>
        <div>{birthDate.seconds}</div>

      </div>
      <section className='input-container'>
        <input type='text' onChange={onChangeHandler} />
        <button onClick={countDown} >count down</button>
      </section>
    </div >
  )
}

export default App



