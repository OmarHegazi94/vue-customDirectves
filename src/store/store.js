import { createStore } from "vuex";

export const store = createStore({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: (state) => {
            return state.counter * 2;
        }
    }
});


