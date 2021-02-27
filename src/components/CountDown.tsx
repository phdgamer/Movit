import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/CountDown.module.css';

export function CountDown(){
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountdownContext);
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');

  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');  

  return(
    <div>
    <div className={styles.countDownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
      
      </div>
      {hasFinished ? (
         <button 
         disabled
         className={styles.countDownButton}
       >
          Ciclo encerrado
          <img src="icons/completed.svg" alt="completed"/>
       </button>
        
      ) : (
        <>
          { isActive ? (
            <button 
              type="button" 
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountDown} 
            >
              Abandonar ciclo
              <img src="icons/close.svg" alt="completed"/>
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countDownButton}
              onClick={startCountDown} 
            >
              Iniciar um ciclo
              <img src="icons/arrowRight.svg" alt="completed"/>  
            </button>
          ) }
        </>
      )}

      

    </div>
  )
}