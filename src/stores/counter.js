import { defineStore } from "pinia"

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0
    }),
    getters: {
        getMultiply: (state) => state.count * 2,
        getDividedBy: (state) => (val) => state.count / val,
    },
    actions: {
        incrementBy(val) {
            this.count += val
        }
    }
})