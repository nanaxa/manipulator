import React from "react";
import "./reviews.scss";



let reviewsData =[
    {
        avatar:"/images/Julian.jpg",
        speach:"Заказывали пару раз. Арендовали воровайку для перевозки бытовки, и позже для колец септика. Хочу заметить, что машина небольшая, но очень рабочая. Процесс не затянулся, несмотря даже на то, что места для подъезда не так много, особо было  не развернуться. Ребята показали свой профессионализм, в столь сложных условиях.",
        avatarName:"Юлиан Ч.",
    },
    {
        avatar:"/images/Petr.jpg",
        speach:"Сработали быстро и оперативно. Перевозил брус 16 м³ - позвонил," +
            " договорились, приехали на пилораму, забрали, привезли и разгрузили куда сказал." +
            " Все четко, сделали скидку. Доволен как слон ",
        avatarName:"Петр Ч.",
    },
    {
        avatar:"/images/Ivan.jpg",
        speach:"Строили дом в пригороде. Нужно было привезти кирпичи (7 паллет). Позвонили в данную компанию. Оговорили условия - сколько, куда и когда перевезти, рассчитали стоимость. Оплата по факту получения. На следующий день материал был доставлен. От общения по телефону и с теми, кто непосредственно осуществлял перевозку и разгрузку только положительные впечатления. Могу рекомендовать фирму как очень ответственную.",
        avatarName:"Иван Н.",
    },
    {
        avatar:"/images/Vlad.jpg",
        speach:"Обращались в компанию, когда нужно было переместить киоск и торговое оборудование в другой конец города. Всё прошло 'без шума и пыли', за что мы очень благодарны. Был опыт сотрудничества с другой компанией, где были повреждены металлические основания..., особенно приятно, что ваша фирма отнеслась к работе со всей серьезностью!",
        avatarName:"Владислав К.",
    },

]

const ReviewsHTML = (props) =>
    (
        <figure>
            <img src={props.avatar} alt="фото"/>
            <figcaption>
                <p>{props.speach}</p>
                <p className="main__reviews__name">{props.avatarName}</p>
            </figcaption>
        </figure>
    )

export const Reviews = () => {
    let reviews = reviewsData.map((review) => <ReviewsHTML {...review} />  );
    return <section className="main__reviews">
                    <h4>Отзывы</h4>
                    <div className="main__reviews__wrapper">
                        {reviews}
                    </div>

           </section>
}
