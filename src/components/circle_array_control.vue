<template>
    <div>
        <p>环形排布微结构{{ id }}
            <button>v</button>
        </p>
        <ul>
            <li>微结构总圈数：{{ props.circle_data.points_num.length }}
                <button>+</button>
                <button>-</button>
            </li>
            <li>最内圈微结构环带半径：
                <input type="number" v-model="props.circle_data.start_r" />
            </li>
            <li>间距：
                <input type="number" v-model="props.circle_data.dist">
            </li>
            <li>每圈微结构数量
                <ol>
                    <li v-for="(item, index) in props.circle_data.points_num">
                        <label>数量
                            <input type="range" v-model="props.circle_data.points_num[index]" :max="200" />
                            <input type="number" v-model="props.circle_data.points_num[index]" />
                        </label>
                    </li>
                </ol>
            </li>
        </ul>
        <p>高级设置
            <button>v</button>
        </p>
        <ul>
            <li v-if="circle_data.center">微结构中心
                x:<input type="number" v-model="circle_data.center.x"/>
                y:<input type="number" v-model="circle_data.center.y"/>
            </li>
            <li>
                <input type="checkbox" checked />整圆
            </li>
            <li>圆弧角度
                <input type="number" v-model="props.circle_data.end_angle" />
            </li>
            <li>起始角度
                <input type="number" v-model="props.circle_data.start_angle" />
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