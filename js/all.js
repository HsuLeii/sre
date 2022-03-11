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
$('.modal_btn ul li.introduction').click(function () {
  $('.modal_btn ul li').removeClass('active');
  $('.modal_btn ul li.introduction').addClass('active');
  var selector = $('.modal_btn ul li.introduction').attr('data_filter');
  $('.introduction_item').isotope({
    filter: selector
  })
});
$('.item.vocabulary').hide();
$('.modal_btn ul li.vocabulary').click(function () {
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
$("div.faq_answer").hide();
$(".faq_question").click(function () {
  $("div.faq_answer").slideUp();
  if ($("+div", this).css("display") == "none") {
    $("+div", this).slideDown();
    $(".faq_question").children("span").removeClass("up");
    $(this).children("span").toggleClass("up");
  }
})
// 常見問題結束
// 分級對應開始
$(".grade_content").hide();
$(".first_grade_content").show();
$(".first_grade_background").children("p").addClass("active");
$(".first_grade_background").click(function () {
  $(".grade_content").hide();
  $(".first_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".first_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".second_grade_background").click(function () {
  $(".grade_content").hide();
  $(".second_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".second_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".third_grade_background").click(function () {
  $(".grade_content").hide();
  $(".third_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".third_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".fourth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".fourth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".fourth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".fifth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".fifth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".fifth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".sixth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".sixth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".sixth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".seventh_grade_background").click(function () {
  $(".grade_content").hide();
  $(".seventh_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".seventh_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".eighth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".eighth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".eighth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
$(".ninth_grade_background").click(function () {
  $(".grade_content").hide();
  $(".ninth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
})
.hover(function() {
  $(".grade_content").hide();
  $(".ninth_grade_content").show();
  $(".bar").children("p").removeClass("active");
  $(this).children("p").addClass("active");
});
// 分級對應結束
// 閱讀地圖開始
var ticketheight = $(".ticket_wrap").height();
$(".wave_line").css({"width": ticketheight }); 
// 閱讀地圖結束

var x = document.body.scrollHeight;

  const canvas = document.querySelector('#Canvas');

  // resize canvas
  canvas.width = 120;
  canvas.height = x;
  alert( canvas.height);