import React from "react";
import SubNav from "./SubNav";
import { watch } from "../data";

function Watch() {
    return(
        <div>
            <SubNav items={watch}/>
            <h1>I work.</h1>
        </div>
    )
}

export default Watch;