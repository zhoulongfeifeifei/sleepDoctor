$(function(){
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;//手机号正则表达式
	$(".getCode").click(function(){
		var phone=$('.Iphone').val();
		if(!myreg.test(phone)){
			$('.mask').html('手机格式不正确');
			mask(); 
		}else if(phone.length!=11){
			$('.mask').html('手机格式不正确');
			mask(); 
		}else{
			console.log(111)
			 var number=60;
			 var time =setInterval(function(){
			 	number--;
			 	$('.getCode').html(number+"秒");
			 	$('.getCode').attr("disabled",true);
			 	if(number==0){
			 		$(".getCode").html('重新获取');
			 		clearInterval(time);
			 		$('.getCode').attr("disabled",false);
			 	}
			 },1000)
		}
	});
//	if($('.Iphone').val()=='' || $('.postCode').val()==''){
//		$('.submit').attr('disabled',true);
//	}else{
//		$('.submit').attr('disabled',false);
//	}
	$('.submit').click(function(){
		if($('.Iphone').val()=="" && $('.postCode').val()==''){
			$('.mask').html('请输入手机号并获取验证码');
			mask(); 
		}else if($('.Iphone').val()==""){
			$('.mask').html('请输入手机号');
			mask(); 
		}else if($('.postCode').val()==''){
			$('.mask').html('请输入验证码');
			mask(); 
		}else{
			window.location.href="../html/patientIndex.html";
		}
		console.log($('.Iphone').val(),$('.postCode').val(),111);	 
	})
	function mask(){
    	$(".mask").fadeTo("slow",0.5);
	    $(".mask").fadeTo("slow",1);
	    $(".mask").fadeTo("slow",0.5);
	    $(".mask").fadeTo("slow",0);
    }
});