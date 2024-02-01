import React from 'react';
import Button from "./Button";
import Doctor from "../img/doctor-working.png";
import DoctorMini from "../img/doctor-min.png"
import "../assets/slider.css"

const Slider = ({setActive}) => {
    return (
        <section className="slider container">
            <div className="slider__check-up">
                <h1>CHECK-UP</h1>
                <p>для мужчин</p>
                <ul>
                    <li><span>Гормональный скрининг</span></li>
                    <li><span>Тестостерон</span></li>
                    <li><span>Свободный тестостерон</span></li>
                    <li><span>Глобулин, связывающий половые гормоны</span></li>
                </ul>
                <p className="slider__check-up__price">Всего 2800₽ <del>3500₽</del></p>
                <div className="slider__check-up__buttons">
                    <div className="slider__check-up__buttons__item">
                        <Button name="Записаться" setActive={setActive}/>
                    </div>
                    <div>
                        <Button name="Подробнее" color="alternative"/>
                    </div>
                </div>
            </div>
            <div className="slider__check-up__img">
                <img src={Doctor} alt="doctor" className="slider__check-up__img__norm"/>
                <img src={DoctorMini} alt="doctor" className="slider__check-up__img__mini"/>
            </div>
        </section>
    );
};

export default Slider;