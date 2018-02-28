 $(function() {
     var consultType;
     var itemIndex = 0;
     consultType = getUrlParam('consultType');
     console.log(consultType)
     if (!consultType || consultType == 0) {
         $('.consult li').eq(0).addClass('active').siblings().removeClass('active');
         $('.fastConsult').eq(0).show().siblings().hide();
         itemIndex = 0;
     } else {
         itemIndex = 1;
         $('.consult li').eq(1).addClass('active').siblings().removeClass('active');
         $('.fastConsult').eq(1).show().siblings().hide();
     }
     var tabLoadEndArray = [false, false];
     var tabLenghtArray = [12, 23];
     var tabScroolTopArray = [0, 0];

     // dropload
     var dropload = $('.khfxWarp').dropload({
         scrollArea: window,
         domDown: {
             domClass: 'dropload-down',
             domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
             domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
             domNoData: '<div class="dropload-noData">已无数据</div>'
         },
         loadDownFn: function(me) {
             console.log('加载')
             setTimeout(function() {
                 if (tabLoadEndArray[itemIndex]) {
                     me.resetload();
                     me.lock();
                     me.noData();
                     me.resetload();
                     return;
                 }
                 var result = '';
                 for (var index = 0; index < 6; index++) {
                     if (tabLenghtArray[itemIndex] > 0) {
                         tabLenghtArray[itemIndex]--;
                     } else {
                         tabLoadEndArray[itemIndex] = true;
                         break;
                     }
                     if (itemIndex == 0) {
                         result += '<li><a href="freeConsult.html?type=0"><p>医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议' + tabLenghtArray[itemIndex] + '</p><div class="qusition"><span>已回答</span><div class="timer"><span>2017-05-17</span><img src="../imgs/free_comment@1x.png" alt="" /><span class="number">0</span></div></div></a></li>';
                     } else if (itemIndex == 1) {
                         result += '<li><a href="freeConsult.html?type=1"><p><span class="xuanMoney">悬赏10元</span>医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议' + tabLenghtArray[itemIndex] + '</p><div class="qusition"><span>已回答</span><div class="timer"><span>2017-05-17</span><img src="../imgs/free_comment@1x.png" alt="" /><span class="number">0</span></div></div></a></li>';
                     }
                 }
                 $('.khfxPane ul').eq(itemIndex).append(result);
                 me.resetload();
             }, 1000);
         }
     });


     $('.consult li').on('click', function() {
         $(this).addClass('active').siblings().removeClass('active');
         tabScroolTopArray[itemIndex] = $(window).scrollTop();
         var $this = $(this);
         itemIndex = $this.index();
         $(window).scrollTop(tabScroolTopArray[itemIndex]);

         $(this).addClass('active').siblings('.tabHead span').removeClass('active');
         $('.khfxPane').eq(itemIndex).show().siblings('.khfxPane').hide();
         $('.khfxPane ul').eq(itemIndex).show().siblings('.khfxPane ul').hide();
         if (!tabLoadEndArray[itemIndex]) {
             dropload.unlock();
             dropload.noData(false);
         } else {
             dropload.lock('down');
             dropload.noData();
         }
         dropload.resetload();
     });

     function getUrlParam(name) {
         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
         var r = window.location.search.substr(1).match(reg); //匹配目标参数
         if (r != null) return (r[2]);
         return null; //返回参数值
     }
 });