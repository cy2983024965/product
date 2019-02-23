
//加载数据
setTimeout(function () {
    $.ajax({
        url:"http://192.168.6.227:3000/list",
        type:"get",
        dataType:"jsonp",
        success:function(result){

            var tpl = $("#template").html();
            var template = Handlebars.compile(tpl);
            var html = template(result);
            $(".wrap").html(html);
        },
        error:function(result){
            console.log("获取数据失败")
        }

    });

//加数量
    $("div").delegate(".ad","click",function (){
        count = $(this).prev().val();
        count++;
        $(this).prev().val(count);
    });

//减数量
// var count=0;
    $("div").on("click",".minus",function(){
        count = $(this).next().val();
        count--;
        if($(this).next().val() == 0){
            count=0;
        }
        $(this).next().val(count);
    });

//判断数量框输入为负数的时候置为0
    $("div").on("blur",".number",function () {
        if ($(this).val() < 0) {
            $(this).val(0);
        }else{
            $(this).val($(this).val());
        }
    });

//合计
    $("#btn").click(function(){

        var arr = [],arr2 = [];
        $(".numberTotal").text("");
        var  num = null,total=null;

        for(var i=0;i<$(".choose").length;i++){

            if($(".choose")[i].checked == true){

                //数量总和
                arr2.push(parseInt($(".number").eq(i).val()));
                num = arr2.reduce(arrElementAdd);

                //价格总和
                arr.push($(".salePrice").eq(i).text() * parseInt($(".number").eq(i).val()));
                total = arr.reduce(arrElementAdd);

                $(".numberTotal").html("<span>共：</span><span>"+num+"</span><span>件，</span><span>"+total+"</span><span> ￥</span>")
            }
        }

        //reduce方法
        function arrElementAdd(a,b) {
            return a+b;
        }

    })
},0)
