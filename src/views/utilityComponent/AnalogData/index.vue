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

    <div class="gradient">

    </div>
  </div>
</template>

<script>
import genTestData from "@/utils/genTestData";
import {TreeCreateFast} from "@/utils/mockTree";

export default {
  data() {
    return {
      form: {
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
