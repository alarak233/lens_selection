<template>
    <points_cloud :points_pos="circle_points_pos" :microstructure_data="circle_data">
    </points_cloud>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import points_cloud from './points_cloud.vue';
import type {Circle_data } from './model';

const props = defineProps<{
    circle_data: Circle_data
}>();

//console.log(props.circle_data.circle_microstr_data===undefined);

const circle_points_pos = computed<number[][]>(() => {
    const pts: number[][] = [];

    for (let i = 0; i < props.circle_data.points_num.length; i++) {
        const theta = (props.circle_data.end_angle / 180 * Math.PI)
            / props.circle_data.points_num[i];
        for (let j = 0; j < props.circle_data.points_num[i]; j++) {
            const cur_r = props.circle_data.start_r + props.circle_data.dist * i;
            let cur_theta=theta*j;
            if(props.circle_data.start_angle){
                cur_theta+=props.circle_data.start_angle/180*Math.PI;
            }
            let cur_x=cur_r * Math.cos(cur_theta);
            let cur_y=cur_r * Math.sin(cur_theta);
            if(props.circle_data.center){
                cur_x+=props.circle_data.center.x;
                cur_y+=props.circle_data.center.y;
            }
            pts.push([cur_x,cur_y]);
        }
    }

    return pts;
});

</script>

<style scoped></style>