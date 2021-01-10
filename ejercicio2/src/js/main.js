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
		color: "",
	},
	// Para sacar botones segun tipo
	computed: {	
		matriz: function (){
			/* let arrayBidimensional= new Array(60);
			for (let i = 0; i < 60; i++) {
				arrayBidimensional[i] = new Array(60);
				for (let y = 0; y < 60; y++){
					arrayBidimensional[i][y] = "white"
				}
			}*/
			let arrayBidimensional = {};
			for (let i = 0; i < 60; i++) {
				let arrayBidimensional2 = {};
				for (let y = 0; y < 60; y++){
					arrayBidimensional2['celda'+y] = {
						color : "white"
					}
				}
				arrayBidimensional['fila'+i] = {
					fila : arrayBidimensional2
				}
			}
			return arrayBidimensional;
		},
	},
	watch: {
		matriz: {
			deep: true,
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
			//return this.matriz[fila+x][celda+y];
		},
		actualizaColor: function (event,posY,posX){
			let filaTemp = this.matriz[posY].slice(0)
			filaTemp[posX] =  this.color;
			this.$set(this.matriz[posY],posX,this.color);
			console.log("Y: " + posY + " X: " + posX);
			}
	}
});