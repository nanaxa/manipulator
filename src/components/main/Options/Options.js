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
        description:"Грузоперевозка  тротуарной плитки, блоков ФБС, строительных смесей, кирпича, цемента и стройматериалов." +
                   " Грузоподъемность шасси до 10 тонн, стрела под собой - 2.7 тонн, вылет стрелы в сторону до 7 метров, высота" +
                   " подъёма 10 м, грузы длинной до 7,8 метров."
    },
    {
        img:"/images/plitka.jpg",
        alt:"плитка для тротуара",
        heading:"Тротуарная плитка",
        description:"Грузоперевозка  тротуарной плитки, блоков ФБС, строительных смесей, кирпича, цемента и стройматериалов." +
                   " Грузоподъемность шасси до 10 тонн, стрела под собой - 2.7 тонн, вылет стрелы в сторону до 7 метров, высота" +
                   " подъёма 10 м, грузы длинной до 7,8 метров."
    },
    {
        img:"/images/plitka.jpg",
        alt:"плитка для тротуара",
        heading:"Тротуарная плитка",
        description:"Грузоперевозка  тротуарной плитки, блоков ФБС, строительных смесей, кирпича, цемента и стройматериалов." +
            " Грузоподъемность шасси до 10 тонн, стрела под собой - 2.7 тонн, вылет стрелы в сторону до 7 метров, высота" +
            " подъёма 10 м, грузы длинной до 7,8 метров."
    },
    {
        img:"/images/plitka.jpg",
        alt:"плитка для тротуара",
        heading:"Тротуарная плитка",
        description:"Грузоперевозка  тротуарной плитки, блоков ФБС, строительных смесей, кирпича, цемента и стройматериалов." +
            " Грузоподъемность шасси до 10 тонн, стрела под собой - 2.7 тонн, вылет стрелы в сторону до 7 метров, высота" +
            " подъёма 10 м, грузы длинной до 7,8 метров."
    },
    {
        img:"/images/plitka.jpg",
        alt:"плитка для тротуара",
        heading:"Тротуарная плитка",
        description:"Грузоперевозка  тротуарной плитки, блоков ФБС, строительных смесей, кирпича, цемента и стройматериалов." +
            " Грузоподъемность шасси до 10 тонн, стрела под собой - 2.7 тонн, вылет стрелы в сторону до 7 метров, высота" +
            " подъёма 10 м, грузы длинной до 7,8 метров."
    },
    {
        img:"/images/plitka.jpg",
        alt:"плитка для тротуара",
        heading:"Тротуарная плитка",
        description:"Грузоперевозка  тротуарной плитки, блоков ФБС, строительных смесей, кирпича, цемента и стройматериалов." +
            " Грузоподъемность шасси до 10 тонн, стрела под собой - 2.7 тонн, вылет стрелы в сторону до 7 метров, высота" +
            " подъёма 10 м, грузы длинной до 7,8 метров."
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