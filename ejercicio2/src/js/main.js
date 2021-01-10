let app = new Vue({
	// Indicamos el ID del Div que contiene la APP Vue
	el: '#app',	
	data: {
		colores: ["red","green","blue","yellow","purple","white"],
		color: "",
		matriz : {},
	},
	// Añado blancos al objeto que representa una matriz de 60x60
	created: function (){
		for (let i = 0; i < 60; i++) {
			let arrayBidimensional2 = {};
			for (let y = 0; y < 60; y++){
				Vue.set(arrayBidimensional2,['celda'+y],"white")				
			}
			Vue.set(this.matriz,['fila'+i],arrayBidimensional2);
		}
	},
	methods: {
		eligeColor: function(colorElegido){
			this.color=colorElegido;
			console.log(this.color);
		},
		actualizaColor: function (event,posY,posX){	
			Vue.set(this.matriz[posY],posX,this.color)
		},
		borrar: function(){
			for(const fila in this.matriz){
				for(const celda in this.matriz[fila]){
					Vue.set(this.matriz[fila],celda,"white")
				}
			}
		}
	}
});