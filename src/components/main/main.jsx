import React from "react";
import "./main.scss"
import {Description} from "./description/description.jsx" ;
import {Option} from "./Options/Options";

export const Main = () => {
    return <div className="main">
        <Description />
        <Option />
    </div>
}