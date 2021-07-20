import React from "react";
import "./main.scss"
import {Description} from "./description/description.jsx" ;
import {Option} from "./Options/Options";
import {Stripe} from "./stripe/stripe";
import {Advant} from "./advantages/advant";
import {Reviews} from "./reviews/reviews";
import {Contacts} from "./contacts/contacts";
import {Maps} from "./Map/map";

export const Main = () => {
    return <div className="main">
        <Description />
        <Option  />
        <Stripe />
        <Advant />
        <Reviews />
        <Contacts/>
        <Maps />
         </div>
}