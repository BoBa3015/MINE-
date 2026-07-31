/* ==========================================
   OPEN WEBSITE
========================================== */

const openBtn = document.getElementById("openBtn");
const loadingScreen = document.getElementById("loading-screen");
const website = document.getElementById("website");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

bgMusic.volume = 0.25;

bgMusic.play().catch(() => {});

loadingScreen.style.opacity = "0";

setTimeout(() => {

loadingScreen.style.display = "none";

website.classList.remove("hidden");

const surpriseBtn = document.getElementById("surpriseBtn");
const endingOverlay = document.getElementById("endingOverlay");

if (surpriseBtn && endingOverlay) {
    surpriseBtn.onclick = function () {
        endingOverlay.classList.add("show");
    };
}

window.scrollTo({

top:0,
behavior:"smooth"

});

startTypewriter();

createPetals();

// startShootingStars();

updateTimer();

setInterval(updateTimer,1000);

},900);

});


/* ==========================================
   TYPEWRITER LETTER
========================================== */

const message = `

Happy Girlfriend Day, My Love ❤️

Every day since 13 February 2022
has been one of the best chapters
of my life.

Thank you for every smile,
every hug,
every arguments,
and every little moment
that became a memory.

You're my favourite person.

No matter where life takes us...

I'll always choose you.

Forever Yours,

❤️ Bubba ❤️

`;

let index = 0;

function startTypewriter(){

const target =
document.getElementById("typed-letter");

function type(){

if(index < message.length){

target.innerHTML +=
message.charAt(index);

index++;

setTimeout(type,35);

}

}

type();

}

/* ==========================================
   RELATIONSHIP TIMER
========================================== */

function updateTimer(){

const startDate =
new Date("2022-02-13T00:00:00");

const now = new Date();

let diff =
now - startDate;

const years =
Math.floor(diff /
(1000*60*60*24*365));

diff -=
years*
1000*60*60*24*365;

const days =
Math.floor(diff /
(1000*60*60*24));

diff -=
days*
1000*60*60*24;

const hours =
Math.floor(diff /
(1000*60*60));

document.getElementById("years").innerHTML=years;
document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;

}

/* ==========================================
   SAKURA PETALS
========================================== */

function createPetals(){

const container=document.getElementById("petals");

setInterval(()=>{

const petal=document.createElement("div");

petal.className="sakura";

const rotations=[
"rotate(15deg)",
"rotate(45deg)",
"rotate(-25deg)"
];

petal.style.transform=
rotations[Math.floor(Math.random()*3)];

petal.style.left=Math.random()*100+"vw";

const size=
10+Math.random()*18;

petal.style.width=size+"px";

petal.style.height=size+"px";

petal.style.left=
Math.random()*110-5+"vw";

petal.style.animationDelay=
Math.random()*2+"s";

petal.style.animationDuration=
6+Math.random()*5+"s";

petal.style.opacity=
0.5+Math.random()*0.5;

container.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

},250);

}

const finalBtn = document.getElementById("finalBtn");

if(finalBtn){

finalBtn.onclick = function(){

alert("I'd choose you.\nEvery single time. ❤️");

};

}

/* ==========================================
   FINAL SURPRISE
========================================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const endingOverlay = document.getElementById("endingOverlay");

if (surpriseBtn && endingOverlay) {

    surpriseBtn.addEventListener("click", function () {

    endingOverlay.classList.add("show");

    startFireworks();

});	

}

/* ==========================================
   FIREWORKS
========================================== */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
let animationId;

function launchFirework(){

const x = Math.random() * canvas.width;
const y = Math.random() * canvas.height * 0.6 + 50;

const colors = [
"#ff6ec7",
"#ffd166",
"#8ec5ff",
"#ffffff",
"#ff9ad5",
"#b388ff"
];

const color = colors[Math.floor(Math.random()*colors.length)];

for(let i=0;i<60;i++){

particles.push({

x,
y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100,

color

});

}

}

function animateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x += p.dx;
p.y += p.dy;

p.dx *= 0.985;
p.dy *= 0.985;

p.life--;

ctx.globalAlpha = p.life/100;

ctx.beginPath();
ctx.arc(p.x,p.y,2.5,0,Math.PI*2);
ctx.fillStyle = p.color;
ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

ctx.globalAlpha = 1;

animationId=requestAnimationFrame(animateFireworks);

}

function startFireworks(){

particles=[];

animateFireworks();

const launcher = setInterval(()=>{

launchFirework();

},500);

setTimeout(()=>{

clearInterval(launcher);

setTimeout(()=>{

cancelAnimationFrame(animationId);

ctx.clearRect(0,0,canvas.width,canvas.height);

},2500);

},7000);

}

/* ==========================================
   MOON SECRET
========================================== */

const moon = document.getElementById("moon");
const moonSecret = document.getElementById("moonSecret");

let moonClicks = 0;

if(moon){

moon.style.cursor = "pointer";

moon.addEventListener("click",function(){

moonClicks++;

if(moonClicks >= 7){

moonSecret.classList.add("show");

}

});

}

const continueSecret = document.getElementById("continueSecret");

const secretPage1 = document.getElementById("secretPage1");
const secretPage2 = document.getElementById("secretPage2");

if(continueSecret){

continueSecret.onclick = function(){

secretPage1.style.display = "none";

secretPage2.style.display = "block";

};

}

const backSecret = document.getElementById("backSecret");
const closeSecret = document.getElementById("closeSecret");

if(backSecret){

backSecret.onclick = function(){

secretPage2.style.display = "none";

secretPage1.style.display = "block";

};

}

if(closeSecret){

closeSecret.onclick = function(){

moonSecret.classList.remove("show");

secretPage2.style.display = "none";

secretPage1.style.display = "block";

moonClicks = 0;

};

}

const endingBack = document.getElementById("endingBack");
const endingClose = document.getElementById("endingClose");

if(endingBack){

endingBack.onclick = function(){

endingOverlay.classList.remove("show");

};

}

if(endingClose){

endingClose.onclick = function(){

endingOverlay.classList.remove("show");

};

}

