import React from 'react';
import Cardlist from './cardlist/cardlist';
import "./preview.scss";

const Preview = ({ cards }) => {
    return (
        <section className="preview">
            <h3 className="preview__name">Card Preview</h3>
            <Cardlist cards={cards}/>
        </section>
    );
};

export default Preview;