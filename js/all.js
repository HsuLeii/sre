var question = document.getElementsByClassName("faq-question");

$("#toggle").click(function () {
  $(".menu").toggleClass("opened");
  $(this).toggleClass("open");
  $("body").toggleClass("fixed");
});

$(".about_dropdown").click(function () {
  $(this).toggleClass("open");
  $(this).children(".dropdown_content").toggleClass("open");
  $(".language_dropdown").removeClass("open");
  $(".language_dropdown").children(".dropdown_content").removeClass("open");
});

$(".language_dropdown").click(function () {
  $(this).toggleClass("open");
  $(this).children(".dropdown_content").toggleClass("open");
  $(".about_dropdown").removeClass("open");
  $(".about_dropdown").children(".dropdown_content").removeClass("open");
});
// 彈跳視窗資訊書籍選擇開始
$('.modal_btn ul li.introduction').click(function(){
  $('.modal_btn ul li').removeClass('active');
  $('.modal_btn ul li.introduction').addClass('active');
  var selector = $('.modal_btn ul li.introduction').attr('data_filter');
    $('.introduction_item').isotope({
      filter: selector
    })
});
$('.item.vocabulary').hide();
$('.modal_btn ul li.vocabulary').click(function(){
  $('.modal_btn ul li').removeClass('active');
  $('.modal_btn ul li.vocabulary').addClass('active');
  $('.item.vocabulary').addClass('active');
  $('.item.vocabulary').show();
  var selector = $('.modal_btn ul li.vocabulary').attr('data_filter');
    $('.introduction_item').isotope({
      filter: selector
    })
});
// 彈跳視窗資訊書籍選擇結束
// 常見問題開始

    $("div.faq_answer").hide(); //子選單(div.faq-answer)隱藏
  $(".faq_question").click(function () {
    $("div.faq_answer").slideUp();
    if ($("+div", this).css("display") == "none") {
      $("+div", this).slideDown();
      $(".faq_question").children("span").removeClass("up");
      $(this).children("span").toggleClass("up");
    } 
  })
// 常見問題結束