
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x-twitter");
    navbar.classList.toggle('active')
}
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });



    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);

    menuIcon.classList.remove('fa-x-twitter');
    navbar.classList.remove('active');

};

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:100,
});
ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.container1, .portfolio-box, .contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.about-content',{origin:'right'});


