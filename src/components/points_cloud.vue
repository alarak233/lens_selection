<template v-if="microstructure_data.circle_microstr_data">
    <g>
        <circle v-for="point_pos in points_pos" :cx="point_pos[0]" :cy="point_pos[1]" 
        :r="microstructure_data.circle_microstr_data?.radius" :stroke="microstructure_data.color" fill="none"></circle>
    </g>
</template>

<script setup lang="ts">
import type {Microstructure_data} from './model'

const props = defineProps<{
    points_pos: number[][],
    microstructure_data:Microstructure_data
}>();
</script>

<style scoped></style>