import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavBarStyle = styled.ul`
    margin-top: 0px;
    max-width: 100%;
    display: flex;
    align-items: left;
    justify-content: space-between;
    background-color: olive;
    padding: 1em;
    vertical-align: middle;
    font-weight: bolder;
    `

const NavBarStyleLi = styled.li`
    list-style-type : none;
    text-align: center;
    object-position: middle;
    max-height: 100%;
`

const NavBarCart = styled.img`
justify-content: middle;
padding-right:.3em;
height:20px;
    `


const NavBarStyleLink = {
    textDecoration: "none",
    color: 'white',
    verticalAlign: "center",
    display: 'flex',
    padding: '.5em'
}
    

const NavBar = ({basketItems}) => {

    const basketAmount = basketItems.length;

    return (
        <NavBarStyle>
            <NavBarStyleLi>
                <Link to='/' style={NavBarStyleLink}>Home</Link>
            </NavBarStyleLi>
            <NavBarStyleLi>
                <Link to='/basket' style={NavBarStyleLink}><NavBarCart src='/cart.png'/> {basketAmount}</Link>
            </NavBarStyleLi>
        </NavBarStyle>

    )
}

export default NavBar