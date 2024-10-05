import React from "react";
import Hero1 from "../../assets/hero1.svg"
import style from "./style.module.scss"

export const Hero = ({ data }) => {
    return (
        <div className={style.hero}>
            <div className={style.hero__left}>
                <div>
                    <p className={style.hero__left__title}>Кўп ўқилаётганлар</p>
                    <img src={Hero1} alt="" />
                </div>

                <div className={style.hero__left__data}>
                    {
                        data.map((item) => {
                            return (
                                <div className={style.hero__left__data__items}>
                                    <img src={item.img} alt="img" />
                                    <div>{item.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={style.hero__right}>
                <div className={style.hero__right__info}>
                    <p className={style.hero__right__title}>Китоб ўқишни ёқтирасизми?</p>
                    <p>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                </div>
                <button className={style.hero__right__btn}>Обуна бўлиш</button>
            </div>
        </div>
    )
}