<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
    <!-- <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border style="width:100%">
      <el-table-column label="操作" fixed="left" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
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
      </el-col>
    </el-row> -->
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      // tableData:[
      //   {date:'2018-11-3',
      //   num:'160060382'}
      // ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
