<template>
    <div class="q-mx-xl">
        <NavBar />
        <div class="q-my-xl"></div>
        <FeatureCard />
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import FeatureCard from '../components/FeatureCard.vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
    
    components: { FeatureCard, NavBar }
})
</script>