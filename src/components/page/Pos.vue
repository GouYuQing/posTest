<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-dingdan" id="order">
        <el-tabs>
          <!-- 组件标签 -->
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border show-summary style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="60"></el-table-column>
              <el-table-column prop="price" label="价格" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="btnn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>

            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单"></el-tab-pane>
          <el-tab-pane label="外卖"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-clo>我显示</el-clo>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  data () {
    return {
      tableData:[
        {
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, { 
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
          goodsName: '甜筒',
          price: 8,
          count:1
        }
      ]
    }
  },
  mounted: function () {
    var heightOrder = document.body.clientHeight
    console.log(heightOrder)
    document.getElementById('order').style.height = heightOrder + 'px'
  }
}
</script>

<style scoped>
.pos-dingdan {
  background-color: wheat;
  border-right: 1px solid palevioletred;
}
.btnn{
  margin-top: 10px;
}
</style>
