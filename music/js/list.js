
var arr = [];
$.ajax({
    url:"http://192.168.6.227:3000/songs",
    type:"post",
    data:{verify:"1"},
    dataType:"json",
    success:function (result) {
        // console.log(result)
        var tpl = $("#template").html();
        var template = Handlebars.compile(tpl);
        var html = template(result);
        $("#musicList").html(html);

        for(var i = 0;i<result.song_list.length;i++){

            var musicId = result.song_list[i].song_id;

            $.ajax({
                url:"http://192.168.6.227:3000/playsongs",
                type: "post",
                data: {id:musicId},
                dataType: "json",
                success:function (result) {

                    arr.push(result.bitrate.file_link);
                    // console.log(result.bitrate.file_link);
                    var li = document.getElementsByClassName("nextList");
                    for(var j = 0;j<li.length;j++){

                        li[j].setAttribute("musicy",arr[j])
                    }
                },
                error:function (error) {
                    console.log(error)
                }
            })
        }
    },

    error:function (error) {
        console.log(error)
    }
});

//页面跳转
setTimeout(function () {

    $(".nextList").click(function () {
        // console.log(11111);
        var music = $(this).attr("musicy");
        var pic = $(this).find("img").attr("src");
        var songName = $(this).find("h3").text();

        sessionStorage.setItem("musicy",music);
        sessionStorage.setItem("src",pic);
        sessionStorage.setItem("auth",songName)
        location.href = "play.html";

    })
},1000)