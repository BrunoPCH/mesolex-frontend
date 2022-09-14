/* global Vue, axios*/

// importando los assets
import especies from "./especies.json" assert { type: "json" };

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
    // Se extrae el nombre de la propiedad
    let nombre = this.especie;
    // Se busca la informacion de al especie en el arreglo
    // de especies con Array.prototype.find()
    let especieEncontrada = especies.find(
      (especie) => especie.nombre_cientifico === nombre
    );
    this.especie = especieEncontrada;
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
