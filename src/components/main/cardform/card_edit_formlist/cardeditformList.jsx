import React from 'react';
import "./cardeditformlist.scss";
import CardEditForm from '../card_edit_form/card_edit_form';

const CardeditformList = ({ FileInput, cards, onInfo, onDelete, updateCard }) => {
    const nullCard = {
        id: Date.now(),
        name: "",
        company: "",
        theme: "dark",
        email: "",
        message: "",
        fileName: "",
        fileURL: ""
    }
    const handleInfo = value => {
        onInfo(value)
    }
    const handleDelete = value => {
        onDelete(value);
    }
    const handleUpdate = value => {
        updateCard(value);
    }
    return (
        <ul className="cardeditformList">
            {Object.keys(cards).map(key => <CardEditForm key={key} FileInput={FileInput} card={cards[key]} isNew={false} onInfo={handleInfo} onDelete={handleDelete} updateCard={handleUpdate} />)}
            <CardEditForm key={nullCard.id} card={nullCard} isNew={true} onInfo={handleInfo} onDelete={handleDelete} FileInput={FileInput} />
        </ul>
    );
};

export default CardeditformList;