/*
    General.js - Hoofd Javascript file
*/

// Wanneer pagina geladen is, zet timeout voor de donate animation en bekijk welke soort menu je nodig hebt
window.onload = setTimeout(BTNDonateAnimation, 1500);

// Voor resize van je browser (mobiel/browser testen) bekijk welke soort menu je nodig hebt
window.onresize = (() => { BTNDonateAnimation() });

// Variabelen
let isLoaded = false;
let isOpen = false;


function BTNDonateAnimation()
{ 
  if(window.innerWidth > 1100)
  {
    if(!isLoaded) document.getElementsByClassName("desktop")[0].classList.add("fadeIn");
    else {
      document.getElementsByClassName("desktop")[0].classList.remove("fadeIn");
      document.getElementsByClassName("desktop")[0].style.opacity = '100%';
    }

    document.getElementsByClassName("desktop")[0].style.display = "flex";
    document.getElementsByClassName("mobileDevice")[0].style.display = "none";
    
    // Hard coded force nav "open"
    isOpen = true;
    document.getElementById("NavMenu").style.display = "flex";
    document.getElementById("PageTitle").style.display = "none";
  }

  else if(window.innerWidth <= 1100)
  {
    if(!isLoaded) document.getElementsByClassName("mobileDevice")[0].classList.add("fadeIn");
    else {
      document.getElementsByClassName("mobileDevice")[0].classList.remove("fadeIn");
      document.getElementsByClassName("mobileDevice")[0].style.opacity = '100%';
    }

    document.getElementsByClassName("mobileDevice")[0].style.display = "flex";
    document.getElementsByClassName("desktop")[0].style.display = "none";

    // Hard coded force nav closed
    isOpen = false;
    document.getElementById("NavMenu").style.display = "none";
    document.getElementById("PageTitle").style.display = "block";
  }

  isLoaded = true;
}

// Onclick Hamburgermenu, open/close het menu

document.getElementById("HamburgerMenu").onclick = (() => {
  (isOpen) ? isOpen = false : isOpen = true;

  if(isOpen)
  {
    document.getElementById("NavMenu").style.display = "flex";
    document.getElementById("PageTitle").style.display = "none";
  } else {
    document.getElementById("NavMenu").style.display = "none";
    document.getElementById("PageTitle").style.display = "block";
  }
});