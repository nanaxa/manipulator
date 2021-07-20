import React from "react";
import "./contacts.scss";
import { FaPhone } from 'react-icons/fa';
import {tel} from "../../../index";

export  const Contacts = () => (
    <section className="main__contacts">

            <h3>Контакты</h3>

            <ul>
                <li><span>География работы:</span> по всей Томской области</li>
                <li><a  href={"tel:"+tel}><FaPhone size="15px"/> {tel}</a></li>
                <li><span>Время работы:</span> <br/> Пн-Вск: c 8 до 22:00</li>
            </ul>


    </section>
)