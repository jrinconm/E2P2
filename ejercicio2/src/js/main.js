// Importamos los componentes
import ComponenteCelda from '../components/ComponenteCelda.vue'
// Importamos los componentes
// NOTA: para que funcione con Webpack, hemos instalado el plugin "vue-loader"
// Se instala con "npm install vue vue-loader vue-template-compiler css-loader"
// Los ficheros package.json y webpack.config.js se han adaptado para ello en este ejemplo siguiendo https://vue-loader.vuejs.org/guide/#manual-setup


// Registramos componente cargado
Vue.component('componente-celda', ComponenteCelda)
// NOTA: para que funcione con Webpack, hemos instalado el plugin "vue-loader"
// Se instala con "npm install vue vue-loader vue-template-compiler css-loader"
// Los ficheros package.json y webpack.config.js se han adaptado para ello en este ejemplo siguiendo https://vue-loader.vuejs.org/guide/#manual-setup


// Registramos componente cargado

let app = new Vue({
	// Indicamos el ID del Div que contiene la APP Vue
	el: '#app',	
	data: {
		colores: ["red","green","blue","yellow","purple","white"],
	},
	// Para sacar botones segun tipo
	computed: {	
		matriz: function (){
			let arrayBidimensional= new Array(60);
			for (let i = 0; i < 60; i++) {
				arrayBidimensional[i] = new Array(60);
			}
			return arrayBidimensional;
		}
	},
	methods: {
		eligeColor: function(colorElegido){
			this.color=colorElegido;
			console.log(this.color);
		},
		fila: function(numero)	{
			return "fila" + numero;
		},
		borrar: function(){

		},
		miracolor(x,y){
			return matriz[x][y];
		},
		actualizaColor: function (event){
			this.color=this.datos;
			}

	}
});