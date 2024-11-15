let nexDom=document.getElementById("next");
let prevDom=document.getElementById("prev");
let carrusel=document.querySelector(".carousel")
let listItemSlider= document.querySelector(".carousel .list")
let thumbail=document.querySelector(".carousel .thumbnail")
let timeRunnig= 2000;
let runTimeOut;
nexDom.onclick=function(){
    showSlider("next")
}


prevDom.onclick=function(){
    showSlider("prev")
}




function showSlider(type){
    //creo array de elementos con el selector all, asi esta en itemslider  y thumbnail ese array
let itemSlider=document.querySelectorAll(".carousel .list .item")
let itemThumbnail=document.querySelectorAll(".carousel .thumbnail .item")

if(type === "next"){
    //apenchild es el siguiente siempre, entonces dice que en el que estoy, movera el siguiente, porque recordar q estoy viendo lso elementos del item, es un array o se comporta como tal
        listItemSlider.appendChild(itemSlider[0])
        thumbail.appendChild(itemThumbnail[0])
        //agrego el next a class list
        carrusel.classList.add("next")

        }else{
            //prepend es el anterior, appen agrega al ultimo, y prepend al principio
    let positionLastItem= itemSlider.length -1
    listItemSlider.prepend(itemSlider[positionLastItem]);
    thumbail.prepend(itemThumbnail[positionLastItem]);
        carrusel.classList.add("prev")

    }

//para que se vaya moviendo el slider y actualize la vista el thumbnail
clearTimeout(runTimeOut);
runTimeOut= setTimeout(()=>{
carrusel.classList.remove("next")
carrusel.classList.remove("prev")
},timeRunnig)

}


