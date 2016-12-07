//侧边导航函数
function aside(obj,refer) {
  var offset = $(obj).offset().top;
  var top = $(obj).css("top").replace("px","");//获取整型即不带px单位的obj的高度
    console.log(parseInt(top));
  $(window).scroll(function () {
    if ($(window).scrollTop()>=offset-top) 
      if ($(window).scrollTop() >= $(refer).height() - $(obj).height())
        $(obj).css('top', $(refer).height() - $(obj).height());
      else
        	$(obj).css('top', $(window).scrollTop() - offset +210);
    else
      $(obj).css('top', top+"px");
  })
};

//导航跳转动画函数
function navanimate(obj) {
  var offset = $(obj).offset().top;
  $("html,body").animate({scrollTop:offset},400);
}

$(function () {
  aside('#navbar','#page-content');
  $(".navbar-nav a").each(function(index,element){
      $(this).click(function(){
        // console.log(index);
        var top = $(this).attr("data-top");
        navanimate("#"+top);
      });
  });
})
