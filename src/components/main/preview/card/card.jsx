import React from 'react';
import "./card.scss"

const Card = ({ card }) => {
    const { name, company, theme, title, email, message, fileName, fileURL } = card;
    let bgColor,textColor;
    if (theme === "dark") {
        bgColor = "#1e272e"
        textColor = "#f1f2f6"
    } else {
        bgColor = "#f1f2f6";
        textColor = "#1e272e";
    }
    return (
        <li className="card" style={{backgroundColor:`${bgColor}`,color:`${textColor}`}}>
            <img src={fileURL} className="card__thumb" alt={fileName} />
            <div className="card__info">
                <div className="card__info__name">
                    <h6 className="card__info__name__name">{name}</h6>
                    <p className="card__info__name__company">{company}</p>
                </div>
                <div className="card__info__details">
                    <p className="card__info__details__title">{title}</p>
                    <p className="card__info__details__email">{email}</p>
                    <p className="card__info__details__message">{message}</p>
                </div>
            </div>
        </li>
    );
};

export default Card;