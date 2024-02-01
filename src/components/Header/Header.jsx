import React, {useState} from 'react';
import "./header.css"
import Button from "../../assets/Button";
import Navbar from "../../assets/Navbar";
import SortSvg from "../../assets/SortSvg";
import NavMenu from "../../assets/navMenu";

const Header = ({setActive}) => {

    const [activeMenu, setActiveMenu] = useState(false)
    return (
        <header>
            <section className="top container">
                <div className="top__location__wrapper">
                    <div className="top__menu" onClick={() => setActiveMenu(!activeMenu)}>
                        {activeMenu ? <SortSvg name="close-menu"/> : <SortSvg name="menu"/>}
                    </div>
                    <SortSvg name="logo"/>
                    <div className="top__location">
                        <SortSvg name="location"/>
                        <div className="top__location__place">
                            <p className="top__location__place__city">Ростов-на-Дону</p>
                            <p className="top__location__place__street">ул.Ленина, 2Б</p>
                        </div>
                    </div>
                </div>
                <div className="top__make">
                    <div className="top__make__appointment">
                        <SortSvg name="whatsapp-header"/>
                        <span> +7(863) 000 00 00</span>
                    </div>
                    <Button name="Записаться на прием" setActive={setActive}/>
                </div>
                <div className="top__tel-location">
                    <span> +7(863) 000 00 00</span>
                    <p>Ростов-на-Дону</p>
                </div>

            </section>
            <section className="bottom">
                <Navbar/>
            </section>
            <NavMenu active={activeMenu} setActiveMenu={setActiveMenu} setActive={setActive}/>
        </header>
    );
};

export default Header;