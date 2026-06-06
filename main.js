const body = document.getElementById('body');

const btn = document.getElementById("bbtn");


function darkMode() {
    body.classList.toggle('bg-black');
    body.classList.toggle('text-ehite');

    const isDark = body.classList.contains('bg-black');
    btn.textContent = isDark ? "🌙" : "☀️";}