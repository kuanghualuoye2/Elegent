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