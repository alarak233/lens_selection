<template>
    <points_cloud :circle_color="props.circle_data.circle_color" 
    :circle_pos="point_pos" 
    :circle_r="props.circle_data.circle_r">
    </points_cloud>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import points_cloud from './points_cloud.vue';
import type {Circle_data,Com_data} from './model';

const props = defineProps<{
    circle_data:Circle_data,
    com_data:Com_data
}>();

const point_pos = computed<number[][]>(() => {
    const pts: number[][] = [];

    for (let i = 0; i < props.circle_data.ring_num; i++) {
        const theta = Math.PI * 2 / props.circle_data.circle_num[i];
        for (let j = 0; j < props.circle_data.circle_num[i]; j++) {
            const cur_r = props.circle_data.start_r + props.circle_data.dist * i;
            pts.push([cur_r * Math.cos(theta * j)+props.com_data.center_x,
            cur_r * Math.sin(theta * j)+props.com_data.center_y]);
        }
    }
    
    return pts;
});

</script>

<style scoped></style>