import React from "react";
import style from "./style.module.scss"

export const NewProducts = ({ data ,title }) => {
    return (
        <div className={style.NewProducts}>
            <h1 className={style.pr_title}>{title}</h1>
            <div className={style.NewProducts__items}>
                {
                    data.map((item) => {
                        return (
                            <div className={style.NewProducts__item}>
                                <img src={item.img} alt="img" />
                                <div className={style.NewProducts__item__info}>
                                    <h4>{item.disc}</h4>
                                    <p>{item.title}</p>
                                </div>
                                <div className={style.NewProducts__item__bottom}>
                                    <div className={style.NewProducts__item__bottom__left}>
                                        <img src={item.star} alt="" />
                                        <p>{item.reting}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}