<template>
  <div class="dashboard-container">
    <v-graph
      :model="modelData"
      :legends="legends"
      :node-colors="nodeColors"
      :node-sizes="nodeSizes"
      :relation-colors="relationColors"
    />
  </div>
</template>

<script>
import Graph from '@/components/Graph'

const modelData = require('@/views/utilityComponent/Group/mock/mock.json')
export default {
  name: 'Graph',
  components: {
    'v-graph': Graph
  },
  data() {
    return {
      modelData,
      legends: [
        { label: "事项", color: "rgb(234 124 204)" },
        { label: "企业", color: "rgb(145 204 117)" },
        { label: "企业人员", color: "#0183fe" },
        { label: "公职人员", color: "#f25a29" },
        { label: "单位", color: "rgb(115 192 222)" },
      ],
      nodeColors: {
        "TINOGISS_ITEM": "rgb(234 124 204)",
        "TINOGISS_ITEM_ENTERPRISE": "rgb(145 204 117)",
        'TINOGISS_ITEM_ENTERPRISE_PERSON': '#0183fe',
        'TINOGISS_ITEM_PERSON': '#0183fe',
        'GZ_QYDJXX': 'rgb(145 204 117)',
        'GZ_QYDJXX_TZRJCZQK': '#0183fe',
        'GZ_QYDJXX_ZYRYXX': '#0183fe',
        'DWD_GOV_PUBLIC_PERSON': '#f25a29',
        'DWD_GOV_PUBLIC_UNIT': 'rgb(115 192 222)',
        'DWD_GOV_PUBLIC_PERSON_FAMILY': '#0183fe',
      },
      nodeSizes: {
        "TINOGISS_ITEM": 120,
        "TINOGISS_ITEM_ENTERPRISE": 100,
        'TINOGISS_ITEM_ENTERPRISE_PERSON': 140,
        'TINOGISS_ITEM_PERSON': 140,
        'GZ_QYDJXX': 100,
        'GZ_QYDJXX_TZRJCZQK': 140,
        'GZ_QYDJXX_ZYRYXX': 140,
        'DWD_GOV_PUBLIC_PERSON': 160,
        'DWD_GOV_PUBLIC_UNIT': 120,
        'DWD_GOV_PUBLIC_PERSON_FAMILY': 140,
      },
      relationColors: {
        "TINOGISS_ITEM_ENTERPRISE_PERSON": '#d0e3a0',
        "GZ_QYDJXX_TZRJCZQK": '#d0e3a0',
        "GZ_QYDJXX_ZYRYXX": '#d0e3a0',
        "DWD_GOV_PUBLIC_PERSON_FAMILY": '#f47349',
        "DWD_GOV_PUBLIC_PERSON": '#99cee0'
      }
    }
  }
}
</script>
