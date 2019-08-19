import React from "react";
import SubNav from "./SubNav";
import styled from "styled-components";
import { Link } from "react-router-dom";

let HeaderDiv = styled.div`

    background: #323232;
    color: white;
    font-family: sans-serif;
    display: flex;
`
const NavBar = styled.div`
    border: 1px red solid;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function MainNav() {
    return(
        <div>
            <HeaderDiv>
                <NavBar>
                <Link to="/" className="nav-link">Apple Icon</Link>
                <Link to="/mac" className="nav-link">Mac</Link>
                <Link to="/ipad" className="nav-link">iPad</Link>
                <Link className="nav-link">iPhone</Link>
                <Link className="nav-link">Watch</Link>
                <Link className="nav-link">TV</Link>
                <Link className="nav-link">Music</Link>
                <Link className="nav-link">Support</Link>
                </NavBar>
            </HeaderDiv>
        </div>
    )
}

export default MainNav;