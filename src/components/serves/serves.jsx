import React from 'react';
import style from "./style.module.scss"
export const Serves = ({ data }) => {
    return (
        <div className={style.serves__div}>
            {
                data.map((item) => {
                    return(
                        <div className={style.serves}>
                            <img src={item.img} alt="img" />
                            <div className={style.serves__info}>
                                <h3>{item.disc}</h3>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                } )
            }
        </div>
    )
}
