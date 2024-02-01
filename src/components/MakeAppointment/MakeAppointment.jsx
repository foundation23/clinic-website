import React from 'react';
import Button from "../../assets/Button";
import "./makeAppointment.css"
import SortSvg from "../../assets/SortSvg";

const MakeAppointment = ({active, setActive}) => {
    return (
        <div className={active ? "make-appointment active" : "make-appointment"}>
            <div className="make-appointment__wrapper container">
                <div onClick={() => setActive(false)} className="make-appointment__modal__close">
                    <SortSvg name="close"/>
                </div>
                <div className="make-appointment__modal">
                    <div className="make-appointment__modal__wrapper">
                        <div className="make-appointment__modal__title">
                            <h1>Запишитесь на приём онлайн</h1>
                            <p>Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали</p>
                        </div>
                        <div onClick={() => setActive(false)} className="make-appointment__modal__close-min">
                            <SortSvg name="close" color="#569B89"/>
                        </div>
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="ФИО"
                        />
                        <input
                            type="number"
                            placeholder="Номер телефона"
                        />
                        <input
                            type="email"
                            placeholder="Электронная почта"
                        />
                        <div className="make-appointment__modal__button">
                            <Button name="Записаться"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;