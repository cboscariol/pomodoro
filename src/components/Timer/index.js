import React from 'react'
import './style.css'

function Timer(props) {

  const minutos = String(Math.floor(props.time / 60)).padStart(2, "0");
  const segundos = String(props.time % 60).padStart(2, "0");




    return (
    <div className='center'>
        <div className='circle1 center'>
          <div className='circle2 center'>
            <div className='principal-circle center'> 
            <p className='circle-text'>{props.isActive ? 'Working' : 'Paused'}</p> 

            <p className= 'circle-timer'> {minutos}:{segundos}</p>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Timer
