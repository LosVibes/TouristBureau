document.addEventListener("DOMContentLoaded", ()=>{

    const nav = document.querySelector("nav");// Get the first and only nav element onject
    
    nav.innerHTML = `
<a href="index.html"> Home </a>
<a href="activities.html"> Activities </a>
<a href="hikes.html"> Hikes </a>
<a href="video.html"> Video </a>
    `;


});// END DOMContentLoaded