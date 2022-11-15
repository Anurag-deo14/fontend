$('.menu-toggle').click(function () {
    $(".nav").toggleClass("header");
    $(this).toggleClass("is-active");
});

var click = 0;
function callSlidePane() {
    pane = document.getElementById("pane");
    navBar = document.getElementsByClassName("navbar")[0];
    if (click == 0) {
        pane.style.display = "block";
        click = 1;
        navBar.style.boxShadow = "none";
    }
    else {
        pane.style.display = "none";
        navBar.style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.1)";
        click = 0;
    }
}
const btnE1 = document.querySelector(".hero-register1");
const closeIconE1 = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailercontainer");
const ContainerE1 = document.querySelector(".main-section");

btnE1.addEventListener("click", () => {
	trailerContainerE1.classList.remove("active");

	ContainerE1.classList.add("active2");

});
const videos = document.querySelectorAll('iframe')


closeIconE1.addEventListener('click', () => {
	videos.forEach(i => {
		const source = i.src
		i.src = ''
		i.src = source
	})
});
closeIconE1.addEventListener("click", () => {
	trailerContainerE1.classList.add("active");

	ContainerE1.classList.remove("active2");


});