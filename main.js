const svgButton = document.querySelector(".svg-button");
const activeMenu = document.querySelector(".toggle");
svgButton.addEventListener("click", function () {

    activeMenu.classList.toggle('active');
});
