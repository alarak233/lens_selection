<template>
    <g>
        <circle v-for="point_pos in circle_pos" :cx="point_pos[0]" :cy="point_pos[1]" 
            :r="circle_radius" :stroke="circle_color" fill="none"></circle>
    </g>
</template>

<script setup lang="ts">
    const props=defineProps<{
        circle_pos:number[][],
        circle_radius:number,
        circle_color:string
    }>();
</script>

<style scoped>

</style>