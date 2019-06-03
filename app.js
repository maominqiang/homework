// 实例化vue对象
new Vue({
  el: '#vue-app',
  data: {
    name: 'Mad.Max',
	website:"https://www.baidu.com",
	websiteTag:"<a href='https://baidu.com'>百度</a>"
  },
  methods:{
	hello:function(Str){
		var h = new Date().getHours();
		if(h >= 19){
			return "Good evening ," + Str;
		}else if(h >= 12){
			return "Good Afternoon ," + Str;
		}else{
			return "Good Morning ," + Str;
		} 
	}
	  
  }

})


// var app = new Vue({ 
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// });
