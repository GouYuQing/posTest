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
                <template scope="scope">
                  <el-button type="text" size="small" @click=" delateGoods(scope.row)" >删除</el-button>
                  <!-- 直接增加数量scope.row好神奇喔 -->
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">
             <small> 数量： </small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalMony}}元
            </div>
            <div class="btnn" >
              <el-button type="warning" @click="getFoods">挂单</el-button>
              <el-button type="danger" @click="deleteAllGoods">删除</el-button>
              <el-button type="success" @click="checkOut">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            <div id="cancelled" style="display:none">
              <el-table :data="tableData" border show-summary style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="60"></el-table-column>
              <el-table-column prop="price" label="价格" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click=" delateGoods(scope.row)" >删除</el-button>
                  <!-- 直接增加数量scope.row好神奇喔 -->
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">
             <small> 数量： </small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalMony}}元
            </div>
            <div class="btnn" scope="scope">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="deleteAllGoods">删除</el-button>
              <el-button type="success" @click="checkOut">结账</el-button>
            </div>
            </div>
             <div id="cancelled1">
               <el-table :data="tableData" border show-summary style="width:100%">
              <el-table-column label="商品名称"></el-table-column>
              <el-table-column label="数量" width="60"></el-table-column>
              <el-table-column  label="价格" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template>
                  <el-button type="text" size="small"></el-button>
                  <!-- 直接增加数量scope.row好神奇喔 -->
                  <el-button type="text" size="small" ></el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">
             <small> 数量： 0</small> &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：0</small>&nbsp;&nbsp;元
            </div>
            <div class="btnn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
             </div>
          </el-tab-pane>
          <el-tab-pane label="外卖">
              <el-table :data="tableData" border show-summary style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="60"></el-table-column>
              <el-table-column prop="price" label="价格" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click=" delateGoods(scope.row)" >删除</el-button>
                  <!-- 直接增加数量scope.row好神奇喔 -->
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">
             <small> 数量： </small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalMony}}元
            </div>
            <div class="btnn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="deleteAllGoods">删除</el-button>
              <el-button type="success" @click="checkOut">结账</el-button>
            </div>               
         
          </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="17">
        <div class="oftenUse">
          <div class="title">常用商品</div>
          <div class="oftenUse-list">
            <ul>
              <li v-for="goods in oftenUse1" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="often-price">${{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="foods in type0" @click="addOrderList(foods)">
                    <span class="foodImg">
                      <img src="foods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{foods.goodsName}}</span>
                    <span class="foodPrice">${{foods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="零食">
               <ul class="cookList">
                  <li v-for="foods in type1" @click="addOrderList(foods)">
                    <span class="foodImg">
                      <img src="foods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{foods.goodsName}}</span>
                    <span class="foodPrice">${{foods.price}}</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
               <ul class="cookList">
                  <li v-for="foods in type2" @click="addOrderList(foods)">
                    <span class="foodImg">
                      <img src="foods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{foods.goodsName}}</span>
                    <span class="foodPrice">${{foods.price}}</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
               <ul class="cookList">
                  <li v-for="foods in type3" @click="addOrderList(foods)">
                    <span class="foodImg">
                      <img src="foods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{foods.goodsName}}</span>
                    <span class="foodPrice">${{foods.price}}</span>
                  </li>
                </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data () {
    return {
      tableData: [],
      oftenUse1: [],
      type0: [],
      type1: [],
      type2: [],
      type3: [],
      totalMony:0,
      totalCount:0
    }
  },
  created:function(){
    //一旦创建就执行
    axios.get('http://localhost:5000/getData')
    .then(response=>{
      // console.log(response.data);
      this.oftenUse1 = response.data;
    })
    .catch(error=>{
      // console.log(error)
      alert('网络错误，访问的网页丢失了')
    })
    axios.get('http://localhost:5000/getData')
     .then(response=>{
       console.log(response.data);
      this.type0.push(response.data[0],response.data[1],response.data[2]);
      this.type1.push(response.data[3],response.data[4],response.data[5]);
      this.type2.push(response.data[6],response.data[7]);
      this.type3.push(response.data[8],response.data[9]);
    })
    .catch(error=>{
      // console.log(error)
      alert('网络错误，访问的网页丢失了')
    })
  },
  mounted: function () {
    var heightOrder = document.body.clientHeight
    // console.log(heightOrder)
    document.getElementById('order').style.height = heightOrder + 'px'
  },
  methods:{
    addOrderList(goods){
      //判断是否存在
      this.totalMony = 0;
      this.totalCount = 0;
      let isHave = false;
      for(let i = 0 ;i<this.tableData.length ; i ++){
        if(this.tableData[i].goodsId==goods.goodsId){
          isHave = true
        }
      }
      if(isHave){
        //存在就改变数量
        let arr = this.tableData.filter(a=>a.goodsId == goods.goodsId);
        arr[0].count++;
      }else{
        //不存在就要重现申请，主要是count为1
        let newGoods = {
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          price:goods.price,
          count:1
        }
        this.tableData.push(newGoods)
      }
      this.getAllMoney();
    
    },
    //删除单个商品 需要改变count和金额
    delateGoods(goods){
      //过滤出除了goodsid以外的id
      this.tableData = this.tableData.filter(o=>o.goodsId!=goods.goodsId);
      this.getAllMoney();
    },
    //提出来为了更好地复用，计算金额和count
    getAllMoney(){
      this.totalCount = 0;
      this.totalMony = 0;
      if(this.tableData){
        this.tableData.forEach((element)=>{
        this.totalCount+=element.count;
        //计算价格，原价格加上后面的单价乘以数量
        this.totalMony=this.totalMony+(element.price*element.count);
      })
      }
    },
    //删除所有商品
    deleteAllGoods(){
      this.tableData = [];
      this.totalMony = 0;
      this.totalCount = 0;
    },
    //结账
    checkOut(){
      if(this.totalCount!=0){
        this.tableData = [];
      this.totalMony = 0;
      this.totalCount = 0;
      this.$message({
        message:"结账成功",
        type:'success'
      })
      }else{
        this.$message.error('结账不能为空！');
      }
    },
    getFoods(){
      let flag = 1;
      if(flag == 1){
      document.getElementById('cancelled').style.display = 'block';
      document.getElementById('cancelled1').style.display = 'none';
      }else{
      document.getElementById('cancelled').style.display = 'none';
      document.getElementById('cancelled1').style.display = 'block';
      flag = 1;
      }
    }
  }
}
</script>

<style scoped>
.pos-dingdan {
  background-color: wheat;
  border-right: 1px solid palevioletred;
}
.btnn {
  margin-top: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid red;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.oftenUse-list li {
  list-style: none;
  float: left;
  border: 1px solid skyblue;
  padding: 10px;
  margin: 10px;
  background-color: white;
}
.often-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.total{
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid red;
}
</style>
