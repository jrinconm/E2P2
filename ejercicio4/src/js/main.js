//Funcion que mueve las letras 1 a su valor
function cifraCesar(palabra) {
  // Si no hay palabra no hago nada
  if(palabra){
    // Separo las letras
    var letras = palabra.split("");
    // Recorro todas las letras
    for(var i = 0; i < letras.length; i++) {
      // Son mayusculas
      var n = letras[i].charCodeAt() - 'A'.charCodeAt();
      n = (n + 1) % 26; 
      letras[i] = String.fromCharCode(n + 'A'.charCodeAt());
    }
    // Junto las letras de nuevo
    return letras.join("");
  }
}
// Declaramos la aplicación VUE
let app = new Vue({
  // Indicamos el DIV donde esta nuestra APP Vue
  el: '#app',
  data: {
    usuarios: [],
    disabled: true,
    ataque: null,
    ip: null,
    clave: null,
    info: null,
    bloqueo: false
  },
  computed: {
    calculada: function(){
      return cifraCesar(this.clave)
    }
  },
  methods: {
    pideclave: function(){
      let formDa = new FormData();
      formDa.append('accion', 'pedirClave');
      axios.post("https://apuntesfpinformatica.es/DWEC/S4ND1EG0/ordenes.php",formDa)
      .then(result => this.clave = result.data )
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
      this.disabled=false;
    },
    comprueba: function(datos){
      if(datos==="ERROR"){
        alert(datos);
      } else if(datos==="TODOOK"){
        this.bloqueo=true;
        this.disabled=true;
        alert("VICTORIA");
      } else (alert("Aquí no se debe llegar"))
    },
    ataca: function(){
      // Valores buenos
      /* let AtaqueCPU = {
        'tipoAtaque' : "DDOS",
        'IPDestino' : "256.256.256.256",
        'Clave' : "DBODBNVTB"
      }*/
      let AtaqueCPU = {
        'tipoAtaque' : this.ataque,
        'IPDestino' : this.ip,
        'Clave' : this.calculada
      }
      let formDa = new FormData();
      formDa.append('accion', 'AtaqueCPU');
      formDa.append('objeto', JSON.stringify(AtaqueCPU));
      axios.post("https://apuntesfpinformatica.es/DWEC/S4ND1EG0/ordenes.php",formDa)
      .then(result => {
        let resultado = result.data;
        this.comprueba(resultado)
        })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
      
    }
  },
  /*
  Al ser montada la aplicacion de Vue 2 https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  Hacemos una peticion GET a la URL. Al recibir la respuesta en formato JSON, simplemente mapeamos 
  dicha respuesta a la variable usuarios
  */
  mounted: function () {  

  }
});