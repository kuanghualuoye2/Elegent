
//音频地址
var map = [
    "./audio/Padi,洛天依,言和 - 乾中和.mp3",
    "./audio/赵雷 - 我记得.mp3",
    "./audio/塞壬唱片-MSR,PMP - 冲破穹顶.mp3",
    "./audio/兰音Reine - 枕边童话.mp3",
    "./audio/三无MarBlue - 敢归云间宿.mp3"
]
var n = 0;
//hr的left值
var hrLeft = -240;
//随机开关
var flan = false;
var flag = true;
//定时器
var id = 0
$(".box .list").on("click", function () {
    $(".box").addClass("flip").removeClass("backHome");
    console.log(this);
})
$(".box .back header i").on("click", function () {
    $(".box").addClass("backHome").removeClass("flip");
    console.log(this);
})
//初始化标题
function title(arr, index) {
    var names = arr[index].indexOf("-");
    var songname = arr[index].indexOf(".m");
    $(".info h1").text(arr[index].slice(names + 1, songname));
    $(".info h2").text(arr[index].slice(8, names));
}
title(map, 0)
// 显示当前时间与总时间
function progress(flag) {
    // 进度条
    // $("audio")[0].ontimeupdate = function () {
    // console.log(Math.floor($("audio")[0].currentTime));
    // 歌曲时长
    var time = Math.floor($("audio")[0].currentTime);
    var mm = Math.floor(time / 60 % 60);
    var ss = Math.floor(time % 60)
    // 歌曲当前时间
    // if ($("audio")[0].src) {
    //     $("audio")[0].load();
    // }
    var atTime = Math.floor($("audio")[0].duration);
    console.log($("#test")[0].duration);
    var atmm = Math.floor(atTime / 60 % 60);
    var atss = Math.floor(atTime % 60)
    // if (flag) {
        $(".progress hr").css({
            left: hrLeft + (time * 240) / Math.floor($("audio")[0].duration)
        })
    // }
    // 给小于10的添加0
    var padNum = function (n) {
        return n >= 10 ? String(n) : "0" + n;
    };
    // 显示当前时间
    $(".meta .time span").eq(0).text(padNum(mm) + ":" + padNum(ss));
    // 显示歌曲时长
    $(".meta .time span").eq(1).text(padNum(atmm) + ":" + padNum(atss));
}
//暂停与播放
function isplay() {
    $(".box .home .controls .play i").toggle(
        function () {
            $(".box .home .controls .play i").eq(0).css("display", "none");
            // $("audio")[0].play();
        },
        function () {
            $(".box .home .controls .play i").eq(2).css("display", "block");
            // $("audio")[0].pause();
        }
    );
    //暂停与播放
    if ($("audio")[0].paused) {
        $("audio")[0].play();

        $("audio")[0].ontimeupdate = function () {
            progress();
        }
    } else {
        $("audio")[0].pause();
    }
}

// 上一首
$(".controls .prve i").click(function () {
    n--;
    // var index = n;
    // var str = "./image/" + index + ".jpg";
    // $(".box .home .cover img").prop("src", str);

    $(".musiccontrol")[0].pause();
    $(".box .home .controls .play i").eq(1).css("display", "none");
    $(".box .home .controls .play i").eq(0).css("display", "block");
    if (n >= 0) {
        $(".musicsource").prop("src", map[n]);
        var str = "./image/" + n + ".jpg";
        $(".box .home .cover img").prop("src", str);
        // isplay()
    } else {
        n = map.length - 1;
        var str = "./image/" + n + ".jpg";
        $(".box .home .cover img").prop("src", str);
    }
    $(".musiccontrol")[0].load();
    $("audio")[0].ontimeupdate = function () {
        progress();
    }
    $("audio")[0].ondurationchange = function () {
        progress();
    }
    //更改标题
    title(map, n);
    // console.log(n);
    // console.log($(".musicsource").prop("src"));

});

