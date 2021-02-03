import { dbServie } from './fbase';

class cardMaker{
    saveCard(uid, card) {
        dbServie.ref(`${uid}/cards`).set(card);
    }
    deleteCard(uid) {
        dbServie.ref(`${uid}/cards`).remove();
    }
    syncCards(uid, onUpdate) {
        const ref = dbServie.ref(`${uid}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }
}

export default cardMaker;