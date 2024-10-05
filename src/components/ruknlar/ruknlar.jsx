import React from 'react'
import style from "./style.module.scss"
export const Ruknlar = ({ data }) => {
    return (
        <div className={style.rukns_con}>
            <h1>Рукнлар</h1>
            <div className={style.rukns}>
                {
                    data.map((item) => {
                        return (
                            <div>
                                <img src={item.img} alt="img" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}