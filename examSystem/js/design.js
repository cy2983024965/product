setTimeout(function(){
	
		var bodyHeight = document.getElementsByTagName("body")[0];
		var winHeight = document.documentElement.clientHeight;
		bodyHeight.style.height = winHeight + "px";
		window.onresize= function(){
			var winHeight = document.documentElement.clientHeight;
			bodyHeight.style.height = winHeight + "px";
		}
		
		/*轮播start*/
		function Lunbo(){
			this.left=0;
			this.t=null;
		}
		Lunbo.prototype={
			run(){
				var _this=this;
				this.t=setInterval(function(){
					_this.left-=10;
					if(_this.left<-700){
						_this.left=0;
					}
					if(_this.left%350==0){
						clearInterval(_this.t);
						setTimeout(function(){
							_this.run()
						},2000)
					}
					document.getElementById("inner").style.left=_this.left+"px";
				},100)
			}
		}
		var lunbo=new Lunbo();
		lunbo.run();
		/*轮播end*/
		
		$(function(){
			$(".sign-in-box li input[type=text]").change(function(){
				$(this).css("text-align","left");
			});

			$(".sign-in-box li input[type=password]").change(function(){
				$(this).css("text-align","left");
			});
			
			$(".sign-in-box li:last-child input[type=text]").focus(function(){
				$(".sign-in-box li span").css("display","block");
			});
			
			
			$(".sign-in-box li:last-child input[type=text]").blur(function(){
				if($(".sign-in-box li:last-child input[type=text]").val()==""){
					$(".sign-in-box li span").css("display","none");
				}else{
					$(".sign-in-box li span").css("display","block");

				}
			});
			
			$(".font-box .btn1").click(function(){
				$(".sign-in-left").removeClass("flo-le-1");
				$(".sign-in-right").removeClass("flo-ri-1");
				$(".sign-in-left").addClass("flo-le");
				$(".sign-in-right").addClass("flo-ri");
				$(this).hide();
				$(".font-box .btn2").show();
				$(".sign-in-right1").css("display","none");
				$(".sign-in-right2").css("display","block");
			});
			
			
			$(".font-box .btn2").click(function(){
				$(".sign-in-left").removeClass("flo-le");
				$(".sign-in-right").removeClass("flo-ri");
				$(".sign-in-left").addClass("flo-le-1");
				$(".sign-in-right").addClass("flo-ri-1");
				$(this).hide();
				$(".font-box .btn1").show();
				
				$(".sign-in-right2").css("display","none");
				$(".sign-in-right1").css("display","block");
			})
				
		})
},0)