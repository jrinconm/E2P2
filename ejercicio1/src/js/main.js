import ComponenteTarjeta from '../components/ComponenteTarjeta.vue'
// Importamos los componentes
// NOTA: para que funcione con Webpack, hemos instalado el plugin "vue-loader"
// Se instala con "npm install vue vue-loader vue-template-compiler css-loader"
// Los ficheros package.json y webpack.config.js se han adaptado para ello en este ejemplo siguiendo https://vue-loader.vuejs.org/guide/#manual-setup


// Registramos componente cargado
Vue.component('componente-tarjeta', ComponenteTarjeta)

let app = new Vue({
	// Indicamos el ID del Div que contiene la APP Vue
	el: '#app',	
	data: {
		personajes: [
		{
			id:1,
			nombre: "Gon Freecss",
			adulto: false,
			tipo: "Intensificación",
			imagen: "img/Gon-2011.png"
		},
		{
			id:2,
			nombre: "Killua Zoldyck",
			adulto: false,
			tipo: "Transformación",
			imagen: "img/Killua-2011.png"
		},
		{
			id:3,
			nombre: "Kurapika",
			adulto: false,
			tipo: "Materialización",
			imagen: "img/Kurapika-2011.png"
		},
		{
			id:4,
			nombre: "Leorio Paradinight",
			adulto: false,
			tipo: "Emisión",
			imagen: "img/Leorio-2011.png"
		},                
		{
			id:5,
			nombre: "Ging Freecss",
			adulto: true,
			tipo: "Especialista",
			imagen: "img/Chap_325_-_ging_freecss.png"
		}, 
		{
			id:6,
			nombre: "Illumi Zoldyck",
			adulto: true,
			tipo: "Manipulación",
			imagen: "img/Illumi_Zoldyck_2011.png"
		}, 
		{
			id:7,
			nombre: "Kite",
			adulto: true,
			tipo: "Materialización",
			imagen: "img/Kite_1999.png"
		}, 
		{
			id:8,
			nombre: "Isaac Netero",
			adulto: true,
			tipo: "Intensificación",
			imagen: "img/Netero_2011.png"
		},                              
		],
	}
});