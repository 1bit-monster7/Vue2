<template>
  <div class="dashboard-container">
    <v-graph :legends="legends" :model="modelData" :node-colors="nodeColors" :relation-colors="relationColors" />
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
        { label: '父子1', value: '001', fill: 'red' },
        { label: '父子2', value: '001', fill: 'yellow' },
        { label: '父子3', value: '001', fill: 'blue' },
        { label: '父子4', value: '001', fill: 'green' }
      ],
      nodeColors: {
        'SUBJECT': 'rgb(234 124 204)',
        'DWD_GOV_PUBLIC_PERSON': '#f25a29',
        'DWD_GOV_PUBLIC_UNIT': 'rgb(115 192 222)',
        'DWD_GOV_PUBLIC_PERSON_FAMILY': '#0183fe',
        'TINOGISS_ITEM': 'red',
        'GZ_QYDJXX': 'green',
        'SUBJECT1': 'rgb(234 124 204)',
        'DWD_GOV_PUBLIC_PERSON1': '#f25a29',
        'DWD_GOV_PUBLIC_UNIT1': 'rgb(115 192 222)',
        'DWD_GOV_PUBLIC_PERSON_FAMILY1': '#0183fe',
        'TINOGISS_ITEM1': 'red',
        'GZ_QYDJXX1': 'green',
        'SUBJECT2': 'rgb(234 124 204)',
        'DWD_GOV_PUBLIC_PERSON2': '#f25a29',
        'DWD_GOV_PUBLIC_UNIT2': 'rgb(115 192 222)',
        'DWD_GOV_PUBLIC_PERSON_FAMILY2': '#0183fe',
        'TINOGISS_ITEM2': 'red',
        'GZ_QYDJXX2': 'green',
        'SUBJECT3': 'rgb(234 124 204)',
        'DWD_GOV_PUBLIC_PERSON3': '#f25a29',
        'DWD_GOV_PUBLIC_UNIT3': 'rgb(115 192 222)',
        'DWD_GOV_PUBLIC_PERSON_FAMILY3': '#0183fe',
        'TINOGISS_ITEM3': 'red',
        'GZ_QYDJXX3': 'green',
        'SUBJECT4': 'rgb(234 124 204)',
        'DWD_GOV_PUBLIC_PERSON4': '#f25a29',
        'DWD_GOV_PUBLIC_UNIT4': 'rgb(115 192 222)',
        'DWD_GOV_PUBLIC_PERSON_FAMILY4': '#0183fe',
        'TINOGISS_ITEM4': 'red',
        'GZ_QYDJXX4': 'green'

      },
      relationColors: {
        'DWD_GOV_PUBLIC_PERSON_FAMILY': '#f47349',
        'DWD_GOV_PUBLIC_PERSON': '#99cee0',
        'DWD_GOV_PUBLIC_PERSON-DWD_GOV_PUBLIC_PERSON_FAMILY': 'red'
      }
    }
  }
}
</script>
