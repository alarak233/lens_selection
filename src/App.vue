<script setup lang="ts">
  import points_cloud from './components/points_cloud.vue';
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
    <svg width="400" height="300">
      <circle cx="100" cy="100" r="50"/>
      <points_cloud :circle_color="`red`" :circle_radius="5" :circle_pos="[[150,150]]"></points_cloud>
    </svg>
  </div>
  <div class="div_inline">
    <h3>剖视图</h3>
    <h3>微结构示意图</h3>
  </div>
  <div class="div_inline">
    <h3>组件列表</h3>
  </div>
</template>

<style scoped>
.div_inline {
  display: inline-block;
  vertical-align: middle;
}
</style>
