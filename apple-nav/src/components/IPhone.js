import React from "react";
import { iPhone } from "../data";
import SubNav from "./SubNav";

function IPhone() {
    console.log("iPhone", iPhone);
    return(
        <div>
            <SubNav items = {iPhone} />
            <h1>They're kinda cool, I guess...</h1>
        </div>
    )
}

export default IPhone;