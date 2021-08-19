import React from 'react';
import "./style.scss";
import { FaPhone } from 'react-icons/fa';
import {tel} from "../../index";


export function Header(props) {
    let phone = `+${tel[1]}-${tel[2]}${tel[3]}${tel[4]}-${tel[5]}${tel[6]}${tel[7]}-${tel[8]}${tel[9]}-${tel[10]}${tel[11]}`


  return <header className="header">

              <section className="header__content">
                  <div className="header__content__inner__wrapper">
                      <a href="https://манипулятортомск.рф" className="header__content__link"><h1 className="header__content__heading">{props.head}</h1></a>
                      <a className="header__content__tel" href={"tel:"+props.tel} title="Позвонить"><FaPhone size="24px"/> {phone}</a>
                  </div>
              </section>
              <section className="header__info">
                    <div className="header__info__inner__wrapper">
                        <h1 className="header__info__heading">{props.head.toUpperCase()} УСЛУГИ</h1>
                        <p className="header__info__text">
                            ДОБРО ПОЖАЛОВАТЬ! <br/>
                            АРЕНДА МАНИПУЛЯТОРА MITSUBISHI FUSO 5т. <br/>
                            Я ОПЫТНЫЙ КРАНОВЩИК-ВОДИТЕЛЬ АЛЕКСАНДР<br/>
                            ПРЕДОСТАВЛЯЮ УСЛУГИ МАНИПУЛЯТОРА В ТОМСКЕ БЕЗ ПОСРЕДНИКОВ
                        </p>
                        <a className="header__info__tel__button" title="Заказать манипулятор" href={"tel:"+props.tel}>ЗАКАЗАТЬ</a>
                    </div>

              </section>

        </header>

}
