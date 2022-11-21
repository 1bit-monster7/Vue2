<template>
  <el-table
    ref="myTable"
    class="progressBar_table"
    :data="tableData"
    :row-style="rowStyle"
    border
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="progressValue"
      label="进度值">
      <template v-slot="{row,$index}">
        <el-input-number v-model="row.progressValue" :precision="1" :step="0.1" :min="0"
                         :max="1"></el-input-number>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: "TableProgressBar",
  data() {
    return {
      observe: null,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          progressValue: 0.2,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          progressValue: 0,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          progressValue: 0,
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          progressValue: 0,
        }],
      rowHeight: 20,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    rowStyle({row}) {
      //初始化进度条值
      return {'--row-width': `${row.progressValue * 100}%`}
    },
    init() {
      //监听表格变化 改变row-height的margin-top
      const table = document.querySelector('.progressBar_table')
      this.observe = new ResizeObserver((entries, observer) => {
        console.log('出发出发')
        let table = entries[0].target;
        table.querySelectorAll('.el-table__row').forEach((row, index) => {
          row.style.setProperty('--row-height', `${row.offsetHeight - 2}px`)
        })
      });
      this.observe.observe(table);
    },
  },
  beforeDestroy() {
    //销毁前清空监听
    this.observe = null;
  }
}
</script>

<style lang="scss">
.el-table {
  tr::after {
    content: '';
    transition: width 0.3s ease;
    background: #409EFF;
    width: var(--row-width);
    margin-top: var(--row-height);
    height: 2px;
    position: absolute;
    left: 0;
  }
}
</style>
