<script setup lang="ts">
  import {ref,reactive} from "vue";
  import circle_array_cloud from "./components/circle_array_cloud.vue";
  import type { Circle_data } from "./components/model";

  const circle_data1:Circle_data=reactive({
    start_r:50,
    dist:20,
    points_num:[10,12,14,16,18],
    end_angle:360-72,
    center:{x:300,y:200},
    start_angle:0,
    circle_microstr_data:{radius:5},
    color:"green"
  }); 
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
      <circle_array_cloud :circle_data="circle_data1"/>
    </svg>
  </div>
  <div class="div_inline">
    <h3>剖视图</h3>
    <h3>微结构示意图</h3>
  </div>
  <div class="div_inline">
    <h3>组件列表</h3>
    <input type="number" v-model="circle_data1.start_r"/>
    <br>
    <input type="number" v-model="circle_data1.end_angle"/>
    <br>
    <input type="number" v-model="circle_data1.start_angle"/>
  </div>
</template>

<style scoped>
.div_inline {
  display: inline-block;
  vertical-align: middle;
}
</style>
