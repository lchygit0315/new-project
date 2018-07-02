$(function () {
    //tab切换
    $(".page-order-box>div").hide().first().show();
    $(".page-order-menu ul li").on("click",function(){
        var _index = $(this).index();
        $(".page-order-box>div").eq(_index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
        // if(_index==0){
        //     $('.order-line').animate({'left':'16%'},300);
        // }else{
        //     $('.order-line').animate({'left':'64%'},300);
        // }
    });
    $(".page-criticism-title ul li").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".page-bottom-cart").mouseenter(function(){
        $(".mask-cart").show()
    }).mouseleave(function(){
        $(".mask-cart").hide()
    });
    $(".page-shop-telphone").on("click",function () {
        $(".mask-shop").show()
        $(".mask-shop .cart-box").fadeIn(200)
    })
    $(".mask-shop-del").on("click",function () {
        $(".mask-shop").hide()
        $(".mask-shop .cart-box").fadeOut(200)
    })
})

//活动滚动
function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
            marginTop: "-1rem"
        }, 1000,
        function() {
            $(this).css({
                marginTop: "0"
            }).find("li:first").appendTo(this);
        }
    );
}
$(document).ready(function() {
    setInterval('AutoScroll(".page-top-active-main")', 2500)
});