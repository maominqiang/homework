// 实例化vue对象
new Vue({
  el: '#vue-app',
  data: {
    age: 30,
	x:0,
	y:0,
  },
  methods:{
	  add:function(num){
		  if(num == 10){
			  this.age+=num;
		  }else{
			this.age++;  
		  }
	  },
	  minus:function(num){
		  this.age-=num;
	  },
	  updateXY:function(event){
		  // console.log(event);
		  this.x = event.offsetX;
		  this.y = event.offsetY;
	  }
  }

})

