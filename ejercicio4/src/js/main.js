//Funcion que mueve las letras uno hacia delante
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
      // Descifra la clave
      return cifraCesar(this.clave)
    }
  },
  methods: {
    // Realiza la petición axios
    pideclave: function(){
      // Uso formdata 
      let formDa = new FormData();
      // Añade la pareja a FormData
      formDa.append('accion', 'pedirClave');
      //realiza la peticion
      axios.post("https://apuntesfpinformatica.es/DWEC/S4ND1EG0/ordenes.php",formDa)
      // Asocio los datos del resultado a clave
      .then(result => this.clave = result.data )
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
      this.disabled=false;
    },
    // Funcion que comprueba el resultado del ataque
    comprueba: function(datos){
      // Si el ataque es ERROR
      if(datos==="ERROR"){
        alert(datos);
        //Si el ataque es TODOOK
      } else if(datos==="TODOOK"){
        // Activo los bloqueos
        this.bloqueo=true;
        this.disabled=true;
        alert("VICTORIA");
        // Aquí no se debería llegar
      } else (alert("Aquí no se debe llegar"))
    },
    // Funcion al hacer click en atacar
    ataca: function(){
      // Valores buenos
      /* let AtaqueCPU = {
        'tipoAtaque' : "DDOS",
        'IPDestino' : "256.256.256.256",
        'Clave' : "DBODBNVTB"
      }*/
      // Creo el objeto AtaqueCPU
      let AtaqueCPU = {
        'tipoAtaque' : this.ataque,
        'IPDestino' : this.ip,
        'Clave' : this.calculada
      }
      // Creo el FormData
      let formDa = new FormData();
      // Añado la accion
      formDa.append('accion', 'AtaqueCPU');
      // Paso a json el objeto y lo añado
      formDa.append('objeto', JSON.stringify(AtaqueCPU));
      // Realizo la peticion
      axios.post("https://apuntesfpinformatica.es/DWEC/S4ND1EG0/ordenes.php",formDa)
      .then(result => {
        let resultado = result.data;
        // Compruebo el resultado
        this.comprueba(resultado)
        })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });      
    }
  },
});