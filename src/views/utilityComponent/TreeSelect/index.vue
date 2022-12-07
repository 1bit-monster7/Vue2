<template>
  <div>
    <tree-select/>
  </div>
</template>

<script>
import Big from 'big.js'; //解决精度丢失
import TreeSelect from '@/components/TreeSelect/index'

export default {
  name: "TreeSelect",
  components: {
    'tree-select': TreeSelect
  },
  data() {
    return {
      value: null,
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.tree-select-container {
  padding: 20px;
  border: 1px solid red;
}
</style>
