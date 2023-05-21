<template>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type { Polygon_data } from './model';
import points_cloud from './points_cloud.vue';

const props = defineProps<{
    polygon_data: Polygon_data
}>();

const polygon_points_pos=computed<number[][]>(()=>{
    const pts:number[][]=[];



    return pts;
});

</script>

<style scoped></style>