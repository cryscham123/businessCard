import React, { useState } from 'react';
import Cardform from '../../components/main/cardform/cardform';
import Preview from '../../components/main/preview/preview';
import "./home.scss";

const Home = ({FileIput}) => {
    const [cards, setCards] = useState({
        '1':{
            id: 1,
            name: "TomKim",
            company: "bedal's party",
            theme: "dark",
            title: "Software Emgineer",
            email: 'cryscham123@naver.com',
            message: "what",
            fileName: "tomkim",
            fileURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU",
        },
        '2':{
            id: 2,
            name: "TomKim",
            company: "bedal's party",
            theme: "light",
            title: "Software Emgineer",
            email: 'cryscham123@naver.com',
            message: "what",
            fileName: "tomkim",
            fileURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU",
        },
        '3':{
            id: 3,
            name: "TomKim",
            company: "bedal's party",
            theme: "dark",
            title: "Software Emgineer",
            email: 'cryscham123@naver.com',
            message: "whatdaskjklslsjlk",
            fileName: "tomkim",
            fileURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU",
        }
    });
    const handleInfo = value => {
        setCards(prev => {
            const added = { ...prev };
            added[value.id] = value;
            return added;
        })
    }
    const handleDelete = value => {
        setCards(prev => {
            const deleted = { ...prev };
            delete deleted[value];
            return deleted;
        });
    }
    const handleUpdate = value => {
        setCards(prev => {
            const updated = { ...prev };
            updated[value.id][value.name] = value.value;
            return updated;
        });
    }
    return (
        <div className="home">
            <Cardform FileIput={FileIput} cards={cards} onInfo={handleInfo} onDelete={handleDelete} updateCard={handleUpdate}/>
            <Preview cards={cards} />
        </div>
    );
};

export default Home;