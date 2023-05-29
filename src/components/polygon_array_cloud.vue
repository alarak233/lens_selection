<template>
    <line_array_cloud v-for="cur_line_data in line_data_list" :line_data="cur_line_data"/>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type { Polygon_data,Line_data,Microstructure_data } from './model';
import line_array_cloud from './line_array_cloud.vue';

const props = defineProps<{
    polygon_data: Polygon_data
}>();

const line_data_list=computed<Line_data[]>(()=>{
    const line_s:Line_data[]=[];
    const theta=Math.PI*2/props.polygon_data.total_edge_num;

    for(let i=0;i<props.polygon_data.points_num.length;i++){
        const cur_len=props.polygon_data.start_len
            +props.polygon_data.dist*i;

        for(let j=0;j<props.polygon_data.edge_num;j++){
        let cur_theta=theta*j;
        if(props.polygon_data.start_angle){
            cur_theta+=props.polygon_data.start_angle/180*Math.PI;
        }
            const cur_start_pos={x:cur_len*Math.cos(cur_theta),
                y:cur_len*Math.sin(cur_theta)};
            if(props.polygon_data.center){
                cur_start_pos.x+=props.polygon_data.center.x;
                cur_start_pos.y+=props.polygon_data.center.y;
            }
            const cur_dist=2*Math.sin(theta/2)*cur_len
                /props.polygon_data.points_num[i];
            const cur_start_angle=(cur_theta+Math.PI/2+theta/2)/Math.PI*180;

            //没有找到直接用友接口覆盖的方法
            const cur_line:Line_data={
                start_pos:cur_start_pos,
                points_num:props.polygon_data.points_num[i],
                dist:cur_dist,
                color:props.polygon_data.color,
                start_angle:cur_start_angle,
                circle_microstr_data:props.polygon_data.circle_microstr_data,
                polygon_microstr_data:props.polygon_data.polygon_microstr_data,
            };
            line_s.push(cur_line);
        }
    }

    return line_s;
});

//console.log(line_data_list);
</script>

<style scoped></style>