<template>
    <points_cloud :points_pos="Line_points_pos" :microstructure_data="props.line_data"/>
</template>

<script setup lang="ts">
import points_cloud from './points_cloud.vue';
import type {Line_data} from './model';
import{computed} from 'vue';

const props=defineProps<{
    line_data:Line_data
}>();

const Line_points_pos=computed<number[][]>(()=>{
    const pts:number[][]=[];
    let dx=props.line_data.dist;
    let dy=0;

    if(props.line_data.start_angle){
        const temp_theta=props.line_data.start_angle/180*Math.PI;
        dx*=Math.cos(temp_theta);
        dy+=props.line_data.dist*Math.sin(temp_theta);
    }

    for(let i=0;i<props.line_data.points_num;i++){
        pts.push([props.line_data.start_pos.x+dx*i,props.line_data.start_pos.y+dy*i]);
    }

    return pts;
});
</script>

<style scoped>

</style>