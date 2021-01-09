<!-- Creo el template-->
<template>
    <!-- Creo una fila bootstrap -->
    <div class="row">
        <!-- Creo una fila bootstrap -->
        <div v-for="personaje in esVisible" :key="personaje.id" class="col-4">
        <img @mouseleave.stop="$emit('pasando','')" @mouseover.stop="$emit('pasando',personaje.id)"  :src="personaje.imagen" class="card-img-top m-2" :alt="personaje.nombre">
        </div>
    </div>
</template>
<script>
export default {
    name: 'componente-tarjeta',
    props: [ 'personajes'],
    computed: {
		esVisible: function() {
			return this.personajes.filter(function (personaje) {
            return personaje.visible })
		} 
	},
}
</script>
<style scoped>
img {
    max-height: 33vh;
    object-fit: scale-down;
    border: 0.1rem black solid;
}
</style>