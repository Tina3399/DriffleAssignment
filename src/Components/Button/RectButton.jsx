import style from './style.module.css'


const RectButton = ({text,onClick,classname}) => {
  return (
    <button className={`${style.rectBtn} ${classname}`}   onClick={onClick}>{text}</button>
  )
}

export default RectButton;