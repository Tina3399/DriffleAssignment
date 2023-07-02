
import style from './style.module.css'

const CircularButton = ({text}) => {
   

  return (
    <button className={style.circularButton}  >{text}</button>
  )
}

export default CircularButton;