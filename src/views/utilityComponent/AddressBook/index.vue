<template>
  <div @touchstart="_touchstart" @touchend="_touchend" class="address_book_container">
    <div ref="scroll_container" class="scroll-content">
      <div class="outer-items"
           @click.capture="_goTo(item.top)"
           v-for="item of groupList"
           :key="item.key">
        <div :class="{'active-title':currentTop === item.top}" class="items_title">{{ item.key }}</div>
        <div class="items_content" v-for="(node,nodeIndex) in item.list" :key="nodeIndex">
          {{ node.name }}
        </div>
      </div>
    </div>
    <div class="right-bar" @touchmove="_touchmove">
      <div
        class="items-bar"
        :data-top="item.top"
        @click="_goTo(item.top)"
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
import randomName from '@/utils/getRandomName'

export default {
  name: "addressBook",
  data() {
    return {
      list: [],
      groupList: [],
      currentTop: 0,
      prevOffset: -999,
      selectingLetter: false,
      indexBarPosX: "",
      isTrue: false,
    }
  },
  mounted() {
    for (let i = 0; i < 100; i++) {
      this.list.push(
        {
          id: i + 'id',
          name: randomName.getName()
        }
      )
    }
    this.groupList = this._group(this._sort(this.list), (v) => {
      return v.group //根据group分组
    })
    this._getScrollTops()  //给每个数据添加高度和scrollTop值
    console.log(this.groupList, 'g')
  },
  methods: {
    _touchend() {
      this.prevOffset = -9999;
      this.selectingLetter = false;
    },
    _touchstart(e) {
      if (!this.selectingLetter) {
        this.indexBarPosX = e.touches[0].clientX;
      }
      this.selectingLetter = true;
    },
    _touchmove(e) {
      const x = this.indexBarPosX;
      const y = e.touches[0].clientY;
      let target = document.elementFromPoint(x, y);
      let offset = target && target.dataset && target.dataset.top;
      if (offset && this.currentTop !== offset * 1) {
        this._goTo(offset);
      }
    },
    _getScrollTops() {
      this.$nextTick(() => {
        // 按字母排序分开的 dom 列表
        let list = [].slice.call(this.$refs.scroll_container.children, 0);
        // 对于每一个块计算距顶部的距离top 以及 通过getBoundingClientRect计算自身的高度
        // 每个块距离顶部的距离算法 ： top = 上一块的高度 + 上一块的top值
        list.forEach((node, index) => {
          if (index !== -1) {
            this.$set(this.groupList[index], 'top', index > 0 ? (this.groupList[index - 1].top + this.groupList[index - 1].height) : 0)
            this.$set(this.groupList[index], 'height', node.getBoundingClientRect().height)
          }
        });
      })
    },
    _goTo(top) {
      this.currentTop = top * 1;
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
  left: 50%;
  margin-top: 50px;
  transform: translateX(-50%);
  width: 400px;
  ::-webkit-scrollbar {
    //web-kit
    display: none;
  }

  -ms-overflow-style: none; // ie
  scrollbar-width: none; // 火狐
  .scroll-content {
    height: 80vh;
    overflow-y: scroll;
    background: #6E85B7;
    border-radius: 10px;

    .outer-items {
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      padding-left: 10px;
      border-bottom: 1px solid #CFD2CF;
      cursor: pointer;
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
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    color: #B2C8DF;

    .items-bar {
      padding: 1px 3px;
      margin: 5px 0;
      text-align: center;
      cursor: pointer;
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
