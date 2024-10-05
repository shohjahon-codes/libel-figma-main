import React from "react";
import { Hero } from "../../components/hero/hero";
import { Serves } from "../../components/serves/serves";
import { Ruknlar } from "../../components/ruknlar/ruknlar";
import datas from "../../data/data";
import { NewProducts } from "../../components/new_products/new_products";

export const Home = () => {
    return (
        <div className="container">
            <Hero data={datas.hero}/>
            <Serves data={datas.serves}/>
            <Ruknlar data={datas.rykn}/>
            <NewProducts data={datas.kitob} title={'Янги қўшилганлар'}/>
            <NewProducts data={datas.audio} title={"Аудио китоблар"}/>
        </div>
    )
}