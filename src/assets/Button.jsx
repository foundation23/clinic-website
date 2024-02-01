import React from 'react';
import "./button.css";


const Button = ({name, color, setActive}) => {
    return (
        <div>
            <button
                className={color ? "button__alternative" : "button__standart"}
                onClick={setActive ? () => setActive(true) : console.log()}
            >{name}</button>
        </div>
    );
};

export default Button;