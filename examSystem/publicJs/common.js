//js获取id
function my$(id){
	return document.getElementById(id);
}
//获取a到b之间的随机数
function getRand(a,b){
	return Math.floor(Math.random()*(a-b)+b);
}
//获取时间
function getDate(){
	var d = new Date();
	//获取年
	var year = d.getFullYear();
	//获取月
	var month = d.getMonth()+1; // 0-11
	//获取日期
	var date = d.getDate();//1-31
	//获取星期
	var week = d.getDay();//0-6
	//获取现在是几点
	var hour = d.getHours();//0-23
	//获取现在是几分
	var minute = d.getMinutes();//0-59
	//获取现在是几秒
	var second = d.getSeconds();//0-59
	switch(week){
		case 0:
			week = '星期日';
			break;
		case 1:
			week = '星期一';
			break;
		case 2:
			week = '星期二';
			break;
		case 3:
			week = '星期三';
			break;
		case 4:
			week = '星期四';
			break;
		case 5:
			week = '星期五';
			break;
		case 6:
			week = '星期六';
			break;
	}
	if(hour<10){
		hour = '0'+hour
	}
	if(minute<10){
		minute = '0'+minute
	}
	if(second<10){
		second = '0'+second
	}
	return year+'年'+(month+1)+'月'+date+'日,'+week+','+hour+':'+minute+':'+second
}