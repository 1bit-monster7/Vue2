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
    <div style="margin: 10px 0">
      <el-button size="mini" @click="copy('复制')">复制选中内容</el-button>
      <el-button size="mini" @click="to_cut">剪切选中内容</el-button>
      <el-button size="mini" @click="stick">粘贴到光标处</el-button>
    </div>
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
      pasteText: null,
    }
  },
  mounted() {
    this.initEditor();
    //监听整个页面的 copy 事件
    document.addEventListener('copy', this.watchCopy)
  },
  beforeDestroy() {
    window.removeEventListener("copy", this.watchCopy);
  },
  methods: {
    watchCopy(e) {
      // clipboardData 对象是为通过编辑菜单、快捷菜单和快捷键执行的编辑操作所保留的，也就是你复制或者剪切内容
      let clipboardData = e.clipboardData || window.clipboardData;
      // 如果 未复制或者未剪切，直接 return
      if (!clipboardData) return;
      let text = window.getSelection().toString();
      if (text) {
        // 如果文本存在，首先取消默认行为
        e.preventDefault();
        this.pasteText = text; //保留当前剪切板的文字用于后续粘贴到光标处
      }
    },
    stick() {
      let selectedContent = this.aceEditor.getSelectedText();
      //如果有选中内容 则是替换 否则是插入
      if (selectedContent) {
        if (this.pasteText) {
          //先查找到需要剪切的内容 选中内容
          this.aceEditor.find(selectedContent, {
            backwards: true,
            wrap: true,
            caseSensitive: true,
            wholeWord: true,
          })
          this.aceEditor.findNext();
          this.aceEditor.replace(this.pasteText)
        }
      } else {
        if (this.pasteText) {
          this.aceEditor.insert(this.pasteText);
        }
      }
    },
    to_cut() {
      this.copy('剪切');
      //得到当前选中内容
      let selectedContent = this.aceEditor.getSelectedText();
      //先查找到需要剪切的内容 选中内容
      this.aceEditor.find(selectedContent, {
        backwards: true,
        wrap: true,
        caseSensitive: true,
        wholeWord: true,
      })
      this.aceEditor.findNext();
      this.aceEditor.replace('')
    },
    copy(msg) {
      let value = this.aceEditor.getSelectedText();
      //提示
      if (value) {
        // 创建输入框
        let textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        // 隐藏此输入框
        textarea.style.position = 'absolute';
        textarea.style.clip = 'rect(0 0 0 0)';
        // 赋值
        textarea.value = value
        // 选中
        textarea.select();
        // 复制
        document.execCommand('copy', true);
        //卸载dom
        document.body.removeChild(textarea)

        if (msg) {
          this.$message({message: msg + '成功！', type: 'success'});
        }
      }
    },
    initEditor() {
      // 初始化\
      this.aceEditor = ace.edit(this.$refs.ace, {
        fontSize: 14, // 编辑器内字体大小
        tabSize: 4, // 制表符设置为 4 个空格大小
      })
      this.aceEditor.setShowPrintMargin(false); //隐藏打印线
    },
    setVal() {
      this.aceEditor.setValue('假设为请求来的接口内容~~', -1); //加-1 代表不选中
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
