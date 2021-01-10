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
		// Inicializo el array si no existe
		if(!localStorage.getItem('matriz')){
			for (let i = 0; i < 60; i++) {
				let arrayBidimensional2 = {};
				for (let y = 0; y < 60; y++){
					Vue.set(arrayBidimensional2,['celda'+y],"white")				
				}
				Vue.set(this.matriz,['fila'+i],arrayBidimensional2);
			}
		} else {
			// Si existe lo cargo del storage
			this.matriz = JSON.parse(localStorage.getItem('matriz'));
			console.log(this.matriz)
		}
	},
	methods: {
		// Selecciona el color
		eligeColor: function(colorElegido){
			this.color=colorElegido;
		},
		// Cambia el color del objeto en posY posX
		actualizaColor: function (event,posY,posX){	
			if(this.color){
				Vue.set(this.matriz[posY],posX,this.color);	
				this.guarda();
			}			
		},
		borrar: function(){
			this.rellena("white");
			this.guarda();
		},
		negro: function(){
			this.rellena("black");
			this.guarda();
		},
		// Recorre el objeto cambiando el color
		rellena: function(color){
			for(const fila in this.matriz){
				for(const celda in this.matriz[fila]){
					Vue.set(this.matriz[fila],celda,color)
				}
			}
			console.log(this.matriz);
		},
		// Guardo toda el objeto a lo bruto
		guarda: function(){
			localStorage.setItem('matriz', JSON.stringify(this.matriz));		
		}
	}
});