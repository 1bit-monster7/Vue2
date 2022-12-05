<template>
  <div>
    <tree-select/>
  </div>
</template>

<script>
import Big from 'big.js'; //解决精度丢失
import TreeSelect from '@/components/TreeSelect/index'
export default {
  name:"TreeSelect",
  components:{
    'tree-select':TreeSelect
  },
  data(){
    return{
      value:null,
    }
  },
  created(){
    let num  = new Big(2415.2059999999997);
    const x = new Big (0.1);
    const y = parseFloat(x.plus (0.2));                      // 0.3
    console.log(y,'y')
    Big (0.7).plus (x).plus (y).toFixed (2);     // 1.1
  }
}
</script>

<style scoped lang="scss">
  .tree-select-container{
    padding: 20px;
    border: 1px solid red;
  }
</style>
