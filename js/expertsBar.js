 $(function () {

    var itemIndex = 0;

    var tabLoadEndArray = [false];
    var tabLenghtArray = [23];
    var tabScroolTopArray = [0];
    
    // dropload
    var dropload = $('section').dropload({
        scrollArea: window,
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">已无数据</div>'
        },
        loadDownFn: function (me) {
        	console.log('加载')
            setTimeout(function () {
                if (tabLoadEndArray[itemIndex]) {
                    me.resetload();
                    me.lock();
                    me.noData();
                    me.resetload();
                    return;
                }
                var result = '';
                for (var index = 0; index < 10; index++) {
                    if (tabLenghtArray[itemIndex] > 0) {
                        tabLenghtArray[itemIndex]--;
                    } else {
                        tabLoadEndArray[itemIndex] = true;
                        break;
                    }
                    if (itemIndex == 0) {
                        result+='<li><a href="doctorDetails.html"><img class="doctorPhoto" src="../imgs/user_pic_yuanjiao@1x.png" alt="" /><div class="doctorInfo"><p class="doctorDetial doctorSty"><span class="doctorName">张三</span><span>产科</span><span>主治医师</span></p><p class="hospital">杭州市中医院</p><p class="hospital doctorDetial"><span><span class="doctorName">1526</span><span>回答</span></span><span><span>服务积分：</span><span class="jifen">94</span></span></p></div></a></li>';              
                    } 
                }
                $('section ul').eq(itemIndex).append(result);
                me.resetload();
            }, 1000);
        }
    });
});