<!-- Creo el template-->
<template>
        <!-- Creo un div de la lista ya filtrada -->
        <div @click.stop="comido" @mouseleave.stop="fuera" @mouseover="dentro"  class="celda" :class="tipo">  
        <p v-show="mostrar">¡MMMM...!</p>
        </div>
    <!-- Cierro la sección template -->
</template>
<script>
export default {
    // El nombre del componente
    name: 'componente-onza',
    data: function(){
        return {
            mostrar: false,
            tipo: this.data
        }
    },
    // Vigilo si cambia el comer para ejecutar lo del click
    watch: {
        comer(){
            this.comido();
        }
    },
    // Propiedades recibidas del padre
    props: [ 'data','comer','bloqueado' ],
    methods: {
        // Cuando paso el ratón por encima
        dentro: function(){
            if(!this.mostrar){
                this.tipo="seleccionado";
            }
        },
        // Cuando sale de encima
        fuera: function(){
            if(!this.mostrar){
                this.tipo="normal";
            }            
        },
        // Cuando se hace click
        comido: function(){
            console.log(this.bloqueado)
            // Solo si no está bloqueado
            if(!this.bloqueado){
            this.mostrar=true;
            this.tipo="comido";
            }
        },
	},
}
</script>
<style scoped>

</style>