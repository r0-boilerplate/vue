import { getImageUrl } from "../../utils/util";

const logo_list = [
  {
    title: "vue3",
    img: getImageUrl("icons/vue.svg"),
  },
  {
    title: "vite",
    img: getImageUrl("icons/vite.svg"),
  },
  {
    title: "pinia",
    img: getImageUrl("icons/pinia.svg"),
  },
  {
    title: "vue-router",
    img: getImageUrl("icons/vue.svg"),
  },
  {
    title: "sass",
    img: getImageUrl("icons/sass.svg"),
  },
];

export default {
  name: "logo-bar",
  data() {
    return {
      logo_list,
    };
  },
  methods: {},
  components: {},
};
