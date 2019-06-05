// 实例化vue对象
new Vue({
  el: '#vue-app',
  data: {
	a:0,
	b:0,
	age:20
  },
  methods:{
	addMethodA:function(){
		console.log("addA");
		return this.a + this.age;
	},
	addMethodB:function(){
		console.log("addB");
		return this.b + this.age;
	}
  },
  computed:{
	  addA:function(){
	  	console.log("addA");
	  	return this.a + this.age;
	  },
	  addB:function(){
	  	console.log("addB");
	  	return this.b + this.age;
	  }
  }

})