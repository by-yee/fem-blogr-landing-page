const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const navbar = document.querySelector('.has-fade');

btnHamburger.addEventListener('click', function() {
    if(header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        navbar.classList.remove('fade-in');
        navbar.classList.add('fade-out');
    }

    else { // Open Hamburger Menu
        header.classList.add('open');
        navbar.classList.add('fade-in');
        navbar.classList.remove('fade-out');
    }
});


// Header menu collapse accordion
var item = document.getElementsByClassName("header__link");

for(var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {

        var isActive = !this.classList.contains('active');
        var allItem = document.getElementsByClassName("header__link");
        let accCollapse = this.nextElementSibling;

        // Close active item
        for (var j = 0; j < allItem.length; j++) {
            allItem[j].classList.remove("active");
            allItem[j].nextElementSibling.classList.add("collapse");
            allItem[j].nextElementSibling.classList.remove("open");
        }

        // Open clicked item
        if(isActive) {
            this.classList.toggle('active');
            accCollapse.classList.remove('collapse');
            accCollapse.classList.add('open');
        }
    });
}


// Remove the header menu if breakpoint-up is large
window.addEventListener("resize", function() {
    if (window.innerWidth > 1023) {
        // body.classList.remove('noscroll');
        header.classList.remove('open');
        navbar.classList.remove('fade-in');
        navbar.classList.remove('fade-out');
        // close_all_accordion();
    }
});



//Remove the header menu if breakpoint-down is medium
function close_all_accordion () {
    // console.log("hello");
    var allItem = document.getElementsByClassName("header__link");
    for (var j = 0; j < allItem.length; j++) {
        allItem[j].classList.remove("active");
        allItem[j].nextElementSibling.classList.add("collapse");
        allItem[j].nextElementSibling.classList.remove("open");
    }
}