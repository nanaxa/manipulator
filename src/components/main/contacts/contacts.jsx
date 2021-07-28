import React from "react";
import "./contacts.scss";
import { FaPhone } from 'react-icons/fa';
import {tel} from "../../../index";


export  const Contacts = () => {
    let phone = `+${tel[1]}-${tel[2]}${tel[3]}${tel[4]}-${tel[5]}${tel[6]}${tel[7]}-${tel[8]}${tel[9]}-${tel[10]}${tel[11]}`
    return  <section className="main__contacts">

            <h3>Контакты</h3>

            <ul>
                <li><span>География работы:</span> по всей Томской области</li>
                <li><a  href={"tel:"+tel}><FaPhone size="15px"/> {phone}</a></li>
                <li><span>Время работы:</span> <br/> Пн-Вск: c 8 до 22:00</li>
            </ul>


    </section>
}