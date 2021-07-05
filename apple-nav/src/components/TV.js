import React from "react";
import SubNav from "./SubNav";
import { tv } from "../data";

function TV() {
    return(
        <div>
            <SubNav items={tv} />
            <h1>TV! Not a fan!!!</h1>
        </div>
    )
}

export default TV;