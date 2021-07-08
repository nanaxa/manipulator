import React from 'react';
import "./style.scss";

export function Header() {
  return <header className="header">

              <section className="header__content">
                  <div className="header__content__inner__wrapper">
                      <h1 className="header__content__heading">Заказать манипулятор в Томске</h1>
                      <a className="header__content__tel" href="tel:+1234567890">+1234567890</a>
                  </div>
              </section>
                <section className="header__info">
                    <div className="header__info__inner__wrapper">
                        <h1 className="header__info__heading">Заказать манипулятор в Томске</h1>
                        <p className="header__info__text">
                            Услуги манипулятора Mitsubishi Fuso Fighter в Томске. <br/>
                            Для перевозки строительных бытовок, готовых бань, контейнеров. <br/>
                            Работаем без выходных 24/7 по всей Томской области. Любая форма оплаты!
                        </p>
                        <a className="header__info__tel__button" href="tel:+1234567890">ЗАКАЗАТЬ</a>
                    </div>

                </section>

        </header>

}
