import React from 'react'
import RectButton from '../Button/RectButton'
import style from './style.module.css'

export const Navbar = () => {
  return (
    <div className={style.mainDiv}>
       <div className={style.logo}><img src='https://driffle.com/logo/driffle-logo-white.svg'/></div>
       <div className={style.buttonsDiv}>
        <img className={style.cartPng} src="/cart-notification.png" alt="" />
        <RectButton   text ="Login" onClick={()=>console.log("Logged in") } classname={style.loginBtn}/>
        <RectButton  text ="Sign Up" onClick={()=>console.log("Signed up")} classname={style.signupBtn}/>
       </div>

<div className={style.responsiveDiv}>
    <img src="/favorite-default.png" alt="" />
    <img src="/Vector.png" alt="" />

</div>

    </div>
  )
}
