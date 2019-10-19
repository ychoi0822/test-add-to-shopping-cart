let itemCount = parseInt($(".minicart-item-count").text());
let smallItemCount = parseInt($(".small-minicart-count").text());
let mediumItemCount = parseInt($(".medium-minicart-count").text());
let largeItemCount = parseInt($(".large-minicart-count").text());

$(".minicart-btn").mouseenter(function() {
    //Calculate the right side position of minicart display when hovered over.
    if (itemCount > 0) {
        let headerPosition = $(".minicart-btn").position();

        $(".minicart").css("top", headerPosition.top);

        let right = ($(window).width() - (headerPosition.left + $(".minicart-btn").outerWidth(true)));
        $(".minicart").css("right", right);

        $(".minicart").show();
        $(".minicart-btn").css("color", "black");
    }
});

$(".minicart").mouseleave(function() {
    $(".minicart").hide();
    $(".minicart-btn").css("color", "#888888");
})

$(".add-button").click(function() {
    if (checkIfSizeSelected($("#small-btn"))) {
        if (smallItemCount === 0) {
            console.log("Item" + itemCount);
            $("#small-minicart-item").css("display", "flex");
        }
        smallItemCount++;
        itemCount++;
        $(".small-minicart-count").text(smallItemCount.toString());
    }
    else if (checkIfSizeSelected($("#medium-btn"))) {
        if (mediumItemCount === 0) {
            $("#medium-minicart-item").css("display", "flex");
        }
        mediumItemCount++;
        itemCount++;
        $(".medium-minicart-count").text(mediumItemCount.toString());
    }
    else if (checkIfSizeSelected($("#large-btn"))) {
        if (largeItemCount === 0) {
            $("#large-minicart-item").css("display", "flex");
        }
        largeItemCount++;
        itemCount++;
        $(".large-minicart-count").text(largeItemCount.toString());
    }
    else {
        window.alert("Please select size");
    }

    $(".minicart-item-count").text(itemCount.toString());
});

function checkIfSizeSelected(className) {
    return className.hasClass("selected-size-btn");
}

