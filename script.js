let header = document.querySelector('.header');
let navbar = document.querySelector('.header .flex .navbar');
let MenuBtn = document.querySelector('#menu-btn');

let mybutton = document.getElementById("myBtn");

MenuBtn.onclick = () => {
    navbar.classList.toggle('active');
    MenuBtn.classList.toggle('fa-times');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    MenuBtn.classList.remove('fa-times');

    scrollFunction();

   
    if(window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }


    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
        }
}


    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
