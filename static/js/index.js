$(document).on("click", "#hamburger", function(){
    $(document).find("#drawer-example").toggleClass("-translate-x-full transform-none");

    $("body").append('<div drawer-backdrop class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"></div>')
});

$(document).on("click", "div[drawer-backdrop], button[data-drawer-hide]", function(){
    $(document).find("#drawer-example").toggleClass("-translate-x-full transform-none");
    $(document).find("div[drawer-backdrop]").remove();
})