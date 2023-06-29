<script setup lang="ts">
import { ref, reactive } from "vue";
import circle_array_cloud from "./components/circle_array_cloud.vue";
import circle_array_control from "./components/circle_array_control.vue";
import line_array_cloud from "./components/line_array_cloud.vue";
import polygon_array_cloud from "./components/polygon_array_cloud.vue";
import water_marks from "./components/water_marks.vue";
import type { Circle_data, Line_data, Polygon_data, Water_marks_data } from "./components/model";

const circle_data1: Circle_data = reactive({
  start_r: 50,
  dist: 20,
  points_num: [10, 12, 14, 16, 18],
  end_angle: 360 - 72,
  center: { x: 300, y: 200 },
  start_angle: 0,
  circle_microstr_data: { radius: 5 },
  color: "green"
});

const line_data1: Line_data = reactive({
  start_pos: { x: 100, y: 100 },
  points_num: 10,
  start_angle: 20,
  dist: 30,
  circle_microstr_data: { radius: 10 },
  color: "blue"
});

const polygon_data1: Polygon_data = reactive({
  start_len: 70,
  total_edge_num: 7,
  edge_num: 6,
  points_num: [4, 5, 6, 7],
  dist: 15,
  start_angle: 20,
  color: "red",
  center: { x: 250, y: 250 },
  circle_microstr_data: { radius: 6 }
})
const water_marks_data1: Water_marks_data = {
  text: "江苏工大金凯高端装备制造有限公司",
  opacity: 0.1,
  color: "black",
  size: 25,
  start_pos: { x: -400, y: 20 },
  end_pos: { x: 300, y: 200 }
};
const water_marks_data2: Water_marks_data = {
  text: "江苏工大金凯高端装备制造有限公司",
  opacity: 0.1,
  color: "black",
  size: 25,
  start_pos: { x: 300, y: 20 },
  end_pos: { x: 1000, y: 200 }
};
</script>

<template>
  <div>
    <h2>多点离焦镜片选型</h2>
    <p>联系方式:alarak2333@outlook.com</p>
    <p>源码地址 <a href="https://github.com/alarak233/lens_selection">点击进入</a></p>
  </div>
  <div class="div_flex">
    <div class="div_inline">
      <div>
        创建毛坯
      </div>
      <div>
        添加等间距环形排布微结构
      </div>
      <div>
        添加等间距多边形排布微结构
      </div>
      <div>
        添加等间距直线排布微结构
      </div>
      <div>
        添加单个微结构
      </div>
    </div>
    <div class="div_inline">
      <h3>俯视图</h3>
      <svg width="700" height="600">
        <circle_array_cloud :circle_data="circle_data1" />
        <line_array_cloud :line_data="line_data1" />
        <polygon_array_cloud :polygon_data="polygon_data1" />
        <water_marks :water_marks_data=water_marks_data1></water_marks>
        <water_marks :water_marks_data=water_marks_data2></water_marks>
      </svg>
    </div>
    <div class="div_inline">
      <h3>剖视图</h3>
      <h3>微结构示意图</h3>
    </div>
    <div class="div_inline">
      <h3>组件列表</h3>
      <circle_array_control :circle_data="circle_data1" :id="1" />
      <input type="number" v-model="line_data1.start_angle" />
      <br>
      <input type="number" v-model="polygon_data1.start_angle" />
      <br>
      <input type="number" v-model="polygon_data1.edge_num" />
      <br>
      <input type="number" v-model="polygon_data1.total_edge_num" />
      <br>
      <input type="number" v-model="polygon_data1.dist" />
      <br>
      <input type="number" v-model="circle_data1.start_r" />
    </div>
  </div>
</template>

<style scoped>
.div_flex {
  display: flex;
}

.div_inline {
  vertical-align: middle;
}
</style>
