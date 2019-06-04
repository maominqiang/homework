// 实例化vue对象
new Vue({
  el: '#vue-app',
  data: {
	name:"",
	age:0
  },
  methods:{
	  logname:function(){
		  // console.log(this.$refs.name.value);
		  // this.name = this.$refs.name.value;
	  },
	  logage:function(){
		  // console.log("正在输入年龄");
		  this.age= this.$refs.age.value;
	  }
  }

})