<template>
    <div class="row">
        <div v-for="personaje in personajes" :key="personaje.id" class="col-4">
        <img v-if="personaje.visible" @mouseover.stop="$emit('pasando',personaje.id)"  :src="personaje.imagen" class="card-img-top m-2" :alt="personaje.nombre">
        </div>
    </div>
</template>
<script>
export default {
    name: 'componente-tarjeta',
    props: [ 'personajes'],
}
</script>

<style scoped>
img {
    max-height: 33vh;
    object-fit: scale-down;
    border: 0.1rem black solid;
}
</style>