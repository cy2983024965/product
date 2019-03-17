var vm = new Vue({
	el:"#wrap",
	data:{
		userName:"",
		age:"",
		sex:"",
		num:"",
		arr:[]
	},
	created(){
		var tableData = JSON.parse(localStorage.getItem('nameCy'));
		//如果获取之前没有存储过数据,那么初始化这个tableData为一个空数组。
		this.arr = tableData?tableData:[];
	},
	methods:{
		//提交按钮
		add(){
			// console.log(this.num)
			if(this.num != ""){
				//修改提交,判断输入框是否为空
				if(this.userName!= "" && this.age != "" && this.sex != ""){
					this.arr.splice(this.num-1,1,{
						"name":this.userName,
						"age":this.age,
						"sex":this.sex
					});
					this.emptyContent();// 清除文本框内容,更新视图
					alert("修改成功！");
				}else{
					alert("请输入完整的信息！");
				}

			}else if(this.userName!= "" && this.age != "" && this.sex != ""){
				
				obj={
					"name":this.userName,
					"age":this.age,
					"sex":this.sex
				}
				this.arr.push(obj);
				this.emptyContent();// 清除文本框内容,更新视图
				alert("保存成功！");
				
			}else{
				  alert("请输入信息！")
			}
		},
		//删除信息
		dele(i){
			
			this.arr.splice(i,1);
			localStorage.setItem("nameCy",JSON.stringify(this.arr));
			alert("删除成功！");
		},
		//修改信息
		updata(i){
			// console.log(i)
			this.userName =this.arr[i].name;
			this.age = this.arr[i].age;
			this.sex = this.arr[i].sex;
			this.num = i+1;
		},
		//封装更新视图,清空输入框的内容
		emptyContent(){
			localStorage.setItem("nameCy",JSON.stringify(this.arr));
			
			this.userName = "";
			this.age = "";
			this.sex = "";
			this.num = "";
			
		}
		
	}
				
})