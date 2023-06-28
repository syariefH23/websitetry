// mengambil semua elemen dari <a> pada nav
const navLinks = document.querySelectorAll('nav a')

// menambahkan event listener pada setiap elemen dari <a>
navLinks.forEach(link =>{
    link.addEventListener('click', () => {
    // menghapus kelas active dari semua elemen dari <a>
    navLinks.forEach(link =>link.classList.remove('active'));
    // menambahkan kelas active pada elemen <a> yang di klik
    link.classList.add('active');
    });
});