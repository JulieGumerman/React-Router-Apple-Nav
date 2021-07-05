import React from "react";
import { music } from "../data";
import SubNav from "./SubNav";

function Music() {
    return(
        <div>
            <SubNav items={music} />
            <h1>Because who doesn't like iTunes?</h1>
        </div>
    )
}

export default Music;