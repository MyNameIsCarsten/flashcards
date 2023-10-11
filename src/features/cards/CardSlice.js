import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'cardSlice',
    initialState: {
        cards: {},
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            const newCard = {
                id: id,
                front: front,
                back: back,
            }
            state.cards[id] = newCard;
        }
    }
});

export const { addCard } = cardSlice.actions;
export const selectCardById = (id) => (state) => state.cards.cards[id];
export default cardSlice.reducer;