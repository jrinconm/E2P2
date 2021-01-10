<!-- Creo el template-->
<template>
        <!-- Creo un div de la lista ya filtrada -->
        <div class="celda" :class=data></div>
    <!-- Cierro la sección template -->
</template>
<script>
export default {
    // El nombre del componente
    name: 'componente-onza',
    props: [ 'data' ],
    computed: {
	},
}
</script>
<style scoped>

</style>