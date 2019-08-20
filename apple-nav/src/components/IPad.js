import React from "react";
import SubNav from "./SubNav";
import { iPads } from "../data";

function IPad() {
    return(
        <div>
            <SubNav items={iPads}/>
            <h1>Get your ipads here</h1>
        </div>
    )
}

export default IPad;