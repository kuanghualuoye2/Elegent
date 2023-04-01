//轮播图数据
var single = [
    {
        title:"Mar 210,2019 ",
        content:"Send-Receive coin Bitconcent & mobile"
    },
    {
        title:"Feb 25,2020 ",
        content:"Coin Marketcap, World Coin Index"
    },
    {
        title:"Dec 22,2020 ",
        content:"BTCC mode of payment in Bitcoin"
    },
    {
        title:"Feb 25,2020 ",
        content:"Coin Marketcap, World Coin Index"
    },
    
    {
        title:"Jan 05,2018 ",
        content:"BTCC mode of payment"
    },
    {
        title:"Mar 210,2018 ",
        content:"Exchange Bitcontent to Bitcoin"
    },
    {
        title:"Mar 210,2020 ",
        content:"Coin Marketcap, World Coin Index"
    },
    {
        title:"Mar 210,2018 ",
        content:"Exchange Bitcontent to Bitcoin"
    },
    {
        title:"Mar 210,2018 ",
        content:"BTCC mode of payment in Bitcoin"
    },
    {
        title:"Mar 210,2020 ",
        content:"BTCC mode of payment"
    },
    {
        title:"Mar 210,2018 ",
        content:"Development Started"
    },
    {
        title:"Mar 210,2018 ",
        content:"Exchange Bitcontent to Bitcoin"
    },
]
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $(".box .header").css({
            backgroundColor: "#fff",
            boxShadow: "0 0 10px lightgray"
        });
        $(".nav .navbar").css("background-color", "#fff");
        $(".logo img").prop("src", "./image/logo.svg");
        $(".nav-link").css("color", "#24126a");
        $(".header .button  a").css({
            backgroundColor: "blue",
            color: "#fff"
        })
    } else {
        $(".box .header").css({
            backgroundColor: "#24126a",
            boxShadow: ""
        });
        $(".box navbar-toggler .navbar-toggler-icon").css({
            backgroundColor: "#24126a",
        });
        $(".nav .navbar").css("background-color", "#24126a");
        $(".logo img").prop("src", "./image/white-logo.svg");
        $(".nav-link").css("color", "#fff");
        $(".header .button  a").css({
            backgroundColor: "#fff",
            color: "#24126a"
        })
    }
})
$("#button").click(function(e){
    console.log(e.target);
})

$(function() {
    // 获取所有图片元素
    var images = $('img');
  
    // 遍历所有图片元素
    images.each(function() {
      // 添加 lazy 类
      $(this).addClass('lazy');
      // 设置 data-src 属性
      $(this).attr('data-src', $(this).attr('src'));
      // 把 src 属性设置为空
      $(this).attr('src', '');
    });
  
    // 页面滚动事件处理程序
    function lazyload() {
      // 获取所有带有 lazy 类的图片元素
      var lazyloadImages = $('img.lazy');
      if (lazyloadImages.length > 0) {
        var scrollTop = $(window).scrollTop() + $(window).height();
        $.each(lazyloadImages, function() {
          var item = $(this);
          if (item.offset().top < scrollTop) {
            item.attr('src', item.data('src'));
            item.removeClass('lazy');
          }
        });
      }
    }
  
    // 首次加载页面时加载可见的图片
    lazyload();
  
    // 页面滚动事件处理程序
    $(window).scroll(function() {
      lazyload();
    });
  });