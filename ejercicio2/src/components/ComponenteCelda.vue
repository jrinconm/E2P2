<!-- Creo el template-->
<template>
    <!-- Creo una fila bootstrap -->
    <div @mouseover.stop="actualizaColor" :class="color" class="celda">
    </div>
    <!-- Cierro la sección template -->
</template>
<script>
export default {
    // El nombre del componente
    name: 'componente-celda',
    // El array que recibo del padre
    props: [ 'datos' ],
    data: function(){
        return {
            color: ""
        }
    },
    methods: {
	actualizaColor: function (event){
        this.color=this.datos;
        }

    }
}
</script>
<style scoped>
</style>