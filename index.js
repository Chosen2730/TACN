$(".close").hide();
$('.media-drop').hide();
$(".open").click(function(){
    $(".nav-right").show();
    $(".close").show();
    $(".open").hide();
})
$(".close").click(function(){
    $(".nav-right").hide();
    $(".open").show();
    $(".close").hide();
});
$(".media_main").hover(function(){
  $(".media-drop").toggle();
});
$(".media_main").click(function(){
  $(".media-drop").toggle();
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