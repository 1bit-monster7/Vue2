<template>
  <div class="tree-select-container">
    <div class="basic_use">
      <div class="item">
        <h2>基础单选</h2>
        <v-tree-select v-model="value1" :multiple="false" :options="options"/>
      </div>
      <div class="item">
        <h2>基础多选</h2>
        <v-tree-select v-model="value2" :multiple="true" :options="optionsKFC"/>
      </div>
      <div class="item">
        <el-button type="primary" @click="open=true">嵌套表单</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="open" title="嵌套在表单中的树形选择器">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="参与家庭">
          <!--propsFormat 可以指定映射关系-->
          <v-tree-select
            :normalizer="propsFormat"
            placeholder="placeholder"
            v-model="form.value3"
            :multiple="true"
            :options="optionsForm"
            :show-count="true"
          >
            <template v-slot:option-label="{ node, shouldShowCount, count, labelClassName, countClassName }" :class="labelClassName">
              {{ node.label }} <span v-if="shouldShowCount" :class="countClassName">({{ count }}) （插槽能力）</span>
            </template>
            <template v-slot:value-label="{ node }">
              {{ node.label }} （插槽能力）
            </template>
          </v-tree-select>
        </el-form-item>
        <el-form-item label="选中数据">
          {{ form.value3 }}
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Big from 'big.js'; //解决精度丢失
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: "TreeSelect",
  components: {
    'v-tree-select': Treeselect
  },
  data() {
    return {
      open: false,
      value1: null,
      value2: null,
      form: {
        name: null,
        value3: ['001']
      },
      propsFormat(node) {
        return {
          id: node.TagId,
          label: node.TagName,
          children: node.childrenSon
        }
      },
      optionsForm: [
        {
          TagId: '001',
          TagName: '张三一家',
          childrenSon: [
            {
              TagId: '001-001',
              TagName: '张三的大儿子',
            },
            {
              TagId: '001-002',
              TagName: '张三的二儿子',
            }],
        },
        {
          TagId: '002',
          TagName: '王二一家',
        },
        {
          TagId: '003',
          TagName: '麻子一家',
          childrenSon: [
            {
              TagId: '003-001',
              TagName: '中麻子',
              childrenSon: [
                {
                  TagId: '003-001-001',
                  TagName: '小麻子',
                }
              ]
            }
          ]
        },
        {
          TagId: '004',
          TagName: '被禁用的一家',
          isDisabled: true,
          childrenSon: [
            {
              TagId: '004-001',
              TagName: '惨遭禁用的小三'
            }
          ]
        }
      ],
      options: [
        {
          id: 'a',
          label: 'a',
          children: [{
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          }],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        }],
      optionsKFC: [
        {
          id: 'm',
          label: 'McDonalds',
          children: [{
            id: 'm-fries',
            label: 'French Fries',
          }, {
            id: 'm-cheeseburger',
            label: 'Cheeseburger',
          }, {
            id: 'm-white-cheedar-burger',
            label: 'White Cheddar Burger',
          }, {
            id: 'm-southwest-buttermilk-crispy-chicken-salad',
            label: 'Southwest Buttermilk Crispy Chicken Salad',
          }, {
            id: 'm-cola',
            label: 'Coca-Cola®',
          }, {
            id: 'm-chocolate-shake',
            label: 'Chocolate Shake',
          }],
        }, {
          id: 'kfc',
          label: 'KFC',
          children: [{
            id: 'kfc-fries',
            label: 'French Fries',
          }, {
            id: 'kfc-chicken-litties-sandwiches',
            label: 'Chicken Litties Sandwiches',
          }, {
            id: 'kfc-grilled-chicken',
            label: 'Grilled Chicken',
          }, {
            id: 'kfc-cola',
            label: 'Pepsi® Cola',
          }],
        }, {
          id: 'bk',
          label: 'Burger King',
          children: [{
            id: 'bk-chicken-fries',
            label: 'Chicken Fries',
          }, {
            id: 'bk-chicken-nuggets',
            label: 'Chicken Nuggets',
          }, {
            id: 'bk-garden-side-salad',
            label: 'Garden Side Salad',
          }, {
            id: 'bk-cheeseburger',
            label: 'Cheeseburger',
          }, {
            id: 'bk-bacon-king-jr-sandwich',
            label: 'BACON KING™ Jr. Sandwich',
          }, {
            id: 'bk-cola',
            label: 'Coca-Cola®',
          }, {
            id: 'bk-oreo-chocolate-shake',
            label: 'OREO® Chocolate Shake',
          }],
        }],
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.tree-select-container {
  padding: 20px;

  .basic_use {

    display: flex;
    align-items: center;

    .item {
      width: 49.99%;
      margin: 0 20px;
    }
  }
}
</style>
