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
    watch: {
        comer(){
            this.comido();
        }
    },
    props: [ 'data','comer' ],
    methods: {
        dentro: function(){
            if(!this.mostrar){
                this.tipo="seleccionado";
            }
        },
        fuera: function(){
            if(!this.mostrar){
                this.tipo="normal";
            }            
        },
        comido: function(){
            this.mostrar=true;
            this.tipo="comido";

        },
	},
}
</script>
<style scoped>

</style>