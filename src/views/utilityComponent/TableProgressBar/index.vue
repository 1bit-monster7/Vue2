<template>
  <el-table
    ref="myTable"
    class="progressBar_table"
    :data="tableData"
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
        <el-input-number @change="change(row,$index)" v-model="row.progressValue" :precision="1" :step="0.1" :min="0"
                         :max="1"></el-input-number>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name:"TableProgressBar",
  data() {
    return {
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
    init() {
      const table = document.querySelector('.progressBar_table')
      let trs = table.querySelectorAll('.el-table__row')
      let trsArray = Array.from(trs);
      trsArray.map((v, i) => v.style.setProperty('--row-width', (this.tableData[i].progressValue * 100) + '%'))
      const ro = new ResizeObserver((entries, observer) => {
        let table = entries[0].target;
        table.querySelectorAll('.el-table__row').forEach((row, index) => {
          row.style.setProperty('--row-height', `${row.offsetHeight - 2}px`)
        })
      });
      ro.observe(table);
    },
    change(row, index) {
      this.$nextTick(() => {
        const table = document.querySelector('.progressBar_table')
        let trs = table.querySelectorAll('.el-table__row')
        trs[index].style.setProperty('--row-width', (row.progressValue * 100) + '%')
      })
    },
  },
}
</script>

<style lang="scss">
.progressBar_table {
  position: relative;

  .el-table__body {
    tr {
      &::after {
        position: absolute;
        left: 0;
        margin-top: var(--row-height);
        content: '';
        width: var(--row-width);
        height: 1px;
        background: #409EFF;
        transition: width .5s ease-in-out;
      }
    }

  }
}
</style>
