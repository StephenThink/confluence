// This is all you.
const ham = document.getElementById('ham');
const navmenu = document.getElementById('navmenu');
const burger = document.getElementById('burger');
const close = document.getElementById('close');

ham.addEventListener("click", () => {
    navmenu.classList.toggle("open");
    burger.classList.toggle("hidden");
    close.classList.toggle("hidden");

})
