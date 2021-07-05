import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

let ThatOleSubNav=styled.div`
    background: #f7f7f7;
    padding-top: 20px;
    padding-bottom: 20px;
`
let NavContainer=styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`

function SubNav(props) {
    const products = props.items;
    const navList = products.map(item => {
        return <Link className="subnav-links" key={item}>{item}</Link>
    })
    console.log("nav list: ", navList);
    return(
        
        <ThatOleSubNav>
            <NavContainer>
                {navList}
            </NavContainer>
        </ThatOleSubNav> 
    )
}

export default SubNav;