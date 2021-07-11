import React from 'react';
import "./style.scss";


export function Header(props) {

  return <header className="header">

              <section className="header__content">
                  <div className="header__content__inner__wrapper">
                      <h1 className="header__content__heading">{props.head}</h1>
                      <a className="header__content__tel" href={"tel:"+props.tel}>{props.tel}</a>
                  </div>
              </section>
                <section className="header__info">
                    <div className="header__info__inner__wrapper">
                        <h1 className="header__info__heading">{props.head}</h1>
                        <p className="header__info__text">
                            Услуги манипулятора Mitsubishi Fuso Fighter в Томске. <br/>
                            Для перевозки строительных бытовок, готовых бань, контейнеров. <br/>
                            Работаем без выходных 24/7 по всей Томской области. Любая форма оплаты!
                        </p>
                        <a className="header__info__tel__button" href={"tel:"+props.tel}>ЗАКАЗАТЬ</a>
                    </div>

                </section>

        </header>

}
