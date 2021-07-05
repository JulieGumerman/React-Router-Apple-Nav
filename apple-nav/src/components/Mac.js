import React from "react";
import SubNav from "./SubNav";
import { macProducts } from "../data";

function Mac() {
    console.log(macProducts);
    // const products = macProducts.map(product => {
    //     return (<Link>{product}</Link>)
    // })

    return (
        <div>
            <SubNav items={macProducts}/> 
            <h2>Yay! Macbooks!</h2>
        </div>
    )
}

export default Mac;