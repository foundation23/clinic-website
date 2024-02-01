import React, {useState} from 'react';
import "./question-item.css"
import SortSvg from "./SortSvg";

const QuestionItem = ({item}) => {
    const [active, setActive] = useState(false)

    function handleClick() {
        setActive(!active);
    }

    return (
        <div className="question-item container" onClick={handleClick}>
            <div className="question-item__title">
                <h2>{item.title}</h2>
                <div className="question-item__title__img">
                    {active === true ? <SortSvg name='minus'/> : <SortSvg name='plus'/>}
                </div>
            </div>
            <div className="question-item__text">
                {active === true ? <p>{item.text}</p> : ''}
                {active === true ? <p>{item.text2}</p> : ''}
            </div>
            <div className="question-item__text__min-screen">
                <p>{item.text}</p>
                <p>{item.text2}</p>
            </div>

        </div>
    );
};

export default QuestionItem;