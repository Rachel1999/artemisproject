let index = 0;

function slideshow() {
  const dataArray = new Array(
    "Img/index/Slideshow/Pup.jpg",
    "Img/index/Slideshow/pup2.jpg",
    "Img/index/Slideshow/pup3.jpg",
    "Img/index/Slideshow/Cats_Kittens_Glance_549762_2560x1440.jpg",
    "Img/index/Slideshow/Pussy.jpg"
  );
  document.getElementById("slideShowImg").src = `${dataArray[`${index}`]}`;
  document.getElementById("slideShowImg").className = "fadeIn";

  if (index < 4) index++;
  else index = 0;
}

// Vars voor clearInterval
var IntervalSlideShowOut;
var IntervalSlideShowIn;

function SlideShow() {
  // De start van de loop
  SlideOut();

  function SlideIn() {
    // Clear interval van SlideIn
    clearInterval(IntervalSlideShowIn);
    setTimeout(() => {
      // Set interval (timeout wil niet werken)
      IntervalSlideShowOut = setInterval(SlideOut, 200);
    }, 4500);
  }

  function SlideOut() {
    // Fade out CSS
    document.getElementById("slideShowImg").className = "fadeOut";
    // Clear interval van SlideIn
    clearInterval(IntervalSlideShowOut);
    setTimeout(() => {
      // Set interval (timeout wil niet werken)
      IntervalSlideShowIn = setInterval(SlideIn, 200);
      // Verander image
      slideshow();
    }, 4500);
  }
}

/*let aboutUsTextArray = [
`Artemis dierenopvang is een opvang waar in principe ieder dier in nood welkom is. Onze organisatie richt zich voornamelijk op huisdieren en wij zijn in regio Den Bosch de opvang met de meeste huisdieren. Wij werken vanuit de gedachte dat ieder dier die hulp nodig heeft geholpen moet worden ongeacht waar het dier geboren is, een ziekte of handicap heeft of dat de eigenaar wel of geen geld heeft voor de afstandskosten. Deze werkwijze is afwijkend van de meeste opvangen.`,
`Het doel van onze stichting is het opvangen van deze 'overbodige' dieren, deze verzorging en eventueel training te geven en vervolgens op zoek te gaan naar een liefdevolle nieuwe baas.`,
`Wij vangen zowel Nederlandse dieren op als dieren die in het buitenland geboren zijn. Deze laatste groep wordt veelal onbegrepen en dreigt vaak tussen wal en schip te belanden. Helaas worden dieren nog vaak van een foto uitgezocht en vervolgens naar Nederland gestuurd. Met deze plaatsingen gaat het regelmatig mis en er is dan geen opvang voor deze dieren. Om te voorkomen dat ze op verkoopssites belanden en vervolgens van hand tot hand gaan om nog meer trauma´s op te lopen richten wij ons op de opvang voor deze dieren. Bij ons komen ze tot rust, worden ze eventueel getraind en gaan we vanuit daar op zoek naar een definitief thuis.`,
`Wij werken vanuit de gedachte dat op ieder potje een deksel past en er uiteindelijk een liefdevol thuis voor ieder dier komt. Indien het dier zich prima voelt in de opvang is deze welkom zolang nodig is. Wij hanteren dan ook een absoluut NO KILL beleid en euthanasie is alleen aan de orde bij ondragelijk lijden. Omdat ieder dier een tweede kans verdient!`
];


function aboutUsTextWhenClicked(elements, buttons) {

  for (var i = 0; i < elements.length; i++) {

    if(buttons[i].innerText == "Lees minder") {
      buttons[i].innerText = "Lees meer"
      createSmallerText();
    } else {
      elements[i].innerText = aboutUsTextArray[i];
      buttons[i].innerText = "Lees minder";
    }
  }
}

// Arrays elementen uit html halen
const collectionOfSubElements = document.querySelectorAll('.Description  p');
const collectionOfSubElementButtons = document.querySelectorAll('.Description p ~ button');

// Functie voor buttons bij about us
function aboutUsText() {

  collectionOfSubElementButtons.forEach(button => { // Loop alle button elementen
    if(window.innerWidth > 1100) { // als scherm desktop is
      button.remove() // Verwijder knop
      return; // Stop de loop
    } else { // Mobiele apparaten
      // Aanmaken button on click functie
      button.onclick = ((this) => { aboutUsTextWhenClicked(collectionOfSubElements, collectionOfSubElementButtons) })
      // Kort de tekst in
      createSmallerText()
    }
  })
}

// Functie om tekst van about us in te korten 
function createSmallerText() {
  collectionOfSubElements.forEach(subElement => {
    if(window.innerWidth > 1100) return;

    let text = subElement.innerText.split(' ');
    subElement.innerText = ""; // Verwijder alles uit de html

    for(let i = 0; i < 20; i++){
      if(text[i] == undefined) continue;
      subElement.innerText += " " + text[i]
    }
  })
}

window.onload = aboutUsText();*/

// Timeouts voor fade effecten
if(window.innerWidth <= 1024) window.onload = setTimeout(SlideShow, 5000);

/*

  <script type="text/javascript">
  document.getElementById('bar').onclick = function() {
      this.innerHTML = "Not a button";
  };
  </script>
  <button id="bar">Button</button>

*/