$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).siblings(".card-header").find(".btn i").html("remove");
        $(this).prev(".card-header").addClass("highlight");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).parent().find(".card-header .btn i").html("remove");
    }).on('hide.bs.collapse', function () {
        $(this).parent().find(".card-header .btn i").html("add");
    });
});
var myCustomScrollbar = document.querySelector('.my-custom-scrollbar');
var ps = new PerfectScrollbar(myCustomScrollbar);

var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

myCustomScrollbar.onscroll = function () {
    scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
}