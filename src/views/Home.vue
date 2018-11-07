<template>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container>
      
        <el-table :data="tableData" border style="width:100%">
      <!-- <el-table-column label="操作" fixed="left" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column> -->
      <el-table-column prop="date" label="日期" width="100"></el-table-column>
      <el-table-column prop="num" label="炉次" width="100"></el-table-column>
      <el-table-column prop="bktime" label="标准开口时间" width="100"></el-table-column>
      <el-table-column prop="place" label="对罐位置" width="100"></el-table-column>
      <el-table-column prop="order" label="高铁出炉先后顺序(罐号)" width="100"></el-table-column>
      <el-table-column prop="lttem" label="炼铁出铁温度(℃)" width="100"></el-table-column>
      <el-table-column prop="gui" label="铁水硅含量" width="100"></el-table-column>
      <el-table-column prop="dgtime" label="高炉对罐时间" width="100"></el-table-column>
      <el-table-column prop="sktime" label="实际开口时间" width="100"></el-table-column>
      <el-table-column prop="min" label="实际出铁时间(分钟)" width="100"></el-table-column>
      <el-table-column prop="ctmess" label="出铁异常信息" width="100"></el-table-column>
      <el-table-column prop="lgtime" label="连挂时间" width="100"></el-table-column>
      <el-table-column prop="tltime" label="脱硫对罐时间" width="100"></el-table-column>
      <el-table-column prop="tbtime" label="脱硫完毕时间" width="100"></el-table-column>
      <el-table-column prop="sttime" label="实际脱硫时间(分钟)" width="100"></el-table-column>
      <el-table-column prop="onetem" label="脱硫罐到脱硫站温度(℃)" width="100"></el-table-column>
      <el-table-column prop="twotem" label="不脱硫罐到脱硫站温度(℃)" width="100"></el-table-column>
      <el-table-column prop="thrtem" label="脱硫罐脱硫后温度(℃)" width="100"></el-table-column>
      <el-table-column prop="foutem" label="不脱硫罐脱硫后温度(℃)" width="100"></el-table-column>
      <el-table-column prop="fivtem" label="脱硫罐从炼铁到脱硫站过程温降(℃)" width="100"></el-table-column>
      <el-table-column prop="sixtem" label="不脱硫罐从炼铁到脱硫站过程温降(℃)" width="100"></el-table-column>
      <el-table-column prop="sevtem" label="脱硫罐脱硫过程温降(℃)" width="100"></el-table-column>
      <el-table-column prop="nintem" label="不脱硫罐在脱硫站等待过程温降(℃)" width="100"></el-table-column>
      <el-table-column prop="tsmess" label="脱硫异常信息" width="100"></el-table-column>
      <el-table-column prop="reason" label="未拆组原因" width="100"></el-table-column>
      <el-table-column prop="onetime" label="不脱硫重罐到达混铁炉时间" width="100"></el-table-column>
      <el-table-column prop="twotime" label="不脱硫空罐离开混铁炉时间" width="100"></el-table-column>
      <el-table-column prop="thrtime" label="脱硫重罐到达混铁炉时间" width="100"></el-table-column>
      <el-table-column prop="fourtime" label="脱硫空罐离开混铁炉时间" width="100"></el-table-column>
      <el-table-column prop="number" label="拆组不脱硫罐数" width="100"></el-table-column>
      <el-table-column prop="eleten" label="脱硫罐到达混铁炉温度(℃)" width="100"></el-table-column>
      <el-table-column prop="twetem" label="不脱硫罐到达混铁炉温度(℃)" width="100"></el-table-column>
      <el-table-column prop="thitem" label="脱硫罐从炼铁到混铁炉温降(℃)" width="100"></el-table-column>
      <el-table-column prop="fourtem" label="不脱硫罐从炼铁到混铁炉温降(℃)" width="100"></el-table-column>
      <el-table-column prop="fivetime" label="混铁炉不脱硫铁罐兑铁时间(分钟)" width="100"></el-table-column>
      <el-table-column prop="sixtime" label="混铁炉脱硫铁罐兑铁时间(分钟)" width="100"></el-table-column>
      <el-table-column prop="dtmes" label="混铁炉兑铁异常信息" width="100"></el-table-column>
      <el-table-column prop="sevtime" label="炼铁对罐到不脱硫空罐离开混铁炉时间" width="100"></el-table-column>
      <el-table-column prop="eighttime" label="炼铁对罐到脱硫空罐离开混铁炉时间" width="100"></el-table-column>
      <el-table-column prop="yxgz" label="运行罐组" width="100"></el-table-column>
      <el-table-column prop="ysxx" label="运输异常信息" width="100"></el-table-column>
      <el-table-column prop="people" label="高炉区值班员" width="100"></el-table-column>

    </el-table>
    </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      tableData:[
        {date:'2018-11-3',
        num:'160060382'}
      ]
    }
  }
}
</script>
