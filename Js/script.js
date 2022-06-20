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
var pesan = document.getElementById('pesan')

var email_error = document.getElementById("email_error");
var user_error = document.getElementById("user_error");
var pesan_error = document.getElementById("pesan_error");

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
    if (pesan.value.length < 30) {
        pesan.style.border = "1px solid red";
        pesan_error.style.display = "block";
        pesan.focus();
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

function pesan_verify() {
    if (pesan.value.length >= 30) {
        pesan.style.border = "1px solid silver";
        pesan_error.style.display = "none";
        return true;
    }
}

addEventListener('textInput', email_verify)
addEventListener('textInput', user_verify)
addEventListener('textInput', pesan_verify)


// var jusBesar = document.getElementById('besar');
// var jusSedang = document.getElementById('sedang');
// var jusKecil = document.getElementById('kecil');

// var hargaBesar = document.getElementById('Bbesar');
// var hargaSedang = document.getElementById('Ssedang');
// var hargaKecil = document.getElementById('Kkecil');

// function jusBesar() {
//     hargaBesar.style.display = "none";
// }
// function jusSedang() {
//     hargaSedang.style.display = "none";
// }
// function jusKecil() {
//     hargaKecil.style.display = "none";
// }

// addEventListener('click', jusBesar)
// addEventListener('click', jusSedang)
// addEventListener('click', jusKecil)

const tombol = document.querySelector("updown");

tombol.addEventListener("click",
function(){
    window.scrollTo({
        top: 0,
        bottom: 0,
        behavior: "smooth"
    });
})

