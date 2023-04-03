/* global Vue*/

// importando los assets
import especies from "./especies.json" assert { type: "json" };

//1. creando componente
let paginaInteriorComponente = {
  //1.1 Especificar nombre de plantilla
  template: "#pagina-interior-template",
  //1.2 crear propiedad de entrada
  props: {
    nombre: {
      type: String,
      default: "Pseudobombax ellipticum",
      requiered: true,
    },
  },
  //1.3 se define data del componente
  data() {
    return {
      especie: {},
    };
  },
  // 4 Se crea HOOK
  created() {
    // Se extrae el nombre de la propiedad
    let nombre = this.nombre;
    // Se busca la informacion de al especie en el arreglo
    // de especies con Array.prototype.find()
    let especieEncontrada = especies.find(
      (especie) => especie.nombre_cientifico === nombre
    );
    this.especie = especieEncontrada;
  },
};

// Auxiliary Variables
const topPanelOptions = {
  MIXTEC: "text_mixteco",
  NAHUATL: "text_nahuatl",
  TOTONAC: "text_totonaco",
  COMMENT: "comentario"
};

const bottomPanelOptions = {
  ENGLISH: "_ing",
  SPANISH: "_esp",
};

//2 registrando el componente en Vue
Vue.component(
  "pagina-interior", //nombre del comp
  paginaInteriorComponente // def del componente
);

// Creating main instance
new Vue({
  el: "#contenedor-vue",
  // Component State
  data() {
    return {
      topPanelSelection: topPanelOptions.MIXTEC,
      bottomPanelSelection: bottomPanelOptions.SPANISH
    }
  }
});
