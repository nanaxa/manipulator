import React from "react";
import "./main.scss"
import {Description} from "./description/description.jsx" ;
import {Option} from "./Options/Options";
import {Stripe} from "./stripe/stripe";
import {Advant} from "./advantages/advant";

export const Main = (props) => {
    return <div className="main">
        <Description />
        <Option  />
        <Stripe tel={props}/>
        <Advant />
         </div>
}