<!-- Creo el template-->
<template>
        <!-- Creo un div de la lista ya filtrada -->
        <div @mouseleave.stop="fuera" @mouseover="dentro"  class="celda" :class="tipo">  
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
    props: [ 'data' ],
    methods: {
        dentro: function(){
            this.mostrar=true;
            this.tipo="seleccionado";
        },
        fuera: function(){
            this.mostrar=false;
            this.tipo="normal";
        },
	},
}
</script>
<style scoped>

</style>