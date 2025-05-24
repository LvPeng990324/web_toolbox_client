<script lang="ts" setup>
import { useTheme } from "@@/composables/useTheme"
import JsonEditorVue from "json-editor-vue"
import { Mode } from "vanilla-jsoneditor"
import { ref } from "vue"
import "vanilla-jsoneditor/themes/jse-theme-dark.css"

const { activeThemeName } = useTheme()

const value = ref()
</script>

<template>
  <div class="app-container">
    <JsonEditorVue
      :class="{ 'jse-theme-dark': activeThemeName === 'dark' }"
      v-model="value"
      :mode="Mode.tree"
    />
  </div>
</template>

<style>

</style>
