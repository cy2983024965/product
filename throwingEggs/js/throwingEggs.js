
window.onload = function(){
	
	var td = document.getElementsByTagName("td");
	var arr=[],arr1=[];
	var x,y,z;

	[...td].forEach(function(item,i){
		
		var img = document.createElement("img");
		img.src = "img/jindan.gif";
		item.appendChild(img);
		
		//循环添加点击事件
		item.addEventListener("click",show);
		arr.push(i+1);

		function show(){
			
			if(i+1 == x || i+1 == y || i+1 == z){
				
				this.children[0].src= "img/jinhua.gif";
				
			}else{
				this.children[0].src= "img/kongdan.gif";
			}

		}
		
	})


	//获取随机数
	for(var i = 0;i<3;i++){
		var r = radom(0,arr.length);
		arr1.push(arr[r]);
		arr.splice(r,1);
		
	}
	
	x = arr1[0];
	y = arr1[1];
	z = arr1[2];
	
	
	// console.log(x,y,z)
	function radom(a,b){
		return Math.floor(Math.random()*(a-b)+b)
	}
}