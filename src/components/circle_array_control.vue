<template>
    <div>
        <div>环形排布微结构{{ id }}</div>
        <ul>
            <li>微结构总圈数：{{ props.circle_data.points_num.length }}</li>
            <li>最内圈微结构环带半径：
                <input type="number" v-model="props.circle_data.start_r" />
            </li>
            <li>间距：
                <input type="number" v-model="props.circle_data.dist">
            </li>
            <li>每圈微结构数量
                <button>add</button>
                <ol>
                    <li v-for="(item, index) in props.circle_data.points_num">
                        <label>数量
                            <input type="range" v-model="props.circle_data.points_num[index]" />
                            <input type="number" v-model="props.circle_data.points_num[index]" />
                        </label>
                        <button>x</button>
                    </li>
                </ol>
            </li>
        </ul>
        <p>高级设置</p>
        <ul>
            <li>
                <input type="checkbox" checked/>整圆
            </li>
            <li>圆弧角度
                <input type="number" v-model="props.circle_data.end_angle"/>
            </li>
            <li>起始角度
                <input type="number" v-model="props.circle_data.start_angle"/>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Circle_data } from './model';

const props = defineProps<{
    id: number,
    circle_data: Circle_data
}>();

</script>

<style scoped></style>