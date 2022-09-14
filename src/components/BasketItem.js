import React from 'react';
import styled from 'styled-components';

const StyledBasketItem = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-rows: 1fr;
    padding: 0.5em;
    width: auto;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    white-space: pre-line`

const StyledButton = styled.button`
cursor: pointer;
background: none;
color:inherit;
border:none;
&:hover{
    color:red;
}`

const BasketItem = ({item, onRemoveFromBasket}) => {

    const handleClick = () => {
        onRemoveFromBasket({item})
    }

    return (<>
    
    <StyledBasketItem>
        {item.name}
    </StyledBasketItem>
    <StyledBasketItem>
    £{item.price}.00
    </StyledBasketItem>
    <StyledButton onClick={handleClick}>𝙓</StyledButton>
</>


)}

export default BasketItem