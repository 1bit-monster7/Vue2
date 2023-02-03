// genTestData.js
import randomName from "@/utils/getRandomName";

function getRandomByRange(start, end) {
  let length = end - start
  return start + (Math.random() * length) >>> 0
}

function getRandomCode() {
  return Math.random().toString(36).slice(2)
}

function getRandomCodeByData(data,id) {
  return data[getRandomByRange(0, data.length)][id]
}

export default function (treeConfig) {
  let data = []
  // 随机生成 x - x 个顶级节点
  for (let i = 0, l = getRandomByRange(treeConfig.topFloor.start, treeConfig.topFloor.end); i < l; i++) {
    data.push({[treeConfig.parentId]: '0', [treeConfig.id]: getRandomCode(), [treeConfig.label]: randomName.getName()})
  }
  // 随机生成 x-x 个随机关联节点
  for (let i = 0, l = getRandomByRange(treeConfig.innerLayer.start, treeConfig.innerLayer.end); i < l; i++) {
    data.push({
      [treeConfig.parentId]: getRandomCodeByData(data,treeConfig.id),
      [treeConfig.id]: getRandomCode(),
      [treeConfig.label]: randomName.getName()
    })
  }
  return data.sort(() => (Math.random() - 0.5))
}
