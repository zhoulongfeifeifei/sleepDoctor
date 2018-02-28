$(function() {
    var zxtype = getUrlParam('type'); //咨询类型
    var continu = getUrlParam('id');
    if (continu == 2 && zxtype == 1) {
        $('header').html('');
        $('.xsMoney').hide();
        $('.onlook').hide();
        $('.zixun').click(function() {
            window.location.href = "../html/freeConsult.html?zx=1"
        });
    } else if (zxtype == 0) {
        $('.zixun').click(function() {
            window.location.href = "../html/patientIndex.html?consultType=" + 0;
        });
    } else {
        $('.zixun').click(function() {
            window.location.href = "../html/patientIndex.html?consultType=" + 1;
        });
    }
    if (zxtype == 0) {
        $('.xsMoney').hide();
    } else {
        $('.xsMoney').show();
    }
    $('.onlookImg').click(function() {
        var imgAttr = $(this).attr('src');
        if (imgAttr == '../imgs/SwitchOnLight@1x.png') {
            $(this).attr("src", "../imgs/SwitchOffLight@1x.png")
            $('.onlookText').html("不允许围观")
        } else {
            $(this).attr("src", "../imgs/SwitchOnLight@1x.png")
            $('.onlookText').html("允许围观")
        }
    })

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return (r[2]);
        return null; //返回参数值
    }
})