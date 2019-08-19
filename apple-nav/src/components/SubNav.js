import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

let ThatOleSubNav=styled.div`
    background: #f7f7f7;
`

function SubNav(props) {
    const products = props.items;
    const navList = products.map(item => {
        return <Link key={item}>{item}</Link>
    })
    console.log("nav list: ", navList);
    return(
        <ThatOleSubNav>
            {navList}
        </ThatOleSubNav> 
    )
}

export default SubNav;