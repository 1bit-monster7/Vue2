<template>
  <div class="address_book_container">
    <div ref="scroll_container" class="scroll-content">
      <div class="outer-items" @click.capture="_goTo(item.top)"
           v-for="item of groupList"
           :key="item.key">
        <div :class="{'active-title':currentTop === item.top}" class="items_title">{{ item.key }}</div>
        <div class="items_content" v-for="(node,nodeIndex) in item.list" :key="nodeIndex">
          {{ node.name }}
        </div>
      </div>
    </div>
    <div class="right-bar" @mousemove="_mousemove">
      <div
        :data-top="item.top"
        @click="_goTo(item.top)" class="items-bar"
        v-for="item in groupList"
        :key="item.key"
        :class="{ activeBar:  currentTop === item.top }">
        {{ item.key }}
      </div>
    </div>
  </div>
</template>

<script>
import {debounce} from 'lodash';

export default {
  name: "addressBook",
  data() {
    return {
      list: [
        {id: "Cv", name: "明翔808", ji0: "", ji1: "4天8时15分", ji2: "", ji3: ""},
        {id: "4J", name: "金海788", ji0: "", ji1: "", ji2: "5天20时1分", ji3: ""},
        {id: "Cvq", name: "aj", ji0: "", ji1: "4天8时15分", ji2: "", ji3: ""},
        {id: "4R", name: "鲁荣远渔715", ji0: "", ji1: "6天8时4分", ji2: "", ji3: ""},
        {id: "4T", name: "鲁荣远渔885", ji0: "", ji1: "6天7时39分", ji2: "", ji3: ""},
        {id: "Hh", name: "丰汇9", ji0: "", ji1: "6天7时47分", ji2: "", ji3: ""},
        {id: "4U", name: "鲁荣远渔887", ji0: "", ji1: "6天8时9分", ji2: "", ji3: ""},
        {id: "4V", name: "鲁荣远渔277", ji0: "", ji1: "6天7时52分", ji2: "", ji3: ""},
        {id: "nP", name: "鲁荣远渔709", ji0: "", ji1: "6天7时56分", ji2: "", ji3: ""},
        {id: "il", name: "鲁荣远渔808", ji0: "", ji1: "6天7时36分", ji2: "", ji3: ""},
        {id: "R6", name: "泓达1", ji0: "", ji1: "", ji2: "2天12时20分", ji3: ""},
        {id: "J1", name: "润达605", ji0: "", ji1: "", ji2: "5天18时46分", ji3: ""},
        {id: "IQ", name: "SPRING OASIS", ji0: "", ji1: "5天22时14分", ji2: "", ji3: ""},
        {id: "ai", name: "鲁荣远渔708", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ1", name: "AK47", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ2", name: "AKQ8", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ3", name: "AKQ9", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ4", name: "AKQ1", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ5", name: "AKQ2", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ6", name: "AKQ3", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ7", name: "AKQ4", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ8", name: "AKQ5", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ9", name: "AKQ6", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
        {id: "aCQ10", name: "AKQ7", ji0: "", ji1: "6天7时43分", ji2: "", ji3: ""},
      ],
      groupList: [],
      currentTop: 0,
    }
  },
  mounted() {
    this.groupList = this._group(this._sort(this.list), (v) => {
      return v.group //根据group分组
    })
    this._getScrollTops()  //给每个数据添加高度和scrollTop值
  },
  methods: {
    _mousemove(e) {
      console.log(e, 'e')
    },
    _getScrollTops() {
      this.$nextTick(() => {
        // 按字母排序分开的 dom 列表
        let list = [].slice.call(this.$refs.scroll_container.children, 0);
        // 对于每一个块计算距顶部的距离top 以及 通过getBoundingClientRect计算自身的高度
        // 每个块距离顶部的距离算法 ： top = 上一块的高度 + 上一块的top值
        list.forEach((node, index) => {
          if (index !== -1) {
            this.groupList[index].top = index > 0 ? (this.groupList[index - 1].top + this.groupList[index - 1].height) : 0;
            this.groupList[index].height = node.getBoundingClientRect().height;
          }
        });
        console.log(this.groupList, 'g')
      });
    },
    _goTo(top) {
      if (this.currentTop === top) return
      console.log(top, 'top')
      this.currentTop = top;
      document.querySelector('.scroll-content').scrollTo({
        top: top,
        behavior: "smooth", // 滚动平滑
      })
    },
    //排序
    _sort(list) {
      return list.sort((a, b) => {
        let _a = this.$pinyin(a.name.charAt(0)).charAt(0);
        let _b = this.$pinyin(b.name.charAt(0)).charAt(0);
        return _a.localeCompare(_b)
      }).map(v => {
        return {
          name: v.name,
          group: this.$pinyin(v.name.charAt(0)).charAt(0).toUpperCase()
        }
      })
    },
    //分组
    _group(array, fun) {
      let groups = {};
      array.forEach(v => {
        let group = JSON.stringify(fun(v));
        groups[group] = groups[group] || {list: [], key: v.group};
        groups[group].list.push(v);
      });
      return Object.keys(groups).map(group => {
        return groups[group];
      });
    },
  }
}
</script>

<style scoped lang="scss">

.address_book_container {
  position: relative;
  width: 400px;
  height: 600px;
  margin: auto;

  ::-webkit-scrollbar {
    //web-kit
    display: none;
  }

  -ms-overflow-style: none; // ie
  scrollbar-width: none; // 火狐
  .scroll-content {
    width: 400px;
    height: 600px;
    overflow-y: scroll;
    background: #6E85B7;
    border-radius: 10px;

    .outer-items {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      padding-left: 10px;
      border-bottom: 1px solid #CFD2CF;

      .items_title {
        color: #B2C8DF;
        text-align: left;
        font-size: 25px;
      }

      .items_content {
        cursor: pointer;
        color: #C4D7E0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
      }

      .active-title {
        position: sticky;
        top: 0;
      }
    }
  }

  .right-bar {
    //右侧锚点
    position: absolute;
    right: 3%;
    top: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    color: #B2C8DF;

    .items-bar {
      padding: 1px 3px;
      text-align: center;
      cursor: pointer;
      margin: 4px 0;
      font-size: 14px;
    }

    .activeBar {
      color: #6E85B7;
      background: #F8F9D7;
      border-radius: 50%;
    }
  }
}
</style>