// 下一首
$(".controls .next i").click(function () {
    n++;
    // var index = n;
    // var str = "./image/" + index + ".jpg";
    // $(".box .home .cover img").prop("src", str);

    $(".musiccontrol")[0].pause();
    $(".box .home .controls .play i").eq(1).css("display", "none");
    $(".box .home .controls .play i").eq(0).css("display", "block");

    if (n < map.length) {
        $(".musicsource").prop("src", map[n]);
        var str = "./image/" + n + ".jpg";
        $(".box .home .cover img").prop("src", str);
        // isplay()
    } else {
        n = 0;
        var str = "./image/" + n + ".jpg";
        $(".box .home .cover img").prop("src", str);
    }
    $(".musiccontrol")[0].load();
    $("audio")[0].ontimeupdate = function () {
        progress();
    }
    $("audio")[0].ondurationchange = function () {
        progress();
    }
    //更改标题
    title(map, n);;
});


//暂停与播放
$(".box .home .controls .play i").click(function () {
    isplay()
});


//拖拽进度条
$("audio")[0].onloadedmetadata = function () {
    $(".progress").mousedown(function () {
        $(".progress").mousemove(function (e) {
            // flag = false;
            console.log(e.offsetX);
            $(".progress hr").css({
                left: -240 + e.offsetX
            });
            // clearTimeout(id);
            // id = setTimeout(function () {
            //     flag = true;
                $("audio")[0].currentTime = parseInt($("audio")[0].duration * e.offsetX) / 240;
            //     progress(flag)
            // }, 1000);
        })
    })
    //清除事件
    $(".progress").mouseup(function (e) {
        $(".progress").off("mousemove");
        // $("audio")[0].currentTime = parseInt($("audio")[0].duration * e.offsetX) / 240;
    })
}
//渲染歌单
$(".Playlist").html(function () {
    return map.map(function (e) {
        var index = map.indexOf(e);
        var name = e.indexOf("-");
        var songname = e.indexOf(".m");
        var str = "";
        str += '<div class="brief">';
        str += '<div class="left">';
        str += '<img src="./image/' + index + '.jpg" alt="">';
        str += '</div>';
        str += '<div class="right">';
        str += '<h1>' + e.slice(name + 1, songname) + '</h1>';
        str += '<h4>' + e.slice(8, name) + '</h4>';
        str += '</div>';
        str += '</div>';
        return str;
    })
})

//选择歌曲
$(".brief").on("click", function (e) {
    // var index = $(this).index()
    n = $(this).index()
    var str = "./image/" + n + ".jpg";
    $(".musiccontrol")[0].pause();
    $(".box .home .controls .play i").eq(0).css("display", "none");
    $(".box .home .controls .play i").eq(1).css("display", "block");
    $(".box .home .cover img").prop("src", str);
    $(".musicsource").prop("src", map[n]);
    $(".musiccontrol")[0].load();
    $(".musiccontrol")[0].play();
    $("audio")[0].ontimeupdate = function () {
        progress();
    }
    $("audio")[0].ondurationchange = function () {
        progress();
    }
    //更改标题
    title(map, n);
    //翻转
    $(".box").addClass("backHome");
})
console.log(Math.floor(Math.random() * map.length))
//随机歌曲
$(".random").on("click", function (e) {
    // var index = Math.floor(Math.random() * map.length);
    n = Math.floor(Math.random() * map.length);
    var str = "./image/" + n + ".jpg";
    $(".musiccontrol")[0].pause();
    $(".box .home .controls .play i").eq(0).css("display", "none");
    $(".box .home .controls .play i").eq(1).css("display", "block");
    $(".box .home .cover img").prop("src", str);
    $(".musicsource").prop("src", map[n]);
    $(".musiccontrol")[0].load();
    $(".musiccontrol")[0].play();
    $("audio")[0].ontimeupdate = function () {
        progress();
    }
    $("audio")[0].ondurationchange = function () {
        progress();
    }
    //更改标题
    title(map, n);
})