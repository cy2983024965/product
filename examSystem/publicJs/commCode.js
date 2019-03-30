var oRadom;

//首次进入登录界面显示一个随机的四位数验证码
setTimeout(function(){

	oRadom = document.getElementsByClassName("show")[0];

	oRadom.innerText = radom(1000,9999);

},0);

//30秒后刷新验证码
setInterval(function(){
	oRadom = document.getElementsByClassName("show")[0];
	
	oRadom.innerText = radom(1000,9999);

},30000);

 radom();

//注册界面显示一个随机的四位数验证码
setTimeout(function(){
	

	oRadom = document.getElementsByClassName("show")[1];
	
	oRadom.innerText = radom(1000,9999);
	
	
},0);

//30秒后刷新验证码
setInterval(function(){
	oRadom = document.getElementsByClassName("show")[1];
	
	oRadom.innerText = radom(1000,9999);
	
},30000);

	