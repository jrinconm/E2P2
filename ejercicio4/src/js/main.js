// Declaramos la aplicación VUE
let app = new Vue({
  // Indicamos el DIV donde esta nuestra APP Vue
  el: '#app',
  data: {
    usuarios: [],
    info: null
  },
  /*
  Al ser montada la aplicacion de Vue 2 https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  Hacemos una peticion GET a la URL. Al recibir la respuesta en formato JSON, simplemente mapeamos 
  dicha respuesta a la variable usuarios
  */
  mounted: function () {  
    let mensaje = {
      'tipoAtaque' : "DDOS",
      'IPDestino' : "256.256.256.256",
      'Clave' : "DBODBNVTB"
    }
    let formDa = new FormData();
    formDa.append('accion', 'pedirClave');
    console.log(formDa);
    axios.post("https://apuntesfpinformatica.es/DWEC/S4ND1EG0/ordenes.php",formDa)
    .then(result => this.info = result )
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  }
});