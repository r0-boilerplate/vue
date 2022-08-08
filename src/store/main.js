import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  getters: {
    msg(state) {
      return `the number is: ${state.count}`;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
