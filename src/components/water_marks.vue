<template>
    <text :x=props.water_marks_data.start_pos.x :y=props.water_marks_data.start_pos.y
        :fill-opacity="props.water_marks_data.opacity" :fill="props.water_marks_data.color"
        :font-size="props.water_marks_data.size" >
        {{ props.water_marks_data.text }}
        <animate
            attributeName="x"
            :from="props.water_marks_data.start_pos.x"
            :to="props.water_marks_data.end_pos.x"
            begin="0s"
            dur="10s"
            fill="freeze"
            repeatCount="indefinite"
        />
    </text>
</template>

<script setup lang="ts">
import { Water_marks_data } from './model';
const props = defineProps<{
    water_marks_data: Water_marks_data
}>();
</script>

<style scoped></style>