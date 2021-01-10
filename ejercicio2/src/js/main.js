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
	methods: {
		eligeColor: function(colorElegido){
			this.color=colorElegido;
			console.log(this.color);
		},
		actualizaColor: function (event,posY,posX){	
			Vue.set(this.matriz[posY].fila[posX],"color",this.color)
			// this.matriz[posY].fila[posX].color=this.color;
			console.log(this.matriz[posY].fila[posX])
		}
	}
});