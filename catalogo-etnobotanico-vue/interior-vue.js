/* global Vue*/

// importando los assets
import especies from "./especies.json" assert { type: "json" };

// Auxiliary Variables
const topPanelOptions = {
  mixtec: "_mixteco",
  nahuatl: "_nahuatl",
  totonac: "_totonaco",
  comment: "comentario"
};

const bottomPanelOptions = {
  english: "_ing",
  spanish: "_esp",
};

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
    text: {
      type: String,
      default: topPanelOptions.mixtec
    }
  },
  //1.3 se define data del componente
  data() {
    return {
      especie: {},
      translationLanguage: bottomPanelOptions.spanish,
      playing: false,
      audio: null
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
  methods: {
    setLanguageText(language) {
      this.translationLanguage = bottomPanelOptions[language]
    },
    isButtonActive(buttonName) {
      return bottomPanelOptions[buttonName] === this.translationLanguage;
    },
    playPause() {
      // Initializing audio variable
      if (!this.audio) {
        this.audio = this.$refs.audio;
      }
      if (this.playing) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.playing = !this.playing;
    },
    resetAudio() {
      this.audio.currentTime = 0;
    },
    stop() {
      this.playing = false;
    },
    getAudioUrl() {
      return this.text === 'comentario' ? '' : this.especie[`audio${this.text}_url`];
    },
    getTopText() {
      return this.especie[this.text === 'comentario' ? `comentario${this.translationLanguage}` : `texto${this.text}`]
    }
  },
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
      topPanelSelection: topPanelOptions.mixtec,
      playing: false,
      visibleSideBar: false,
      especies
      // bottomPanelSelection: bottomPanelOptions.SPANISH
    }
  },
  methods: {
    setLanguageText(language) {
      this.playing = false;
      this.$refs.translatedText.stop();
      this.topPanelSelection = topPanelOptions[language];
      this.$refs.translatedText.setLanguageText("spanish");
      if (language === "comment") {
        this.$refs.translatedText.$refs.translationPanel.style.order = "-1";
      }
      else {
        this.$refs.translatedText.$refs.translationPanel.style.order = "0";
      }
    },
    isButtonActive(buttonName) {
      return topPanelOptions[buttonName] === this.topPanelSelection;
    },
    playPause() {
      this.playing = !this.playing
      this.$refs.translatedText.playPause();
    },
    resetAudio() {
      this.$refs.translatedText.resetAudio();
    },
    toggleSideBar() {
      this.visibleSideBar = !this.visibleSideBar;
      if (this.visibleSideBar) {
        this.$refs.sidebarMenu.style.left = "0"
      } else {
        this.$refs.sidebarMenu.style.left = "-41.5%"
      }
    }
  },
  computed: {
    isCommentSelected() {
      console.log(this.topPanelSelection === topPanelOptions.comment)
      return this.topPanelSelection === topPanelOptions.comment
    }
  }
});
