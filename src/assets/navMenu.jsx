import React from 'react';
import "./nav-menu.css"
import Navbar from "./Navbar";
import Button from "./Button";

const NavMenu = ({active, setActiveMenu, setActive}) => {

    const openForm =() => {
        setActiveMenu(!active)
        setActive(true)
    }
    return (
        <div className={active? "nav-menu active" : "nav-menu"}>
            <div className="nav-menu__wrapper">
                <div className="nav-menu__modal">
                    <Navbar/>
                    <div onClick={openForm}>
                        <Button name="Записаться на прием"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavMenu;