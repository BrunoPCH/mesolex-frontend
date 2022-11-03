// export default {
//   name: "App",
//   data() {
//     return {
//       isGrid: true,
//     };
//   },
//   methods: {
//     toggleView() {
//       this.isGrid = !this.isGrid;
//     },
//   },
// };
new Vue({
  el: "#app",
  data() {
    return {
      isGrid: true,
    };
  },
  methods: {
    toggleView() {
      this.isGrid = !this.isGrid;
    },
  },
});
