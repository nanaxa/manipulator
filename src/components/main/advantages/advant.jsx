import React from "react";
import "./advant.scss";
import { FaRubleSign } from 'react-icons/fa'
import { FaClock } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import {tel} from "../../../index";



export const Advant = () =>
    (<section className="main__advant mask">
        <div className="main__advant__overlay">


            <div className="main__advant__container">

                <h1>Почему с нами сотрудничают на постоянной основе?</h1>
                <h3>Потому что, мы мастера своего дела!</h3>

                <div className="main__advant__section__wrapper">


                    <div className="main__advant__section">
                        <span className="main__advant__icons"><FaRubleSign /></span>
                        <h3>Низкая цена</h3>
                    </div>
                    <div className="main__advant__section">
                        <span><FaClock/></span>
                        <h3>Быстрая подача</h3>
                    </div>
                    <div className="main__advant__section">
                        <span><FaSearchLocation/></span>
                        <h3>Работаем по <br/>Томской области</h3>
                    </div>

                </div>
                <a className="main__advant__tel" href={"tel:"+tel}>ЗАКАЗАТЬ МАНИПУЛЯТОР</a>

            </div>

        </div>
    </section>)