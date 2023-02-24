window.addEventListener("load", ()=>{

/*const tartalomElem = document.getElementById("tartalom")
console.log(tartalomElem)
const tartalomElemMaskepp = document.querySelector("#tartalom")
const tartalomElemMaskepp2 = document.querySelector(".tart")
const tartalomElemMaskepp3 = document.getElementsByClassName("tart")
const tartalomElemEz = document.querySelectorAll(".tart")
console.log(tartalomElemEz)
console.log(tartalomElemEz[0])
let szoveg = "Csőő tesóm! :3"
tartalomElem[0].innerHTML = "<p>"+szoveg+"</p>"
tartalomElem[0].innerHTML = "<p>"+szoveg+"</p>"
tartalomElem[0].innerHTML = "<p>"+szoveg+"</p>"
tartalomElem[0].innerHTML = "<p>"+szoveg+"</p>"*/
const tartalomElemEz = document.querySelectorAll(".tart")
const kedvencEtelek = ["Rakott zöldbab", "Rántott máj", "Sült krumpli", "Házilag készített KFC-s csirke", "Gyümölcsleves"]
const kedvencEtelekKepei = ["gyumolcsleves.jpg", "rakottzb.jpg", "KFCcsirke.jpg", "rantottmaj.jpg", "sultkrumpli.jpg"]
kedvencEteleim(kedvencEtelek, tartalomElemEz);
kedvencEtelKepek(kedvencEtelekKepei, tartalomElemEz);

})


function kedvencEteleim(lista, container){
    
    let szoveg = "<ul>"
    for (let index = 0; index < lista.length; index++) {
        szoveg += "<li>" + lista[index] + "</li>"
    }
    szoveg+="</ul>"
    container[0].innerHTML += szoveg
}

function kedvencEtelKepek(lista, container){
    
    let kep = " "
    for (let i = 0; i < lista.length; i++) {
        kep += `<img src="${lista[i]}" alt="kép">`
    }
    container[1].innerHTML += kep
}