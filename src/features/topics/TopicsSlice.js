import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topicsSlice',
    initialState: {
        topics: {},
        quizzes: {},
        cards: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            const newTopic = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
            state.topics[id] = newTopic;
        }
    },
    extraReducers: {
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;