<template>
  <div class="AnalogData">
    <el-form :disabled="readonly" ref="form" :model="form" :rules="rules" label-width="180px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="parentId" prop="parentId">
            <el-input v-model="form.parentId" placeholder="请输入"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="id" prop="id">
            <el-input v-model="form.id" placeholder="请输入"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="label" prop="label">
            <el-input v-model="form.label" placeholder="请输入"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="rootId" prop="rootId">
            <el-input v-model="form.rootId" placeholder="请输入"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="topFloor.start" label="外层轮次起始值">
            <el-input-number style="width: 100%" v-model="form.topFloor.start"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="topFloor.end" label="外层轮次结束值">
            <el-input-number style="width: 100%" v-model="form.topFloor.end"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item prop="innerLayer.start" label="内层轮次起始值">
            <el-input-number style="width: 100%" v-model="form.innerLayer.start"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="innerLayer.end" label="内层轮次结束值">
            <el-input-number style="width: 100%" v-model="form.innerLayer.end"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item prop="value" label="第1个表单">
            <el-select ref="ref1" @change="nextFocus('ref2')" v-model="form.value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="value2" label="第2个表单">
            <el-select ref="ref2" @change="nextFocus('ref3')" v-model="form.value2" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="value3" label="第3个表单">
            <el-select ref="ref3" v-model="form.value3" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="dataResults">
      <el-link :underline="false" href="https://element.eleme.io" target="_blank">生成耗时：{{
          generationTime
        }}ms
      </el-link>
      <el-link :underline="false" href="https://element.eleme.io" target="_blank">生成数据量:{{ dataLength }}</el-link>
    </div>
    <div class="operation">
      <el-button v-if="!readonly" type="primary" @click="submitForm">确 定</el-button>
    </div>
  </div>
</template>

<script>
import genTestData from "@/utils/genTestData";
import {TreeCreateFast} from "@/utils/mockTree";

export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      form: {
        value: null,
        value1: null,
        value2: null,
        parentId: 'pid',
        id: 'id',
        label: 'label',
        rootId: '0',
        topFloor: {start: 500, end: 600},
        innerLayer: {start: 10000, end: 20000}
      },
      readonly: false,
      rules: {},
      demoTree: null,
      oriData: null,
      dataLength: 0,
      generationTime: 0
    }
  },
  methods: {
    nextFocus(ref) {
      this.$nextTick(() => {
        // this.$refs[ref].toggleMenu()
        this.$refs[ref].$el.click()
      })
    },
    submitForm() {
      // 测试数据
      this.oriData = genTestData(this.form)

      this.dataLength = this.oriData.length;
      // 树 数组形式
      this.demoTree = new TreeCreateFast(function (item) {
        for (let key of Object.keys(item)) {
          this[key] = item[key]
        }
      }, this.form)


      //开始创建树
      let startTime = new Date().getTime()
      this.demoTree.create(this.oriData, true)
      let endTime = new Date().getTime()
      this.generationTime = endTime - startTime

      //提示成功并且打印
      this.$message({
        message: '恭喜你，数据生成成功，请打开控制台查看！',
        type: 'success'
      });
      console.log(this.demoTree.treeData);
    }
  }
}
</script>

<style scoped lang="scss">
.AnalogData {
  padding: 10px;

  .gradient {
    border: 1px solid red;
    background: linear-gradient(90deg, white 100%, #FFCFCF 0%, #99FF00 0%);
    height: 100px;
    width: 100px;
  }

  .operation {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dataResults {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-around;
  }
}
</style>
