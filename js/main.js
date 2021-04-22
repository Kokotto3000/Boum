"use strict";

document.addEventListener("DOMContentLoaded", main);

function main(){

    //récupération des éléments du DOM
    const SLOT= document.querySelector('.slot');
    const CONFETTIS= document.querySelector('.confettis');
    //création d'un tableau avec une sélection d'emojis à faire exploser, les emojis sont considérés comme des string
    const EMOJIS= ["😘", "✌️", "👯‍♀️", "🐥", "🐒", "🐻", "🔥", "🍌", "🌭", "🍻", "🎷", "🕹", "🏍", "🚀", "🪓", "🎈", "❤️"];

    //listener sur le bouton
    CONFETTIS.addEventListener("click", boum);

    function boum(){

        //si une animation est déjà en route, on s'arrête là
        if(isRunning()) return;

        //faire évoluer le nombre de particules plus tard...
        for(let i= 0; i < 50; i++){
            const particules= document.createElement('div');
            particules.innerText= EMOJIS[Math.floor(Math.random()*EMOJIS.length)];
            SLOT.appendChild(particules);
        }

        boumAnimation();
    }

    function boumAnimation(){
        //timeline gsap
        const BOUM_TL= gsap.timeline();
        //ce qu'on veut animer dans l'ordre et ce qu'on va faire
        BOUM_TL
        .to('.slot div', {
            x: "random(-100, 100)",
            y: "random(-100, 100)",
            z: "random(0, 1000)",
            rotation: "random(-90, 90)",
            duration: 1
        })
        //les fait disparaître par opacité et duration
        .to('.slot div', {
            autoAlpha: 0,
            duration: 0.3
        }, "-=0.2")
        //on les efface du DOM
        .add(()=> {
            SLOT.innerHTML= "";
        });
    }

    //on ajoute une fonction pour vérifier si l'animation est déjà lancée quand on clique sur le bouton
    function isRunning(){
        return gsap.isTweening('.slot div'); // renvoie true ou false
    }
}







