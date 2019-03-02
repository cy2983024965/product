
window.onload = function(){

//获取前一个页面传过来的音乐名称
    $("#audio")[0].src  = "http://192.168.6.227/song/" + sessionStorage.getItem("musicy");
    $("img")[0].src = sessionStorage.getItem("src");
    $("h2").text(sessionStorage.getItem("auth"));
    // console.log(sessionStorage.getItem("musicy"))
    // console.log(sessionStorage.getItem("src"))
    //console.log(sessionStorage.getItem("auth"))

//滚动条拖动
$(function () {
    $("#progress").change(function () {

        $("#audio")[0].currentTime=($("#progress").val()/100)*$("#audio")[0].duration;

    })
})

//滚动条滑动
setInterval(function () {

    $("#progress").val(Math.floor((100/$("#audio")[0].duration)*$("#audio")[0].currentTime));
    $(".ui-slider-handle").css("left",$("#progress").val()+"%");
    // $("#progress").slider("refresh")

},1000)

//播放
$("#play").click(function () {
    // $("#audio")[0].play();

    $("#audio").trigger("play");

})

//暂停
$("#stop").click(function () {
    // $("#audio")[0].pause();
    $("#audio").trigger("pause");
})


//静音
$("#mute").click(function () {
    $("#audio")[0].muted = !$("#audio")[0].muted;
})

//音量+
$("#addVolume").click(function () {
    $("#audio")[0].volume += 0.1;
    if ($("#audio")[0].volume > 1){
        $("#audio")[0].volume = 1;
    }
})

//音量-
$("#subVolume").click(function () {
    $("#audio")[0].volume -= 0.1;
    if($("#audio")[0].volume < 0){
        $("#audio")[0].volume = 0;
    }
})

}