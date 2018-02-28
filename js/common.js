$(function() {
    // $('body').height($('body')[0].clientHeight);

    function footerPosition() {
        $("footer").removeClass("fixed-bottom");
        $('section').addClass('heIght');
        var contentHeight = document.body.scrollHeight, //网页正文全文高度
            winHeight = window.innerHeight - 60; //可视窗口高度，不包括浏览器顶部工具栏
        if (!(contentHeight < winHeight)) {
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
            $('section').removeClass('heIght')
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
    $('.footerFirst').click(function() {
        $(this).find("img").attr("src", "../imgs/tab_quiz_selcet@1x.png")
        $('.footerSecond').find("img").attr("src", "../imgs/tab_zhuanjia_normal@1x.png")
        $('.footerThirt').find("img").attr("src", "../imgs/tab_mine_normal@1x.png")
    })
    $('.footerSecond').click(function() {
        $(".footerFirst").find("img").attr("src", "../imgs/tab_quiz_normal@1x.png")
        $(this).find("img").attr("src", "../imgs/tab_zhuanjia_selcet@1x.png")
        $('.footerThirt').find("img").attr("src", "../imgs/tab_mine_normal@1x.png")
    })
    $('.footerThirt').click(function() {
        $(".footerFirst").find("img").attr("src", "../imgs/tab_quiz_normal@1x.png")
        $(".footerSecond").find("img").find("img").attr("src", "../imgs/tab_zhuanjia_normal@1x.png")
        $(this).find("img").attr("src", "../imgs/tab_mine_selcet@1x.png")
    });


});