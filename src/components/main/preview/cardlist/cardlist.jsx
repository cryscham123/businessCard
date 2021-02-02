import React from 'react';
import Card from '../card/card';
import "./cardlist.scss";

const Cardlist = ({cards}) => {
    return (
        <ul className="cardlist">
            {Object.keys(cards).map(key => <Card key={key} card={cards[key]}/>)}
        </ul>
    );
};

export default Cardlist;