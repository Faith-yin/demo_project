
$(function () {

    // 顶部导航栏小米商城APP二维码
    $("#downloadapp").mouseenter(function () {
        $("#QR-code").show();

    }).mouseleave(function () {
        $("#QR-code").hide();
    });

    $("#QR-code").mouseenter(function () {
        $(this).show();

    }).mouseleave(function () {
        $(this).hide();
    });


    // 顶部导航栏右侧购物车
    $("#top-bar-cart").mouseenter(function () {
        $("#hover-cart").slideDown(200);

    }).mouseleave(function () {
        $("#hover-cart").slideUp(200);
    });


    // 导航栏菜单
    $(".list-title a").mouseenter(function () {
        $("#hover-list").slideDown(200);

    }).mouseleave(function () {
        $("#hover-list").slideUp(200);
    });

    // $("#hover-list a").mouseenter(function () {
    //     $(this).show();
    // }).mouseleave(function () {
    //     $(this).slideUp();
    // });


    // 右侧固定导航栏二维码
    $("#phone").mouseenter(function () {
        $("#right-bar-QRcode").show();

    }).mouseleave(function () {
        $("#right-bar-QRcode").hide();
    });

    $("#right-bar-QRcode").mouseenter(function () {
        $(this).show();

    }).mouseleave(function () {
        $(this).hide();
    });


    // 导航栏右侧搜索框
    $("#search-in").focus(function () {
        $("#hot-words").hide();
        $(this).css({ "border-color": "#ff6700", "outline": "none" });
        $("#magnifier").css("border-color", "#ff6700");

    }).blur(function () {
        $("#hot-words").show();
        $(this).css("border-color", "#e0e0e0");
        $("#magnifier").css("border-color", "#e0e0e0");
    });

    $("#search-in").mouseenter(function () {
        $("#search-in").css("border-color", "#b0b0b0");
        $("#magnifier").css("border-color", "#b0b0b0");

    }).mouseleave(function () {
        $("#search-in").css("border-color", "#e0e0e0");
        $("#magnifier").css("border-color", "#e0e0e0");
    });


    // 左侧菜单hover内容
    $(".category-list").mouseenter(function () {
        $("#category-childer").show();

    }).mouseleave(function () {
        $("#category-childer").hide();
    });

    $("#category-childer").mouseenter(function () {
        $(this).show();

    }).mouseleave(function () {
        $(this).hide();
    });


    // 轮播图
    // 右下角圆点事件
    var index = 0;
    $(".dot").click(function () {
        index = $(this).index();  //获取点击li的下标
        $(this).addClass("active").siblings().removeClass("active");
        $(".img-item").eq(index).fadeIn().siblings().fadeOut();
    });
    // 右侧切换按钮事件
    $(".right-arrows").click(function () {
        index ++;
        if (index > 4){
            index = 0;
        }
        $(".img-item").eq(index).fadeIn().siblings().fadeOut();
        $(".dot").eq(index).addClass("active").siblings().removeClass("active");
    });
    // 左侧切换按钮事件
    $(".left-arrows").click(function () {
        index --;

        if (index < 0){
            index = 4;
        }

        $(".img-item").eq(index).fadeIn().siblings().fadeOut();
        $(".dot").eq(index).addClass("active").siblings().removeClass("active");
    });


    //自动轮播事件
    var auto = setInterval(function() {
        autoChange();
    },6000);

    function autoChange() {
        var autoIndex = 0;
        autoIndex = $(".active").index();

        autoIndex ++;
        if(autoIndex > 4) {
            autoIndex = 0;
        }
        // console.log(autoIndex)
        $(".img-item").eq(autoIndex).fadeIn().siblings().fadeOut();
        $(".dot").eq(autoIndex).addClass("active").siblings().removeClass("active");    
    }

    // 鼠标移入或移出，停止或继续执行自动轮播事件
    $(".sideshow").mouseover(function () {
        clearInterval(auto);

    }).mouseout(function () {
        auto = setInterval(function () {
            autoChange();
        }, 6000)

    });



    // 视频部分播放按钮
    // 第一个按钮
    $("#cover1").mouseenter(function () {
        $("#icon-pause1").css("color", "#ff6700");

    }).mouseleave(function () {
        $("#icon-pause1").css("color", "#fff");
    });

    $("#icon-pause1").mouseenter(function () {
        $(this).css("color", "#ff6700");

    }).mouseleave(function () {
        $(this).css("color", "#fff");
    });

    // 第二个按钮
    $("#cover2").mouseenter(function () {
        $("#icon-pause2").css("color", "#ff6700");

    }).mouseleave(function () {
        $("#icon-pause2").css("color", "#fff");
    });

    $("#icon-pause2").mouseenter(function () {
        $(this).css("color", "#ff6700");

    }).mouseleave(function () {
        $(this).css("color", "#fff");
    });

    // 第三个按钮
    $("#cover3").mouseenter(function () {
        $("#icon-pause3").css("color", "#ff6700");

    }).mouseleave(function () {
        $("#icon-pause3").css("color", "#fff");
    });

    $("#icon-pause3").mouseenter(function () {
        $(this).css("color", "#ff6700");

    }).mouseleave(function () {
        $(this).css("color", "#fff");
    });

    // 第四个按钮
    $("#cover4").mouseenter(function () {
        $("#icon-pause4").css("color", "#ff6700");

    }).mouseleave(function () {
        $("#icon-pause4").css("color", "#fff");
    });

    $("#icon-pause4").mouseenter(function () {
        $(this).css("color", "#ff6700");

    }).mouseleave(function () {
        $(this).css("color", "#fff");
    });



    // 返回顶部事件
    // 链接常隐藏
    $("#btn-top").hide();

    // 当滚动条位置处于距顶部800px以下时，返回顶部链接出现
    $(window).scroll(function () { 
        if($(window).scrollTop() > 800) {
            $("#btn-top").fadeIn(200);
            
        }else {
            $("#btn-top").fadeOut(200);
        }
    });

    // 点击链接后，返回页面顶部位置
    $("#btn-top").click(function() {
        $("body, html").animate({ scrollTop: 0 }, 500);
    });







});






























