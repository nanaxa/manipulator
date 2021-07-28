import React from "react";
import "./options.scss";

const Options = (props) =>
    (<figure>
                <img src={props.img} alt={props.alt}/>
                <figcaption>
                    <span>
                        {props.heading}
                    </span>
                    <p>
                        {props.description}
                    </p>
                </figcaption>
          </figure>)

const figureData = [
    {
        img:"/images/plitka.jpg",
        alt:"плитка для тротуара",
        heading:"Тротуарная плитка",
        description:"Заказать манипулятор в Томске для транспортировки тротуарной плитки." +
            " За 1 рейс можем перевезти до 5 поддонов тратуарной плитки."
    },
    {
        img:"/images/bricks.jpg",
        alt:"Кирпич",
        heading:"Кирпич",
        description:"Заказать манипулятор в Томске для транспортировки кирпича. " +
            "Вместимость манипулятора позволяет перевезти за 1 рейс 5 поддонов кирпича."
    },
    {
        img:"/images/brevno.jpg",
        alt:"Пиломатериал",
        heading:"Пиломатериал",
        description:"Осуществляем доставку бруса, вагонки, обрезной и необрезной доски и другого пиломатериала. " +
            "Габариты кузова позволяет перевозить пиломатериал" +
            "длиной до 6 метров и обьемом до 6 м³"
    },
    {
        img:"/images/pavilion.jpg",
        alt:"Перевозка киосков, гаражей, контейнеров",
        heading:"Перевозка киосков, гаражей, контейнеров",
        description:"Вызвать воровайку в Томске для перевозки киосков, гаражей и контейнеров, массой до 5 тонн"
    },
    {
        img:"/images/JBI.jpg",
        alt:"Кольца ЖБИ",
        heading:"Кольца ЖБИ",
        description:"Перевозим манипулятором ЖБИ кольца по Томску и области. " +
            "Все работы осуществляет опытный крановщик-водитель"
    },
    {
        img:"/images/can.jpg",
        alt:"Погрузо-разгрузочные работы",
        heading:"Услуга автокрана",
        description:"Услуга - аренда манипулятора в Томске с водителем для погрузо-разгрузочных работ и транспортировки различных грузов." +
            "Вызвать воровайку в Томске для перевозки торгового и промышленного оборудования, металлопроката, металлолома, строительных материалов и др."

    },

]

export const Option = () => {
    let option = figureData.map((figure) => <Options {...figure} />  )
    return <section className="options">
                <div className="options__container">
                    {option}
                </div>
           </section>
}