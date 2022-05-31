// This is all you.
const ham = document.getElementById('ham');
const navmenu = document.getElementById('navmenu');

ham.addEventListener("click", () => {
    navmenu.classList.toggle("open");
})
