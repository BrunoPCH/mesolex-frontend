/* global Vue, axios*/
// 1.Crear el componente
let libroEspecieCardComponent = {
  // 1.1 Especificar nombre de la plantilla
  template: "#libro-especie-card-template",
  // 1.2 Propiedad de entrada
  props: {
    especie: {
      type: String,
      default: "sin especie",
      requiered: true,
    },
  },
  // 1.3 Definir data del componente
  data() {
    return {
      especie: {},
    };
  },
  // 4 Se crea HOOK
  created() {
    //
    let nombre = this.especie;
    // 4.2 haciendo fetch de los datos con axios
    axios.get(`especies.json`).then((resp) => {
      //Asignando datos de respuesta al componente
      this.especie = resp.data;
    });
  },
};
// 2 Registrar componente en instancia de vue
Vue.component(
  "libro-especie-card", //2.1 nombre del componente
  libroEspecieCardComponent //2.2 Asignamos el componente
);
new Vue({
  el: "#vue-grid-list",
});
