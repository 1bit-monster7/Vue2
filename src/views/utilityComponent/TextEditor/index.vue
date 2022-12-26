<template>
  <div class="container">
    <div ref="ace" class="ace-editor"></div>
    <el-button @click="setVal">设置内容</el-button>
    <el-button @click="getVal">获取内容</el-button>
    <el-button size="mini" @click="search">查找</el-button>
    <el-button size="mini" @click="replace" :disabled="ReadOnly">替换</el-button>
    <el-switch
      @change="setReadOnly"
      style="margin-left: 10px"
      v-model="ReadOnly"
      active-text="只读"
      inactive-text="编辑">
    </el-switch>
  </div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入
// 根据自己的需求按需引入
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/theme-dracula' // 主题
import 'ace-builds/src-noconflict/mode-html' // 语言模式
import 'ace-builds/src-noconflict/snippets/html' //代码提示
export default {
  name: 'ace-editor',
  data() {
    return {
      aceEditor: null,
      ReadOnly: false,
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      // 初始化\
      this.aceEditor = ace.edit(this.$refs.ace, {
        fontSize: 14, // 编辑器内字体大小
        tabSize: 4, // 制表符设置为 4 个空格大小
      })
      this.aceEditor.setShowPrintMargin(false); //隐藏打印线
    },
    setVal() {
      this.aceEditor.setValue('假设为请求来的接口内容~~');
    },
    getVal() {
      alert(this.aceEditor.getValue())
    },
    setReadOnly() {
      this.aceEditor.setReadOnly(this.ReadOnly);
      if (this.ReadOnly) {
        this.aceEditor.renderer.$cursorLayer.element.style.display = "none"
      } else {
        this.aceEditor.renderer.$cursorLayer.element.style.display = "block"
      }
    },
    search() {
      this.aceEditor.execCommand('find')
    },
    replace() {
      this.aceEditor.execCommand('replace')
    },
  }
}
</script>

<style scoped lang="scss">
.switch {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 20px;
}

.ace-editor {
  width: 100%;
  height: 200px;
}
</style>
