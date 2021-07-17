import React from "react";
import "./strype.scss";

export const Stripe = (props) =>
    (<section className="main__stripe">
        <div className="main__stripe__container">
            <h3>
                Цены на перевозку манипулятором
            </h3>
            <p>
                Чтобы узнать стоимость перевозки груза манипулятором в Томске и области, Вам необходимо знать примерные габариты и вес груза, и указать начальный и конечный адрес.
            </p>
            <a className="main__stripe__tel" href={"tel:"+props.tel}>Узнать стоимость</a>
        </div>
    </section>)
