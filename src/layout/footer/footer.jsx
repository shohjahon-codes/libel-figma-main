import React from "react";
import style from "./style.module.scss"
import googleplay from "../../assets/googleplay.svg"
import appstore from "../../assets/appstore.svg"
import sotion from "../../assets/sotion.svg"
import uzcard from "../../assets/uzcard.svg"
import humo from "../../assets/humo.svg"
import payme from "../../assets/Payme.svg"
export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className="container">
                <div className={style.footer__top}>
                    <div className={style.footer__top__links}>
                        <h4>Платформа хақида</h4>
                        <a href="#">Liber ўзи нима?</a>
                        <a href="#">Фойдаланиш шартлари</a>
                        <a href="#">Ёрдам</a>
                    </div>

                    <div className={style.footer__top__links}>
                        <h4>Обуна хақида</h4>
                        <a href="#">Обуна бўлиш</a>
                        <a href="#">Қандай тўлаш</a>
                    </div>
                    <div className={style.footer__top__links}>
                        <h4>Китоблар</h4>
                        <a href="#">Аудио китоблар</a>
                        <a href="#">Электрон китоблар</a>
                        <a href="#">Китоблар</a>
                    </div>
                    <div className={style.footer__top__links}>
                        <h4>Мобил илова</h4>
                        <img src={googleplay} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
            </div>

            <div className={style.footer_but_path}>
                <div className="container">
                    <div className={style.footer__bottom}>
                        <div className={style.footer__item}>
                            <p>Ижтимоий тармоқлар</p>
                            <img src={sotion} alt="c" />
                        </div>
                        <div className={style.footer__item}>
                            <p>Боғланиш</p>
                            <p>+998 90 253 77 53 support@liber.uz</p>
                        </div>
                        <div>
                            <p>Биз қабул қиламиз</p>
                            <div className={style.footer__item}>
                                <div>
                                <img src={uzcard} alt="" />
                                <img src={humo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}