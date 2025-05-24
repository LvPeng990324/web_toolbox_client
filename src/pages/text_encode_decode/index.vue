<script lang="ts" setup>
import { md5 } from "js-md5"
import { ref } from "vue"

const textarea_value = ref("")

function url_encoder() {
  textarea_value.value = encodeURIComponent(textarea_value.value)
}
function url_decoder() {
  textarea_value.value = decodeURIComponent(textarea_value.value)
}

function base64_encoder() {
  textarea_value.value = btoa(encodeURIComponent(textarea_value.value))
}
function base64_decoder() {
  textarea_value.value = decodeURIComponent(atob(textarea_value.value))
}

function unicode_encoder() {
  textarea_value.value = Array.from(textarea_value.value).map(c =>
    `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`
  ).join("")
}
function unicode_decoder() {
  const regex = /\\u[\dA-Fa-f]{4}/g
  const str = textarea_value.value
  let pos = 0
  let result = ""

  str.replace(regex, (m, offset) => {
    result += str.slice(pos, offset)
    result += String.fromCharCode(Number.parseInt(m.slice(2), 16))
    pos = offset + m.length
    return m
  })

  result += str.slice(pos)
  textarea_value.value = result
}

function md5_encoder() {
  textarea_value.value = md5(textarea_value.value)
}
</script>

<template>
  <div class="app-container">
    <el-card header="输入要处理的文本" shadow="never">
      <el-row>
        <el-col :span="24">
          <el-input type="textarea" v-model="textarea_value" :rows="5" />
        </el-col>
      </el-row>
    </el-card>

    <el-card>
      <el-row :gutter="5">
        <el-col :span="6">
          <div>
            <el-button class="action-button" type="primary" size="large" @click="url_encoder">URL编码</el-button>
            <el-button class="action-button" type="primary" size="large" @click="url_decoder">URL解码</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button class="action-button" type="primary" size="large" @click="base64_encoder">Base64编码</el-button>
          <el-button class="action-button" type="primary" size="large" @click="base64_decoder">Base64解码</el-button>
        </el-col>
        <el-col :span="6">
          <el-button class="action-button" type="primary" size="large" @click="unicode_encoder">Unicode编码</el-button>
          <el-button class="action-button" type="primary" size="large" @click="unicode_decoder">Unicode解码</el-button>
        </el-col>
        <el-col :span="6">
          <el-button class="action-button" type="primary" size="large" @click="md5_encoder">MD5编码</el-button>
          <el-button class="action-button" type="primary" size="large" disabled>MD5无法解码</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style>
.action-button {
  width: 100%;
  margin-left: 0px !important;
  margin-top: 5px !important;
}
</style>
