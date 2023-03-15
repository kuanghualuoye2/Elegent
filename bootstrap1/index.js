$(".panel-heading").click(function () {
    $(this).next(".panel-body").stop().slideToggle(400);
});
$(window).scroll(function(){
    if($(window).scrollTop() >= 200){
        $("#title").css({
            background:"rgb(234 234 234)"
        }).find("a").css("color", "black");
        $("#title .img img")[0].src = "	http://demo.mobanwang.com/mb/lo202301/202301035/html/assets/images/logo/logo.svg";
    }else{
        $("#title").css({
            background:"#ff7676"
        }).find("a").css("color", "#fff");
        $("#title .img img")[0].src = "	http://demo.mobanwang.com/mb/lo202301/202301035/html/assets/images/logo/white-logo.svg";
    }
})