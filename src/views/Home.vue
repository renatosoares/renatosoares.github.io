<template>
    <div class="home">
        <showcase></showcase>
    </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/Showcase.vue";

export default {
    name: "Home",
    components: {
        Showcase
    }
};
</script>
