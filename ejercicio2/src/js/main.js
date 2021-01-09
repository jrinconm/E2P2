// Importamos los componentes
// NOTA: para que funcione con Webpack, hemos instalado el plugin "vue-loader"
// Se instala con "npm install vue vue-loader vue-template-compiler css-loader"
// Los ficheros package.json y webpack.config.js se han adaptado para ello en este ejemplo siguiendo https://vue-loader.vuejs.org/guide/#manual-setup


// Registramos componente cargado

let app = new Vue({
	// Indicamos el ID del Div que contiene la APP Vue
	el: '#app',	
	data: {
	},
	// Para sacar botones segun tipo
	computed: {
	},
	methods: {	
	}
});