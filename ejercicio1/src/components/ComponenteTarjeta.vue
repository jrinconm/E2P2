<!-- Creo el template-->
<template>
    <!-- Creo una fila bootstrap -->
    <div class="row">
        <!-- Creo un div de la lista ya filtrada -->
        <div v-for="personaje in esVisible" :key="personaje.id" class="col-4">
            <!-- Asocio el mouseover y mouse leave para emitir al padre
                 Asocio src a la propiedad imagen de personaje y alt al nombre-->
        <img @mouseleave.stop="$emit('pasando','')" @mouseover.stop="$emit('pasando',personaje.id)"  :src="personaje.imagen" class="card-img-top m-2" :alt="personaje.nombre">
        </div>
    </div>
    <!-- Cierro la sección template -->
</template>
<script>
export default {
    // El nombre del componente
    name: 'componente-tarjeta',
    // El array que recibo del padre
    props: [ 'personajes'],
    // Para mostrar solo los personajes visibles
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
    /* Un tercio de la ventana para que no ocupe demasiado */
    max-height: 30vh;
    object-fit: scale-down;
    border: 0.1rem black solid;
}
</style>