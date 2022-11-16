const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const btnE1 = document.querySelector(".play-video");
const closeIconE1 = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailercontainer");
const ContainerE1 = document.querySelector(".main-sec");

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