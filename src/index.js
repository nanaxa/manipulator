import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Header} from "./components/header/header";
import {Main} from "./components/main/main";

let heading = "Заказать манипулятор в Томске";// Заголовок в хедере и на главной
let tel = "+79928929292" // телефон для звонка в фирму

ReactDOM.render(
  <React.StrictMode>
        <Header head={heading} tel={tel} />
        <Main />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
