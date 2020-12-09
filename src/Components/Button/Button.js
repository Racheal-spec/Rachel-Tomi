import React from 'react';
import './Button.scss';

const STYLES = [
    "btn--primary",
    "btn--secondary"
]

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
   }) => {

    const checkBtnStyles = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
    return(
<button className={`btn ${checkBtnStyles}`} 
onClick={onClick} type={type}>
    {children}
</button>
    )
}

export default Button;