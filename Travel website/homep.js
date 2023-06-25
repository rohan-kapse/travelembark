const toggleBtn = document.getElementById('toggleham');
const navLinks = document.getElementById('men');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})
