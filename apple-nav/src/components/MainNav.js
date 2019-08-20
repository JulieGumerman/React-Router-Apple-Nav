import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground } from '@fortawesome/free-solid-svg-icons';

let coffee=<FontAwesomeIcon icon={faCampground} />

let HeaderDiv = styled.div`

    background: #323232;
    color: white;
    font-family: sans-serif;
    display: flex;
`
const NavBar = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
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
                <Link to="/" className="nav-link">{coffee}</Link>
                <Link to="/mac" className="nav-link">Mac</Link>
                <Link to="/ipad" className="nav-link">iPad</Link>
                <Link to="/iphone" className="nav-link">iPhone</Link>
                <Link to="/watch"className="nav-link">Watch</Link>
                <Link to="/tv" className="nav-link">TV</Link>
                <Link to="/music" className="nav-link">Music</Link>
                <Link to="/support" className="nav-link">Support</Link>
                </NavBar>
            </HeaderDiv>
        </div>
    )
}

export default MainNav;