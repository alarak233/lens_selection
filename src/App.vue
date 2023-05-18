<script setup lang="ts">
  import {ref} from "vue"
  import ring_array_cloud from './components/ring_array_cloud.vue';
  const start_r=ref<number>(5);
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
      <ring_array_cloud :start_r="start_r" :dist="20" :circle_color="`blue`"
        :ring_num="5" :circle_num="[10,12,14,16,18]" :circle_r="10">
      </ring_array_cloud>
    </svg>
  </div>
  <div class="div_inline">
    <h3>剖视图</h3>
    <h3>微结构示意图</h3>
  </div>
  <div class="div_inline">
    <h3>组件列表</h3>
    <input type="number" v-model="start_r"/>
  </div>
</template>

<style scoped>
.div_inline {
  display: inline-block;
  vertical-align: middle;
}
</style>
