<template>
    <el-dialog title="炼铁填写" :visible.sync="formVisible">
        <el-form :model="ltForm">
            <el-form-item label="日期" :label-width="formLabelWidth">
                <template>
                <div class="block">
                    <el-date-picker
                    v-model="ltForm.date"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
                </template>
            </el-form-item>
            <el-form-item label="炉次" :label-width="formLabelWidth">
                <el-input v-model="ltForm.luci" ></el-input>
            </el-form-item>
            <el-form-item label="标准开口时间" :label-width="formLabelWidth">
                <el-time-picker v-model="ltForm.bzkksj" :picker-options="{selectableRange:'00:00:00-23:59:59'}" placeholder="时间"></el-time-picker>
            </el-form-item>
            <el-form-item label="对罐位置" :label-width="formLabelWidth">
                <el-select v-model="ltForm.dgwz" placeholder="请选择对罐位置">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="出铁异常信息" :label-width="formLabelWidth">
                <el-input v-model="ltForm.ctycxx"></el-input>
            </el-form-item>
        </el-form>
        <el-button size="mini" type="primary" @click="newLine(ltTable)" icon="el-icon-edit"></el-button>
        <el-table :data="ltTable" border>
            <el-table-column prop="glctsx" label="高炉出铁先后顺序(罐号)" width="100">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.glctsx"></el-input>                  
                </template>
            </el-table-column>
            <el-table-column prop="ltctwd" label="炼铁出铁温度(℃)" width="100">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.ltctwd"></el-input>                  
                </template>
            </el-table-column>
            <el-table-column prop="tsghl" label="铁水硅含量" width="100">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.tsghl"></el-input>                  
                </template>
            </el-table-column>
            <el-table-column prop="gldgsj" label="高炉对罐时间" width="100">
                <template slot-scope="scope">
                  <el-time-picker v-model="scope.row.gldgsj" value-format="timestamp" :picker-options="{selectableRange:'00:00:00-23:59:59'}" placeholder="时间"></el-time-picker>
                </template>
            </el-table-column>
            <el-table-column prop="sjkksj" label="实际开口时间" width="100">
                <template slot-scope="scope">
                  <el-time-picker v-model="scope.row.sjkksj" value-format="timestamp" :picker-options="{selectableRange:'00:00:00-23:59:59'}" placeholder="时间" @change="getTime"></el-time-picker>
                </template>
            </el-table-column>
            <el-table-column prop="sjctsj" label="实际出铁时间(分钟)" width="100">
            </el-table-column>
            <el-table-column fixed="right">
                <template slot-scope="scope">
                    <el-button size="mini" icon="el-icon-delete" @click.native.prevent="delLine(scope.$index,ltTable)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div slot="footer">
            <el-button @click="confirm">确定</el-button>
            <el-button @click="cancel">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>

export default {
    data(){
        return {
            ltForm:{
                date:'',
                luci:'',
                bzkksj:'',
                dgwz:null,
                ctycxx:''
            },
            formVisible:true,
            ltTable:[{
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''
            },
            {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''
            },
            {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''
            },
            {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''
            },
            {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''
            }],
            options:[
                    {value:'选项1',label:'1#高炉'},
                    {value:'选项2',label:'5#高炉'},
                    {value:'选项3',label:'6#高炉东'},
                    {value:'选项4',label:'6#高炉西'}
                ],
            formLabelWidth:'100px'
        }
    },
    methods:{
        newLine(tableData){
            tableData.push({
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''},
                {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''},
                {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''},
                {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''},
                {
                glctsx:'',
                ltctwd:'',
                tsghl:'',
                gldgsj:'',
                sjkksj:'',
                sjctsj:''})
        },
        delLine(index,rows){
            rows.splice(index,1)
        },
        getTime(){
            this.ltTable[0].sjctsj=this.ltTable[0].gldgsj && this.ltTable[0].sjkksj ? (this.ltTable[0].sjkksj - this.ltTable[0].gldgsj)/60000 : null
            this.ltTable[1].sjctsj=this.ltTable[1].gldgsj && this.ltTable[1].sjkksj ? (this.ltTable[1].sjkksj - this.ltTable[1].gldgsj)/60000 : null
            this.ltTable[2].sjctsj=this.ltTable[2].gldgsj && this.ltTable[2].sjkksj ? (this.ltTable[2].sjkksj - this.ltTable[2].gldgsj)/60000 : null
            this.ltTable[3].sjctsj=this.ltTable[3].gldgsj && this.ltTable[3].sjkksj ? (this.ltTable[3].sjkksj - this.ltTable[3].gldgsj)/60000 : null
            this.ltTable[4].sjctsj=this.ltTable[4].gldgsj && this.ltTable[4].sjkksj ? (this.ltTable[4].sjkksj - this.ltTable[4].gldgsj)/60000 : null
            this.ltTable[5].sjctsj=this.ltTable[5].gldgsj && this.ltTable[5].sjkksj ? (this.ltTable[5].sjkksj - this.ltTable[5].gldgsj)/60000 : null
        },
        confirm(){
            this.$emit('confirm')
        },
        cancel(){
            this.$emit('confirm',this.ltForm,this.ltTable)
        }
    }
}
</script>
