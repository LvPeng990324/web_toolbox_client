<script lang="ts" setup>
import { ref } from "vue"

const timestamp = ref("")
const time = ref("")

function copy_timestamp() {
  timestamp.value = Date.now().toString()
  navigator.clipboard.writeText(timestamp.value)
  ElMessage.success("复制成功")
}

// 时间戳转时间的工具方法
function get_time_from_timestamp(timestamp) {
  // 如果是秒级要转为毫秒级
  if (timestamp.length == 10) {
    timestamp += '000';
  }
  timestamp = parseInt(timestamp);

  let date = new Date(timestamp);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return Y + M + D + h + m + s;
}

function timestamp_to_time() {
  time.value = get_time_from_timestamp(timestamp.value)
}

function time_to_timestamp() {
  timestamp.value = Date.parse(new Date(time.value).toString())
}
</script>

<template>
  <div class="app-container">
    <el-card>
      <el-button style="width: 100%;" @click="copy_timestamp">复制当前时间戳</el-button>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input size="large" placeholder="时间戳" v-model="timestamp" />
        </el-col>
        <el-col :span="4">
          <el-button size="large" style="width: 100%;" @click="timestamp_to_time">转为时间 ></el-button>
        </el-col>
        <el-col :span="10">
          <el-input size="large" placeholder="时间" v-model="time" />
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="10">
          <el-input size="large" placeholder="时间" v-model="time" />
        </el-col>
        <el-col :span="4">
          <el-button size="large" style="width: 100%;" @click="time_to_timestamp">转为时间戳 ></el-button>
        </el-col>
        <el-col :span="10">
          <el-input size="large" placeholder="时间戳" v-model="timestamp" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style>

</style>
