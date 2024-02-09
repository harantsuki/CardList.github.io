const ayaka = document.getElementById("ayaka")
const ayato = document.getElementById("ayato")
const chongyun = document.getElementById("chongyun")
const eula = document.getElementById("eula")

const Ayaka = document.querySelector(".ayaka")
const Ayato = document.querySelector(".ayato")
const Chongyun = document.querySelector(".chongyun")
const Eula = document.querySelector(".eula")

ayaka.addEventListener('click', function() {
    Ayaka.classList.toggle("off");
})

ayato.addEventListener('click', function() {
    Ayato.classList.toggle("off");
})

chongyun.addEventListener('click', function() {
    Chongyun.classList.toggle("off");
})

eula.addEventListener('click', function() {
    Eula.classList.toggle("off");
})