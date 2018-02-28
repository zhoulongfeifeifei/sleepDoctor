$(function() {
    var zxType = getUrlParam("zx");
    console.log(zxType)
    if (zxType == 0) {
        $('footer input').show();
        $('footer button').show();
        $('.continueAsk').hide();
    } else {
        $('footer input').hide();
        $('footer button').hide();
        $('.continueAsk').show();
        $("title").html("悬赏咨询");
    }

    function footerPosition() {
        $("footer").removeClass("fixed-bottom1");
        $('section').addClass('heIght')
        var contentHeight = document.body.scrollHeight, //网页正文全文高度
            winHeight = window.innerHeight - 60; //可视窗口高度，不包括浏览器顶部工具栏
        if (!(contentHeight < winHeight)) {
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom1");
            $('section').removeClass('heIght')
        }
    }
    $('.doctorAppraise,.repdoctorAppraise').click(function() {
        var id = $(this).attr('id');
        window.location.href = "appraiseDoctor.html?id=" + id;
    });
    $('.continueAsk').click(function() {
        var id = $(this).attr('id');
        var type = $(this).attr('type');
        window.location.href = "releaseConsult.html?id=" + id + '&type=' + type;
    });

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return (r[2]);
        return null; //返回参数值
    }
})