$("#toggle").click(function () {
  $(".menu").toggleClass("opened");
  $(this).toggleClass("open");
  $("body").toggleClass("fixed");
});

$(".about-dropdown").click(function () {
  $(this).toggleClass("open");
  $(this).children(".dropdown-content").toggleClass("open");
  $(".language-dropdown").removeClass("open");
  $(".language-dropdown").children(".dropdown-content").removeClass("open");
});

$(".language-dropdown").click(function () {
  $(this).toggleClass("open");
  $(this).children(".dropdown-content").toggleClass("open");
  $(".about-dropdown").removeClass("open");
  $(".about-dropdown").children(".dropdown-content").removeClass("open");
});
// 彈跳視窗資訊書籍選擇開始
$('.modal-btn ul li.introduction').click(function(){
  $('.modal-btn ul li').removeClass('active');
  $('.modal-btn ul li.introduction').addClass('active');
  var selector = $('.modal-btn ul li.introduction').attr('data-filter');
    $('.introduction-item').isotope({
      filter: selector
    })
});
$('.item.vocabulary').hide();
$('.modal-btn ul li.vocabulary').click(function(){
  $('.modal-btn ul li').removeClass('active');
  $('.modal-btn ul li.vocabulary').addClass('active');
  $('.item.vocabulary').addClass('active');
  $('.item.vocabulary').show();
  var selector = $('.modal-btn ul li.vocabulary').attr('data-filter');
    $('.introduction-item').isotope({
      filter: selector
    })
});
// 彈跳視窗資訊書籍選擇結束