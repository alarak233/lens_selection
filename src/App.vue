<script setup lang="ts">
  import {ref,reactive} from "vue"
  import ring_array_cloud from './components/ring_array_cloud.vue';
  import type { Circle_data,Com_data } from "./components/model";

  const circle_data1:Circle_data=reactive({
    start_r:5,
    ring_num:5,
    dist:20,
    circle_r:10,
    circle_num:[10,12,14,16,18],
    circle_color:'blue'
  }); 

  let com_data1:Com_data={
    center_x:300,
    center_y:200,
    start_angle:0
  }
</script>

<template>
  <div>
    <h2>多点离焦镜片选型</h2>
    <p>联系方式:alarak2333@outlook.com</p>
  </div>
  <div class="div_inline">
    <div>
      添加毛坯
    </div>
    <div>
      添加环形微结构
    </div>
    <div>
      添加多边形微结构
    </div>
    <div>
      添加单个微结构
    </div>
  </div>
  <div class="div_inline">
    <h3>俯视图</h3>
    <svg width="600" height="400">
      <ring_array_cloud :circle_data="circle_data1" :com_data="com_data1">
      </ring_array_cloud>
    </svg>
  </div>
  <div class="div_inline">
    <h3>剖视图</h3>
    <h3>微结构示意图</h3>
  </div>
  <div class="div_inline">
    <h3>组件列表</h3>
    <input type="number" v-model="circle_data1.start_r"/>
  </div>
</template>

<style scoped>
.div_inline {
  display: inline-block;
  vertical-align: middle;
}
</style>
