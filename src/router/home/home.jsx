import React, { useEffect, useState } from 'react';
import Cardform from '../../components/main/cardform/cardform';
import Preview from '../../components/main/preview/preview';
import "./home.scss";

const Home = ({ FileInput, userobj, cardRef }) => {
    const { uid } = userobj;
    const [cards, setCards] = useState({});
    useEffect(() => {
        const stopSync = cardRef.syncCards(uid, cards => setCards(cards))
        return () => stopSync()
    }, [uid, cardRef])
    const handleInfo = value => {
        setCards(prev => {
            const added = { ...prev };
            added[value.id] = value;
            cardRef.saveCard(uid, added);
            return added;
        })
    }
    const handleDelete = value => {
        setCards(prev => {
            const deleted = { ...prev };
            delete deleted[value];
            cardRef.deleteCard(uid);
            return deleted;
        });
    }
    const handleUpdate = value => {
        setCards(prev => {
            const updated = { ...prev };
            updated[value.id][value.name] = value.value;
            cardRef.saveCard(uid, updated);
            return updated;
        });
    }
    return (
        <div className="home">
            <Cardform FileInput={FileInput} cards={cards} onInfo={handleInfo} onDelete={handleDelete} updateCard={handleUpdate}/>
            <Preview cards={cards} />
        </div>
    );
};

export default Home;