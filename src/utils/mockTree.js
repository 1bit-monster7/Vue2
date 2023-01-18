// tree.js
export class TreeCreateFast {
  constructor(treeNode, treeConfig) {
    this.treeNode = treeNode
    this.treeConfig = Object.assign({
      fId: 'pid', // 关联的 parent_id 字段名
      id: 'id', // 关联的 parent_id 的 id 字段名
      rootId: '0', // 开始的 根节点关联的 parent_id 对应的 字段名
    }, treeConfig)
    this.treeData = [] // 树状的树数据
  }

  // 按 fId 分组
  groupBy(data) {
    let config = this.treeConfig
    let group = []
    data.forEach(v => {
      let key = v[config.fId]
      if (!group.hasOwnProperty(key)) {
        group[key] = [v]
      } else {
        group[key].push(v)
      }
    })
    return group
  }

  // 树生成, 递归调用
  createTree(data, parent = null) {
    let config = this.treeConfig
    let TreeNode = this.treeNode
    let treeData, pid, children
    treeData = []
    if (parent === null) {
      pid = config.rootId
    } else {
      pid = parent[config.id]
    }
    if (data.hasOwnProperty(pid)) {
      data[pid].forEach(val => {
        let t = {}
        TreeNode.call(t, val)
        children = this.createTree(data, Object.assign(t, val))
        treeData.push(t)
        treeData[treeData.length - 1].children = children
      })
    }
    return treeData
  }

  // 生成树
  create(data) {
    this.treeData = this.createTree(this.groupBy(data))
  }

  // 获取树状的树数据(深拷贝)
  getTreeData() {
    // 演示简易处理，无法处理循环引用对象，如果树节点需要保留父级引用，则需要改为可以处理循环引用的深拷贝方法
    return JSON.parse(JSON.stringify(this.treeData))
  }
}
