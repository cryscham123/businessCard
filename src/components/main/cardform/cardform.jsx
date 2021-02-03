import React from 'react';
import "./cardform.scss";
import CardeditformList from './card_edit_formlist/cardeditformList';

const Cardform = ({ FileInput,cards,onInfo,onDelete,updateCard }) => {
    const handleInfo = value => {
        onInfo(value);
    }
    const handleDelete = value => {
        onDelete(value)
    }
    const handleCard = value => {
        updateCard(value)
    }
    return (
        <section className="edit">
            <h3 className="edit__name">Card Maker</h3>
            <CardeditformList FileInput={FileInput} cards={cards} onInfo={handleInfo} onDelete={handleDelete} updateCard={handleCard}/>
        </section>
    );
};

export default Cardform;