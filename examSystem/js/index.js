//倒计时
var btn=my$("btn");

var timer1=null;

//获取用户信息，退出到登录界面
$(".usercy")[0].innerText = "用户："+localStorage.getItem("userName")+"";

$("#quit").click(function(){
	
	window.location.href = "login.html";
})

	btn.onclick=start;
function start(){
	btn.disabled=true;
	clearInterval(timer1);
	var oData=document.getElementsByClassName("nei2_2")[0];
	var timer=null
	var m=10,//分钟
			s=0,//秒钟
			date;
	var obox=my$("box");
	var t=0;
	
	timer=setInterval(function(){
		t--;
		obox.style.top=t+"px";
		
		if(t==-300){
			clearInterval(timer);
		}
	},1);
	timer1=setInterval(function(){
		//秒为0 分钟减一
		if(s==0){
			s=60;
			m--;
		}
		//秒自减
		s--;
		//秒小于0变成0+s
		var os=s;
		if(s<10){
			os="0"+s;
			date=m+":"+os;
			oData.innerHTML=date;
		}else{
			date=m+":"+s;
			oData.innerHTML=date;
		}
		
		if(m==0&&s==0){
			window.prompt();//计时结束弹窗。
			clearInterval(timer1);
			
		}
	},1000)
		my$("submit").setAttribute("class","nei2_3");
		my$("submit").disabled=false;
	}
// $.ajax({
// 	url:"",
// 	
// })
$(function(){
	setInterval(function(){//
		if(parseInt(  $("#box").css("top") )>-600){
			$("#pre_btn").attr("disabled","disabled");
		}else{
			$("#pre_btn").attr("disabled",false);
		}
		if(parseInt($("#box").css("top"))>-300 || parseInt($("#box").css("top"))<-2700 ){
			$("#next_btn").attr("disabled","disabled");
		}else{
			$("#next_btn").attr("disabled",false);
		}
	},1)
	var a=-300;
	var timer=null;
	$("#next_btn").click(function(){
		clearInterval(timer)
		timer=setInterval(function(){
			a--;
			$("#box").css("top",a+"px");
			if(a%300==0){
				clearInterval(timer)
			}
		},1)
	})
	$("#pre_btn").click(function(){
		clearInterval(timer)
		timer=setInterval(function(){
			a++;
			$("#box").css("top",a+"px");
			if(a%300==0){
				clearInterval(timer)
			}
		},1)
	})
	
})
var arr=[0,1,1,2,{count:"03"},{count:"123"}, 1,1,"22,-22","74.7%"];//正确答案		
my$("submit").onclick=function(){
	btn.disabled=false;
	var arr1=[],arr2=[];//用户填写答案
	var err=[];//错误题目
	var num=0;
	var flag;
	var rad=document.getElementsByClassName('timu');//获取题目
	for(var j=0;j<rad.length;j++){
		var oInput=rad[j].getElementsByTagName('input');//每一个题目里面的选项
		if(j==4||j==5){
			arr1.push({count:""});
			flag=false;
		}else if(j==8||j==9){
			flag=false;
		}else{
			flag=true;
		}
		
		for(var i = 0;i<oInput.length;i++){
			// var flag=true;
			if(oInput[i].type=="radio"){
				if(oInput[i].checked){
					arr1.push(i);//选中的添加进用户填写答案里面
					flag=false;//都没有默认错误答案
				}
			}else if(oInput[i].type=="text"){
				arr1.push(oInput[i].value);
			}else{
				
				if(oInput[i].checked){
					arr1[j].count+=i+"";
				}
			}
		}
		if(flag){//错误答案
			arr1.push(9);
		}
	}
	for(var z=0;z<arr.length;z++){//答案比对
		if(arr[z]==arr1[z]){
			num++;
		}else if(j==4||j==5){
			if(arr[z].count==arr1[z].count){
				num++;
			}
		}else{
			err.push(z+1)//存错误题目
		}
	}
	var error=err.join();
	console.log(arr1)
	console.log("对了"+num+"题"+"   第"+error+"错了  总分："+num*10)
	alert("对了"+num+"题"+"   第"+error+"错了  总分："+num*10);
}
function fff(){
	$(".award").each(function(index,element){
		if(index==0){
			element.style.marginTop=parseInt(element.style.marginTop)-parseInt(element.style.marginTop)%75+"px";
			clearInterval(element.timer);
		}else if(index==1){
			y=getRand(200,450);
			setTimeout(function(){
				element.style.marginTop=parseInt(element.style.marginTop)-parseInt(element.style.marginTop)%75+"px";
				clearInterval(element.timer);
			},y)
		}else{
			 y=getRand(650,900);
			setTimeout(function(){
				element.style.marginTop=parseInt(element.style.marginTop)-parseInt(element.style.marginTop)%75+"px";
				clearInterval(element.timer);
			},y)
		}
	})
}
function eee(){
	$(".award").each(function(index,element){
		var x=0,y;
		
		element.timer=null;
		if(index==0){
			lottery_start(x,index,element);
		}else if(index==1){
			y=getRand(200,450);
			setTimeout(function(){
				lottery_start(x,index,element);
			},y)
		}else{
			 y=getRand(650,900);
			setTimeout(function(){
				lottery_start(x,index,element);
			},y)
		}
		
	})
}
//var timer0=null,timer1=null,timer2=null;
function lottery_start(x,index,element){
	
	element.timer=setInterval(function(){
		var ran=getRand(0,10)
		x=x-ran;
		if(x<=-400){
			x=0;
		}
		element.style.marginTop=x+"px";
	},1)
	
}	
$(".lottery").click(function(){
	
	clck();
	
})
function clck(){
	if($(".lottery").val()=="开始"){
		eee();
		$(".lottery").val("停止");
	}else{
		fff();
		$(".lottery").val("开始");
		$(".lottery").unbind("click");
		setTimeout(function(){
			$(".lottery").click(function(){
				clck();
			})
		},2000)
	}
}
