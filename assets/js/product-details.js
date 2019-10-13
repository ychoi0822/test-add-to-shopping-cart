let selectedSize;

function selectSize(size, className) {
    $(".selected-size").text(size);

    if (selectedSize) {
        selectedSize.removeClass("selected-size-btn");
    }
    selectedSize = $(className);
    selectedSize.addClass("selected-size-btn");
}

$("#small-btn").click(
    () => selectSize("S", "#small-btn")
);

$("#medium-btn").click(
    () => selectSize("M", "#medium-btn")
);

$("#large-btn").click(
    () => selectSize("L", "#large-btn")
);

