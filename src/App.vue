<template>
  <div id="app">
 
    <ul>
      <li v-for="item in list ">
        <span style="float:left;">{{item.name}}</span>
        <span style="margin-left: 30px;">{{item.age}}</span>
        <span style="float:right;" @click="delbyid(item.Id)">删除</span>
      </li>
    </ul>
    <input v-model="age" type="text" >
    <span @click="filterage">筛选</span>
    <div>
        <p><label>姓名：</label><input v-model="user.name" type="text" ></p>
        <p><label>年龄：</label><input v-model="user.age" type="text" ></p>
        <span @click="adduser">增加</span>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      list:[],
      age:'',
      user:{
        name:'',
        age:''
      }
    }
  },
  created(){
  	this.getlist();
  },
  methods:{
  		getlist(){

    		  this.axios.get('/test').then((response) => {
    		  	  console.log(response)
        
    		     this.list=response.data.list;
    		  }).catch((response) => {
    		    
    		    
    		  });

  		},
      filterage(){
          let params={
            age:this.age
          }
          this.axios.post('/query',params).then((response) => {
           
             this.list=response.data.list;
          }).catch((response) => {
            
            
          });
      },
      delbyid(id){
          let params={
            Id:id
          }
          this.axios.post('/del',params).then((response) => {
             this.getlist();
           
          }).catch((response) => {
            
            
          });
      },
      adduser(){
        let params={
            name:this.user.name,
            age:this.user.age
          }
          this.axios.post('/add',params).then((response) => {
             this.getlist();
           
          }).catch((response) => {
            
            
          });
      }
  }
}
</script>


