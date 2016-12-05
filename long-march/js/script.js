window.onresize = function () {
  var winHeight = $(window).height();
  var winWidth = $(window).width();
}
function aside(obj,refer) {
  var offset = $(obj).offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(refer).height() - $(obj).height())
      $(obj).css('top', $(refer).height() - $(obj).height());
    else{
    	// if($(window).scrollTop() >= offset)
      	$(obj).css('top', $(window).scrollTop() - offset +70);
    }
  })
};
$(function () {
  aside('#page-header','#page-content');
})
