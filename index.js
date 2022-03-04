$(".close").hide();
$('.media-drop').hide();
$('.speech_span').hide();
$(".open").click(function(){
    $(".nav-right").show();
    $(".close").show();
    $(".open").hide();
})
$("#show_more").click(function(){
  $(".speech_span").show();
  $("#show_more").hide();
})
$("#show_less").click(function(){
  $(".speech_span").hide();
  $("#show_more").show();
})
$(".close").click(function(){
    $(".nav-right").hide();
    $(".open").show();
    $(".close").hide();
});
$(".media_main2").hover(function(){
  $("#media-drop2").toggle();
});
$(".media_main").hover(function(){
  $("#media-drop").toggle();
});

var scrollToTopBtn = document.getElementById("topButton");
var rootElement = document.documentElement;
function scrollToTop() {
    // scroll to top logic
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop);
  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }