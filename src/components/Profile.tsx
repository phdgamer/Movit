import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css'
export function Profile(){
  const { level } = useContext(ChallengesContext);
  return(
    <div className={style.profileContainer}>
      <img src="https://github.com/phdgamer.png" alt="Pedro Dalpa"/>
      <div>
        <strong>Pedro Dalpa</strong>
        <p>
          <img src="icons/level.svg" alt="LevelUp"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}