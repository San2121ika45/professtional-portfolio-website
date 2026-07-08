document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

const topButton = document.querySelector(".scroll-top");

window.addEventListener("scroll", ()=>{

if(window.scrollY > 300){

topButton.style.display="flex";

}else{

topButton.style.display="none";

}

});

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", revealSection);

function revealSection(){

reveals.forEach(section=>{

const windowHeight = window.innerHeight;

const revealTop = section.getBoundingClientRect().top;

const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

section.classList.add("active");

}

});

}const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

document.querySelectorAll("section").forEach(section => {

const sectionTop = section.offsetTop - 150;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){

link.classList.add("active");

}

});

});

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mouseover",()=>{

heroImage.style.transform="scale(1.08)";

});

heroImage.addEventListener("mouseout",()=>{

heroImage.style.transform="scale(1)";

});

}

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML = `© ${new Date().getFullYear()} Sanika Kolape. All Rights Reserved.`;

}

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

const contactForm = document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been submitted.");

contactForm.reset();

});

}