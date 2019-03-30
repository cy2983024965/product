setTimeout(function(){
	
	var oBtn1 = document.getElementById("btn1");
	var userName = document.getElementById("userName");
	var passWord = document.getElementById("passWord");
	var oText = document.getElementById("text");
	var radom = document.getElementById("radom");
	
	    oBtn1.addEventListener("click",show);

	    function show(){

			if(userName.value != window.localStorage.getItem("userName")){

				userName.value = "";
				userName.placeholder = "用户名不存在！";
				userName.className = "error";

			}else if( passWord.value != window.localStorage.getItem("PassWord")){

				passWord.value = "";
				passWord.placeholder = "密码错误！";
				passWord.className = "error";

			}else if(oText.value != radom.innerText){

				oText.value = "";
				oText.placeholder = "验证码不能为空";
				oText.className = "error";

			}else{
				location.href = "index.html"
				alert("登录成功，欢迎你！");
	        }
	
	    }

},0)
    
