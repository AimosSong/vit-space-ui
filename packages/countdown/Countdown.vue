<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { requestAnimationFrame } from '../index'
interface Props {
  countdown?: number // 倒计时数值，支持设置未来某时刻的时间戳(ms) 或 相对剩余时间(ms)
  title?: string // 倒计时标题 string | v-slot
  format?: string // 格式化倒计时展示，(Y：年，M：月，D：日，H：时，m：分钟，s：秒，SSS：毫秒)
  prefix?: string // 倒计时数值的前缀 string | v-slot
  suffix?: string // 倒计时数值的后缀 string | v-slot
  finishedText?: string // 完成后的展示文本 string | v-slot
}
const props = withDefaults(defineProps<Props>(), { // 基于类型的声明
  countdown: 0,
  title: 'Countdown',
  format: 'HH:mm:ss',
  prefix: '',
  suffix: '',
  finishedText: 'Finished'
})
const futureTime = ref() // 未来截止时间戳
const restTime = ref() // 剩余时间戳
const showType = computed(() => {
  return {
    showMillisecond: props.format.includes('SSS'),
    showYear: props.format.includes('Y'),
    showMonth: props.format.includes('M'),
    showDay: props.format.includes('D'),
    showHour: props.format.includes('H'),
    showMinute: props.format.includes('m'),
    showSecond: props.format.includes('s')
  }
})
function fixedTwo (value: number): string {
  return value < 10 ? '0' + value : String(value)
}
function timeFormat (time: number): string {
  let showTime = props.format
  if (showType.value.showMillisecond) {
    var S = time % 1000
    showTime = showTime.replace('SSS', '0'.repeat(3 - String(S).length) + S)
  }
  time = Math.floor(time / 1000) // 将时间转为s为单位
  if (showType.value.showYear) {
    var Y = Math.floor(time / (60 * 60 * 24 * 30 * 12))
    showTime = showTime.includes('YY') ? showTime.replace('YY', fixedTwo(Y)) : showTime.replace('Y', String(Y))
  } else {
    var Y = 0
  }
  if (showType.value.showMonth) {
    time = time - Y * 60 * 60 * 24 * 30 * 12
    var M = Math.floor(time / (60 * 60 * 24 * 30))
    showTime = showTime.includes('MM') ? showTime.replace('MM', fixedTwo(M)) : showTime.replace('M', String(M))
  } else {
    var M = 0
  }
  if (showType.value.showDay) {
    time = time - M * 60 * 60 * 24 * 30
    var D = Math.floor(time / (60 * 60 * 24))
    showTime = showTime.includes('DD') ? showTime.replace('DD', fixedTwo(D)) : showTime.replace('D', String(D))
  } else {
    var D = 0
  }
  if (showType.value.showHour) {
    time = time - D * 60 * 60 * 24
    var H = Math.floor(time / (60 * 60))
    showTime = showTime.includes('HH') ? showTime.replace('HH', fixedTwo(H)) : showTime.replace('H', String(H))
  } else {
    var H = 0
  }
  if (showType.value.showMinute) {
    time = time - H * 60 * 60
    var m = Math.floor(time / 60)
    showTime = showTime.includes('mm') ? showTime.replace('mm', fixedTwo(m)) : showTime.replace('m', String(m))
  } else {
    var m = 0
  }
  if (showType.value.showSecond) {
    var s = time - m * 60
    showTime = showTime.includes('ss') ? showTime.replace('ss', fixedTwo(s)) : showTime.replace('s', String(s))
  }
  return showTime
}
const emit = defineEmits(['finish'])
function CountDown () {
  if (futureTime.value > Date.now()) {
    restTime.value = futureTime.value - Date.now()
    requestAnimationFrame(CountDown)
  } else {
    restTime.value = 0
    emit('finish')
  }
}
onMounted(() => {
  if (props.countdown > Date.now()) { // 未来某时刻的时间戳，单位ms
    futureTime.value = props.countdown
  } else { // 相对剩余时间，单位ms
    futureTime.value = props.countdown + Date.now()
  }
  requestAnimationFrame(CountDown)
})
</script>
<template>
  <div class="m-countdown">
    <div class="u-title">
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div class="u-time">
      <slot name="prefix" v-if="restTime > 0">{{ prefix }}</slot>
      <slot v-if="finishedText && restTime === 0" name="finish">{{ finishedText }}</slot>
      <span v-else>{{ timeFormat(restTime) }}</span>
      <slot name="suffix" v-if="restTime > 0">{{ suffix }}</slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.m-countdown {
  display: inline-block;
  line-height: 1.571;
  .u-title {
    margin-bottom: 4px;
    color: #00000073;
    font-size: 14px;
  }
  .u-time {
    color: #000000d9;
    font-size: 24px;
    font-family: 'Helvetica Neue'; // 保证数字等宽显示
  }
}
</style>
