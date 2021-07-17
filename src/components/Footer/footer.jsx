import React from "react";
import "./footer..scss"

let today = new Date(); //
let year = today.getFullYear();

export const Footer = () =>
    (<section className="footer">
        <a href="https://t.me/pavpildan" className="footer_author">by @pavpildan {year}</a>
    </section>)