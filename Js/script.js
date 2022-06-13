var swiper = new Swiper(".mySwiperProduct", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
    },
});

// var email = document.forms["form"]["email"];
// var user = document.forms["form"]["name"];
var contact = document.getElementById('contactFrom')
var email = document.getElementById('email')
var user = document.getElementById('user')

var email_error = document.getElementById("email_error");
var user_error = document.getElementById("user_error");

function validated() {
    if (email.value.length < 8) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (user.value.length < 3) {
        user.style.border = "1px solid red";
        user_error.style.display = "block";
        user.focus();
        return false;
    }
}

function email_verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function user_verify() {
    if (user.value.length >= 3) {
        user.style.border = "1px solid silver";
        user_error.style.display = "none";
        return true;
    }
}

addEventListener('textInput', email_verify)
addEventListener('textInput', user_verify)
