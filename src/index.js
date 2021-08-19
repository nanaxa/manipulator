import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Header} from "./components/header/header";
import {Main} from "./components/main/main";
import { Footer } from "./components/Footer/footer"

let heading = "Манипулятор Томск";// Заголовок в хедере и на главной
export let tel = "+79095380242"; // телефон для звонка в фирму



ReactDOM.render(
  <React.StrictMode>
        <Header head={heading} tel={tel} />
        <Main />
        <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
