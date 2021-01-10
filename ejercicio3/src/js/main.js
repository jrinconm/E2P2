import ComponenteOnza from '../components/ComponenteOnza.vue'
// Importamos los componentes
// NOTA: para que funcione con Webpack, hemos instalado el plugin "vue-loader"
// Se instala con "npm install vue vue-loader vue-template-compiler css-loader"
// Los ficheros package.json y webpack.config.js se han adaptado para ello en este ejemplo siguiendo https://vue-loader.vuejs.org/guide/#manual-setup


// Registramos componente cargado
Vue.component('componente-onza', ComponenteOnza)
let app = new Vue({
	// Indicamos el ID del Div que contiene la APP Vue
	el: '#app',	
	data: {
		color: "normal",
		bloqueado: false,
		onzas: {},
	},
	created: function (){
		for (let i = 0; i < 4; i++) {
			let arrayBidimensional2 = {};
			for (let y = 0; y < 5; y++){
				Vue.set(arrayBidimensional2,['celda'+y],"white")				
			}
			Vue.set(this.onzas,['fila'+i],arrayBidimensional2);
		}
	},
	methods: {
		comerfila: function (){
			let filaComer = Math.floor(Math.random() * 4); 
			let fila="fila"+filaComer;
			for (let y = 0; y < 5; y++){
				Vue.set(this.onzas[fila],"celda"+y,"comido");
			}	
		},
		comercolumna: function (){
			let filaComer = Math.floor(Math.random() * 5); 
			let celda="celda"+filaComer;
			for (let y = 0; y < 4; y++){
				Vue.set(this.onzas["fila"+y],celda,"comido");
			}	
		},
		nocomer: function (){
			this.bloqueado=true;
		},
	}
});