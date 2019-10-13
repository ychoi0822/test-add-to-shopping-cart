$(".minicart-btn").mouseenter(function() {
    //Calculate the right side position of minicart display when hovered over.
    let headerPosition = $(".minicart-btn").position();

    $(".minicart").css("top", headerPosition.top);

    let right = ($(window).width() - (headerPosition.left + $(".minicart-btn").outerWidth(true)));
    $(".minicart").css("right", right);

    $(".minicart").show();
    $(".minicart-btn").css("color", "black");
});

$(".minicart").mouseleave(function() {
    $(".minicart").hide();
    $(".minicart-btn").css("color", "#888888");
})
