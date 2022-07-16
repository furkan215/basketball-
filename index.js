let guestEl = document.getElementById("guest-el")
let homeEl = document.getElementById("home-el")

homeEl.innerText = 0
guestEl.innerText = 0
counth = 0
countg = 0

function plusoneh(){
    homeEl.innerText = counth+=1;
}
function plustwoh(){
    homeEl.innerText = counth+=2;
}
function plusthreeh(){
    homeEl.innerText = counth+=3;
}

function plusoneg(){
    guestEl.innerText = countg+=1;
}
function plustwog(){
    guestEl.innerText = countg+=2;
}
function plusthreeg(){
    guestEl.innerText = countg+=3;
}

function reset(){

    countg = 0
    counth = 0 
    homeEl.innerText = 0
    guestEl.innerText = 0

}