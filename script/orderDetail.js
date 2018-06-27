$(function () {
    //tab切换
    $(".page-order-box>div").hide().first().show();
    $(".page-order-menu ul li").on("click",function(){
        var _index = $(this).index();
        $(".page-order-box>div").eq(_index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
        if(_index==0){
            $('.order-line').animate({'left':'16%'},300);
        }else{
            $('.order-line').animate({'left':'64%'},300);
        }
    });


    $(".page-bottom-cart").mouseenter(function(){
        $(".mask-cart").show()
    }).mouseleave(function(){
        $(".mask-cart").hide()
    });

})