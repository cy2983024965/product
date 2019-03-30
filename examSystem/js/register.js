setTimeout(function(){
	
		var registerUserName = document.getElementById("registerUserName");
	    var registerPassWord = document.getElementById("registerPassWord1");
	    var secondPassWord = document.getElementById("registerPassWord2");
	    var registerText1 = document.getElementById("registerText1");
	    var oRadom = document.getElementById("registerRadom");
	    var oBtn2 = document.getElementById("btn");
		var flag = true;
	    oBtn2.addEventListener("click",refer);
		
	    //用户名校验
		registerUserName.onblur = function(){
			flag = true;

	        var replaceUseName = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/;
	
	        if(registerUserName.value == ""){

				registerUserName.placeholder = "用户名不能为空！";
				registerUserName.className = "error";
				flag = false;
	        }else if(replaceUseName.test(registerUserName.value)){

				registerUserName.value = "";
				registerUserName.placeholder = "用户名含有非法字符！";
				registerUserName.className = "error";
				flag = false;

	        }else if(registerUserName.value == window.localStorage.getItem("userName")){

				registerUserName.value = "";
				registerUserName.placeholder = "用户名已存在！";
				registerUserName.className = "error";
				flag = false;
			}
	    };
	
	    //密码校验
			registerPassWord.onblur = function(){

	        var replacePassWord = /[\u4e00-\u9fa5]/;
				flag = true;

	        if(registerPassWord.value == ""){

				registerPassWord.placeholder = "密码不能为空！";
				registerPassWord.className = "error";
				flag = false;

	        }else if(replacePassWord.test(registerPassWord.value)){

				registerPassWord.value = "";
				registerPassWord.placeholder = "密码不能为汉字！";
				registerPassWord.className = "error";
				flag = false;
	
	        }

	    };
	
	    //确认密码校验
			secondPassWord.onblur = function(){
				flag = true;
	        if(registerPassWord.value != secondPassWord.value){
				secondPassWord.value = "";
				secondPassWord.placeholder = "两次输入密码不一样！";
				secondPassWord.className = "error";
				flag = false;
	        }
	    };
		//验证码校验
			registerText1.onblur = function () {
				flag = true;
				if(registerText1.value == "" || registerText1.value != oRadom.innerText){
					// console.log(registerText1.value);
					// console.log(oRadom.innerText);
					registerText1.placeholder = "请输入正确的验证码！"
					registerText1.className = "error";
					flag = false;
				}
			};

	    //注册提交
	    function refer(){

			if (flag == true){

				window.localStorage.setItem("userName",registerUserName.value);
				window.localStorage.setItem("PassWord",registerPassWord.value);
				registerUserName.value = "";
				registerPassWord.value = "";
				secondPassWord.value = "";
				registerText1.value = "";
				alert("注册成功！");
				location.href = "login.html"

			}else{

				alert("注册失败！")

			}
	    }
},0)