import { useCounterStore } from "../../store/main";
const counter = useCounterStore();

export default {
  name: "increase-count",
  data() {
    return {
      counter,
    };
  },
  methods: {
    increase: counter.increment,
  },
  components: {},
};
