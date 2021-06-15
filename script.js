$(".section1").click(function() {
    $(".section2").show();
});
$(".section2").hide();
$(".section2").dblclick(function() {
    $(".section3").show();
});
$(".section3").hide();
$(".complete").hide();
$(".section3").click(function() {
$(".complete").show();
$(".complete").css("color","blue");
});