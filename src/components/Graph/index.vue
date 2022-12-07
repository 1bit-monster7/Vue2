<template>
  <div id="graphContainer" class="graph_container" style="position: relative">
    <!--传入一个legend 不传则不显示-->
    <div class="customize_legend" v-if="legends && legends.length>0">
      <div class="legend_items" v-for="(item,index) in legends" :key="index">
        <div class="legend_radio" :style="{background:item.color}"></div>
        <div class="legend_label">{{item.label}}</div>
      </div>
    </div>
    <div id="container" style="height: 70vh; background: #fff"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
import { debounce } from '@/utils'

export default {
  name: 'erdas',
  props: {
    nodeColors: {
      type: Object,
      default: () => ({})
    },
    nodeSizes: {
      type: Object,
      default: () => ({})
    },
    relationColors: {
      type: Object,
      default: () => ({})
    },
    focusNode: String,
    model: Object,
    legends: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      globalStyle: {
        normalLineWidth: 3, //默认的时候lineWidth大小
        hoverLineWidth: 6,//hover时的lineWidth大小
        nodeSize: 120,//初始节点大小
        fontSize: 18, //文字尺寸
        fontMaxRows: 4,//限制最多多少行
      },
      graph: null,
      toolbar: null,
      $_resizeCanvas: null
    }
  },
  mounted() {
    this.init()
    //节流检测全屏状态更新画布位置和大小
    this.$_resizeCanvas = debounce(() => {
      this.resizeCanvas()
    }, 10, true)
    window.addEventListener('resize', this.$_resizeCanvas)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeCanvas) //移除事件
    this.$_resizeCanvas = null
  },
  Destroy() {
    window.removeEventListener('resize', this.$_resizeCanvas) //移除事件
    this.$_resizeCanvas = null
  },
  methods: {
    //页面视口大小更新后canvas画布进行更新
    resizeCanvas() {
      const dom = document.getElementById('graphContainer')
      let { width, height } = dom.getBoundingClientRect()
      this.graph.changeSize(width, height) //改变画布大小 设置为最大视口宽高
      this.toolbar.handleDefaultOperator('autoZoom')
    },
    //超出换行,溢出省略
    fittingString(node, fontSize, max_rows) {
      let currentWidth = 0 //计算宽度
      let next_index = 0   //下次截取坐标
      let result = []      //结果
      let numberOfExecutions = 1 //执行次数
      let str = node.label;
      //根据节点size 减去 3个字符宽度 来确认最大宽
      let maxWidth = Math.floor(node.size - (fontSize * 3));
      str = str.replace(/\s?/g, ''); //所有空格去除
      let array_str = str.split('')
      const pattern = new RegExp('[\u4E00-\u9FA5]+') //汉字字符
      array_str.map((item, i) => {
        //中文或英文的宽度占用计算方式
        if (pattern.test(item)) {
          currentWidth += fontSize
        } else {
          currentWidth += G6.Util.getLetterWidth(item, fontSize)
        }
        if (max_rows >= numberOfExecutions) {
          if (currentWidth > maxWidth) {
            //第一次执行时从下标0开始
            currentWidth = 0
            result.push(str.slice(next_index, i))
            numberOfExecutions++
            next_index = i //记录本次截取的截止下标作为下一次的开始下标
          }
          //如果到最后一次执行  且执行次数大于1
          if (i === array_str.length - 1 && numberOfExecutions > 1) {
            let last_str = str.slice(next_index, array_str.length)
            result.push(last_str)
          }
        }
      })
      if (result.length < 1) {
        return str
      } else {
        //用于判断字符是否和初始的字符一样长度 如果不一样说明 还有剩余字符未展示 则用省略号替代...
        let str_array = result.join('')
        if (str_array.length !== str.length) {
          result[max_rows - 1] = result[max_rows - 1] + '..'
        }
        return result.join('\n')
      }
    },
    //当前是否处于全屏状态
    isFullScreen() {
      return !!(
        document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
      )
    },
    //全屏的兼容写法
    fullScreen(ele) {
      const func =
        ele.requestFullscreen ||
        ele.mozRequestFullScreen ||
        ele.webkitRequestFullscreen ||
        ele.msRequestFullscreen
      func.call(ele)
    },
    //退出全屏兼容写法
    exitFullscreen() {
      const func =
        document.exitFullScreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen ||
        document.msExitFullscreen
      func.call(document)
    },
    //清理节点状态
    clearAllStats(graph) {
      graph.setAutoPaint(false)
      graph.getNodes().forEach(function(node) {
        graph.clearItemStates(node)
      })
      graph.getEdges().forEach(function(edge) {
        graph.clearItemStates(edge)
      })
      graph.paint()
      graph.setAutoPaint(true)
    },
    //初始化
    init() {
      let g6_nodes = this.model.nodes.map((v, i) => {
        let {id, name, color, type} = v
        let vNode = {
          name, //备份原始数据名
          id,
          label: name,//处理后的字符串
          class_type: type, //type与原始配置属性type冲突 所以起名为class_type
          size: this.nodeSizes[type] || this.globalStyle.nodeSize, //优先取数据自带size 没有则默认size
          style: {
            fill: this.nodeColors[type]
          },
          //配置文本
          labelCfg: {
            style: {
              fontSize: this.globalStyle.fontSize,
              fill: 'white', //文字颜色
              cursor: 'pointer' //鼠标悬浮时的鼠标样式
            },
            position: 'center' //label所在位置
          }
        }
        vNode.label = this.fittingString(vNode, this.globalStyle.fontSize, this.globalStyle.fontMaxRows)
        return vNode
      })
      let g6_edges = this.model.relations.map(v => {
        let {name, source, target, type, lineWidth} = v
        return {
          name, //备份原始数据名
          label: name,
          source,
          target,
          class_type: type,
          style: {
            lineWidth: this.globalStyle.normalLineWidth, //边线宽度
            stroke: this.relationColors[type], //线条颜色
            cursor: 'pointer', //鼠标悬浮时的鼠标样式
            lineDash: [3, 5]// 虚线  [0] 实线
          },
          //配置文本
          labelCfg: {
            style: {
              fontSize: this.globalStyle.fontSize,
              fill: 'black' //文字颜色
            }
          }
        }
      })
      //render data
      const data = {
        nodes: g6_nodes,
        edges: g6_edges
      }

      //处理两个节点多条边 两条平行边的之间的距离改为50
      G6.Util.processParallelEdges(data.edges, 50);

      //canvas size
      const width = document.getElementById('container').scrollWidth
      const height = document.getElementById('container').scrollHeight || 600
      //Menu操作菜单
      const menu = new G6.Menu({
        offsetX: 6,
        offsetY: 10,
        itemTypes: ['node'],
        getContent(e) {
          const outDiv = document.createElement('div')
          outDiv.style.width = '180px'
          outDiv.innerHTML = `<ul>
        <li>测试01</li>
        <li>测试01</li>
        <li>测试01</li>
        <li>测试01</li>
        <li>测试01</li>
      </ul>`
          return outDiv
        },
        handleMenuClick(target, item) {
          console.log(target, 'target')
          console.log(item, 'item')
        }
      })
      //顶部操作栏
      const toolbar = new G6.ToolBar({
        position: {
          x: 0,
          y: 0
        },
        handleClick: (code, graph) => {
          if (code === 'autoZoom') {
            //是否处于全屏效果
            let canvas_box = document.getElementById('graphContainer')
            if (this.isFullScreen()) {
              this.exitFullscreen()
            } else {
              this.fullScreen(canvas_box)
            }
          } else {
            toolbar.handleDefaultOperator(code)
          }
        }
      })
      this.toolbar = toolbar
      //tips
      const tooltip = new G6.Tooltip({
        offsetX: 10,
        offsetY: 10,
        fixToNode: [1, 0.5],
        itemTypes: ['node', 'edge'],
        getContent: (e) => {
          const outDiv = document.createElement('div')
          outDiv.style.width = 'fit-content'
          outDiv.style.height = 'fit-content'
          const model = e.item.getModel()
          if (e.item.getType() === 'node') {
            outDiv.innerHTML = `${model.name}`
          } else {
            const source = e.item.getSource()
            const target = e.item.getTarget()
            outDiv.innerHTML = `来源：${source.getModel().name}<br/>去向：${target.getModel().name}`
          }
          return outDiv
        }
      })
      //render
      const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        plugins: [tooltip, toolbar],
        fitCenter: true,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'] // 允许拖拽画布、放缩画布、拖拽节点、设置高亮
        },
        // 边不同状态下的样式集合
        edgeStateStyles: {
          // 鼠标点击边，即 click 状态为 true 时的样式
          hover: {
            lineWidth: this.globalStyle.hoverLineWidth, //边线宽度
            lineDash: [0]// 虚线  [0] 实线
          }
        },
        nodeStateStyles: {
          lineWidth: 0,
          highlight: {
            opacity: 1,
            lineWidth: 10
          },
          dark: {
            opacity: 1
          }
        },
        defaultEdge: {
          style: {
            endArrow: true //结束箭头
          }
        },
        defaultNode: {
          type: 'circle' //节点形状 圆
        },
        layout: {
          type: 'radial',
          focusNode: this.focusNode,
          linkDistance: 150, //每个线条长度
          unitRadius: 300, //每个节点距离
          preventOverlap: true,
          strictRadial:true,
          nodeSize: this.globalStyle,
          workerEnabled: true,       // 可选，开启 web-worker
        }
      })
      this.graph = graph
      //渲染
      graph.data(data)
      graph.render()
      //events
      graph.on('node:mouseenter', (evt) => {
        const { item } = evt
        let edges = item._cfg.edges
        //所有元素状态清空及添加dark状态
        graph.getNodes().forEach(function(node) {
          graph.clearItemStates(node)
          graph.setItemState(node, 'dark', true)
        })
        //该节点关闭dark状态
        graph.setItemState(item, 'dark', false)
        //该节点添加高亮
        graph.setItemState(item, 'highlight', true)
        //关联节点添加高亮 文字改变为黑色
        graph.getEdges().forEach(function(edge) {
          if (edge.getSource() === item) {
            graph.setItemState(edge.getTarget(), 'dark', false)
            graph.setItemState(edge.getTarget(), 'highlight', true)
            graph.setItemState(edge, 'highlight', true)
            edge.toFront()
            graph.updateItem(edge.getTarget(), {
              labelCfg: {
                style: {
                  fill: 'black'
                }
              }
            })
          } else if (edge.getTarget() === item) {
            graph.setItemState(edge.getSource(), 'dark', false)
            graph.setItemState(edge.getSource(), 'highlight', true)
            graph.setItemState(edge, 'highlight', true)
            edge.toFront()
            graph.updateItem(edge.getSource(), {
              labelCfg: {
                style: {
                  fill: 'black'
                }
              }
            })
          } else {
            //关联边上内容改为空
            graph.updateItem(edge, {
              label: ''
            })
            graph.setItemState(edge, 'highlight', false)
          }
        })
        //线条hover状态激活
        edges.map(x => {
          graph.setItemState(x, 'hover', true)
        })
        //本节点颜色变为黑色
        graph.updateItem(item, {
          labelCfg: {
            style: {
              fill: 'black'
            }
          }
        })
      })
      graph.on('node:mouseleave', (evt) => {
        //关联节点添加高亮 文字改变为黑色
        graph.getNodes().map(node => {
          graph.updateItem(node, {
            labelCfg: {
              style: {
                fill: 'white'
              }
            }
          })
        })
        graph.getEdges().forEach(function(edge) {
          //关联边上内容改为空
          graph.updateItem(edge, {
            label: edge._cfg.model.name
          })
        })
        this.clearAllStats(graph)
      })
      graph.on('canvas:click', (evt) => {
        graph.getNodes().forEach((node) => {
          graph.clearItemStates(node)
        })
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.graph_container{
  display: flex;
  flex-direction: column;
  background: #fff;
  .customize_legend{
    display: flex;
    width: 100%;
    padding-top: 10px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .legend_items{
      flex-shrink: 0;
      margin: 5px 10px;
      display: flex;
      align-items: center;
      font-size: 18px;
      .legend_radio{
        width: 18px;
        height:18px;
        border-radius: 50%;
        background-color:rgb(234 124 204); //默认小圆球颜色
        margin-right: 5px;
      }
      .legend_label{

      }
    }
  }
}
::v-deep {
  .g6-component-toolbar {
    li:nth-child(1), li:nth-child(2) {
      display: none;
    }
  }
}
</style>
