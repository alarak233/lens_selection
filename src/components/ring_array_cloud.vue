<template>
    <points_cloud :circle_color="props.circle_color" :circle_pos="point_pos" 
    :circle_r="props.circle_r">
    </points_cloud>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import points_cloud from './points_cloud.vue';

const props = defineProps<{
    start_r: number,
    ring_num: number,
    dist: number,
    circle_r: number,
    circle_num: number[],
    circle_color: string
}>();

const point_pos = computed<number[][]>(() => {
    const pts: number[][] = [];

    for (let i = 0; i < props.ring_num; i++) {
        const theta = Math.PI * 2 / props.circle_num[i];
        for (let j = 0; j < props.circle_num[i]; j++) {
            const cur_r = props.start_r + props.dist * i;
            pts.push([cur_r * Math.cos(theta * j),
            cur_r * Math.sin(theta * j)]);
        }
    }
    console.log(pts);

    return pts;
});

</script>

<style scoped></style>