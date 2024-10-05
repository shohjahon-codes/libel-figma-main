import React from 'react'
import style from "./style.module.scss"

export const Navbar = () => {
  return (
    <div className={style.navbar}>
        <ul className={style.navlink}>
            <li>Аудиокитоб</li>
            <li>Электрон китоблар</li>
            <li>Босма китоблар</li>
            <li>Контакт</li>
            <li>Биз хақимизда</li>
        </ul>
    </div>
  )
}
