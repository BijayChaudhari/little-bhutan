$(document).on("click", "#hamburger", function () {
    $(document).find("#drawer-example").toggleClass("-translate-x-full transform-none");

    $("body").append('<div drawer-backdrop class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"></div>')
});

$(document).on("click", "div[drawer-backdrop], button[data-drawer-hide]", function () {
    $(document).find("#drawer-example").toggleClass("-translate-x-full transform-none");
    $(document).find("div[drawer-backdrop]").remove();
})


const images = document.querySelectorAll(".mouse_flow");
const container = document.querySelector(".hero-img-part");
let isTransitioning = false;

// Apply initial transition settings and event listeners to all images
images.forEach(image => {
    // image.style.transition = "transform 0.5s ease-out";

    image.addEventListener("mouseover", () => {
        image.classList.add("hovered");
    });

    image.addEventListener("mouseout", () => {
        image.classList.remove("hovered");
        image.style.transform = "translate(0, 0)";
    });
});

container.addEventListener("mousemove", (e) => {
    if (isTransitioning) return;

    isTransitioning = true;

    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;

    images.forEach((image, index) => {
        // Random offsets with limits
        const maxOffset = 20;
        const xOffset = (Math.random() - 0.5) * 2 * maxOffset;
        const yOffset = (Math.random() - 0.5) * 2 * maxOffset;

        // Calculate boundaries
        const maxX = container.clientWidth - image.offsetWidth;
        const maxY = container.clientHeight - image.offsetHeight;
        const minX = 0;
        const minY = 0;

        // Constrain offsets to boundaries
        const constrainedX = Math.max(minX, Math.min(maxX, xOffset));
        const constrainedY = Math.max(minY, Math.min(maxY, yOffset));

        setTimeout(() => {
            if (!image.classList.contains("hovered")) {
                image.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
            }

            // Transition end listener
            image.addEventListener("transitionend", () => {
                isTransitioning = false;
            }, { once: true });
        }, index * 300);
    });
});

container.addEventListener("mouseout", () => {
    isTransitioning = false; // Allow new transitions when mouse leaves the container
    images.forEach((image) => {
        image.style.transform = "translate(0, 0)";
    });
});


$(document).on("click",".cc",function(){
    // e.preventDefault()
    $(this).find(".detail").toggleClass("hidden block");
});


$(document).on("click",".cc",function(){
    $(this).find(".detail").slideToggle(500);;
})
