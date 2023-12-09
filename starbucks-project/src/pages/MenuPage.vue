<template>
    <div >
        <NavBar />
        <div class="q-my-xl"></div>
        <div class="q-my-xl">a</div>
        <ProductCard  />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
    components: { ProductCard, NavBar }
})
</script>