import React from "react";
import style from "./style.module.scss"
import logo from "../../assets/logo.svg"
import { SearchIcon } from "../../assets/icons/searchIcon"
import { MenuIcon } from "../../assets/icons/menuIcon";
import uzbflag from "../../assets/uzbflage.svg"
import { UserIcon } from "../../assets/icons/userIcon";
import { Navbar } from "../../components/navbar/navbar";

export const Header = () => {
    return (
        <header className="container">
            <div className={style.header}>
                <div><img src={logo} alt="" /></div>

                <div className={style.header_form}>
                    <div className={style.ruknlar}>
                        <MenuIcon />
                        <select>
                            <option value="1">Рукнлар</option>
                            <option value="2">Рукнлар</option>
                            <option value="3">Рукнлар</option>
                        </select>
                    </div>

                    <div className={style.input}>
                        <input type="text" placeholder="Қидириш" />
                        <div>
                            <SearchIcon />
                        </div>
                    </div>
                </div>

                <div className={style.header_right}>
                    <div className={style.option}>
                        <img src={uzbflag} alt="" />
                        <select>
                            <option value="uzb">Ўз</option>
                            <option value="uzb">Ўз</option>
                            <option value="uzb">Ўз</option>
                        </select>
                    </div>

                    <div className={style.profile}>
                        <UserIcon/>
                        <p>Кириш</p>
                    </div>

                </div>
            </div>
            <Navbar/>
        </header>
    )
}