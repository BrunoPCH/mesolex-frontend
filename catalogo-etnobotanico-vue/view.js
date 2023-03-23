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
      especies: [
        "Sambucus nigra",
        "Amaranthus hybridus",
        "Amaranthus spinosus",
        "Spondias purpurea",
        "Plumeria rubra",
        "Bidens odorata",
        "Porophyllum ruderale",
        "Tagetes erecta",
        "Crescentia cujete",
        "Parmentiera aculeata",
        "Tabebuia rosea",
        "Wigandia urens",
        "Bursera simaruba",
        "Rhipsalis baccifera",
        "Celtis iguanaea",
        "Trema micrantha",
        "Canna indica",
        "Couepia polyandra",
        "Licania platypus",
        "Commelina erecta",
        "Tradescantia zebrina",
        "Cuscuta",
        "Ipomoea batatas",
        "Ipomoea indica",
        "Merremia umbellata",
        "Costus",
        "Pseudobombax ellipticum",
      ],
    };
  },
  methods: {
    toggleView() {
      this.isGrid = !this.isGrid;
    },
  },
});
