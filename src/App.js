import Button from './components/Button'
import reset from './components/Button/reset.svg'
import pause from './components/Button/pause.svg'
import play from './components/Button/play.svg'
import info from './components/Button/info.svg'
import './App.css'
import Timer from './components/Timer'
import {useState, useEffect} from 'react'

function App() {
  const initialTime = 1500
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(initialTime);
  const [intervalValue, setIntervalValue] = useState();
  
  useEffect(() => {
    if(isActive){
     const value = setInterval(() =>{
        setTime((currentTime) => currentTime-1)
      }, 1000)
      setIntervalValue(value)
    } else {
      clearInterval(intervalValue)
    }
  }, [isActive]);




  return (
    <>
    <h1>Pomodoro</h1>
    <Timer time={time} isActive={isActive}/>
    <div className='button-box'>
    <Button srcIcon={reset} onClick={() => {
      setIsActive(false);
      setTime(initialTime);
    }}/>
    <Button srcIcon={isActive? pause : play} size='bigger' onClick={() => {
      isActive ? setIsActive(false) : setIsActive(true)
    }}/>
    <Button srcIcon={info} onClick={() => alert("Feito com carinho e lágrimas")}/>
    </div>
    </>
  );
}

export default App;
