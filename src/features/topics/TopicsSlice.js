import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
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
        "quizzes/addQuiz": (state, action) => {
            const { topicId, id } = action.payload;
            console.log('Adding Quiz ID')
          state.topics[topicId].quizIds.push(id);
        }
      }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;