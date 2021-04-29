var hasDonated = false;

function doneerSubmit()
{

    // "Pop-Up" nieuwe elementen na dat je een keer op de knop doneer drukt.
   if(!hasDonated) {
        // Add Id en verwijder Class
        document.getElementsByClassName('preItemDoneer')[1].id = "Donations";
        document.getElementById('Donations').classList.remove("preItemDoneer")
        // Add Id en verwijder Class
        document.getElementsByClassName('preItemDoneer')[0].id = "Goal";
        document.getElementById('Goal').classList.remove("preItemDoneer")
        // Add Id en verwijder Class
        document.getElementsByClassName('preMainDoneer')[0].id = "mainDoneer";
        document.getElementById('mainDoneer').classList.remove("preMainDoneer")

        //Setting other HTML elemtns like forms
        document.querySelector("#formDoneer>h1").style.display = "none";
        document.querySelector("form").style.justifyContent = "center"
   }


    // Get values van de form
    let form = document.getElementById('formDoneer');
    let naam = form.elements['Naam'].value.length > 0 ? form.elements['Naam'].value : "Anoniem";
    let bedrag = Number(form.elements['Bedrag'].value) ?? 0;

    // Als gedoneerd heeft, geen naam veranderen, anders zet er een naam neer
    if(!hasDonated) document.getElementById('Donators').querySelector("li").querySelector("p").innerHTML = naam;

    // Zet hasDonated naar true zodat de naam niet meer veranderd.
    hasDonated = true;

    // Pak donatievalue en zorg er voor dat het een Number wordt.
    var donationAmount = document.getElementsByClassName("donationAmount")[0].querySelector("p").innerHTML;
    var ParsedDonationAmount = parseFloat(donationAmount.split("€")[1]);
    var totaleBedrag = ParsedDonationAmount + bedrag;
    // Update het bedrag
    document.getElementsByClassName("donationAmount")[0].querySelector("p").innerHTML = `€${totaleBedrag},-`;

    var DonationAmountTotal = 0;

    // Pak nieuwe donatievalue
    for (var i = 0; i < 5; i++)
    {
        DonationAmountTotal = DonationAmountTotal + parseFloat(document.getElementsByClassName("donationAmount")[i].querySelector("p").innerHTML.split("€")[1]);
    }

    // Update de goal balk
    let a = DonationAmountTotal;
    let b = 500 // Dit is het nummer voor de goal
    let c = a/b;
    let d = c*100;
    
    if(d > 100) d = 100; // Niet over 100% gaan 

    // Verander de Width van de 2 bar elementen.
    document.getElementById('Progress').style.width = d + "%";
    
    document.getElementById('MainGoal').style.width = 100-d + "%";
    document.getElementById('Progress').querySelector("p").innerHTML = DonationAmountTotal;

    var previousAmount = Number(document.getElementsByClassName('amount')[0].querySelector("h2").innerHTML);
    document.getElementsByClassName('amount')[0].querySelector("h2").innerHTML = previousAmount+1;

    //Reset form for Go Back
    document.querySelector("#GoBack").onclick = (() => {

        // Add Id en verwijder Class
        document.getElementById('Goal').classList.add("preItemDoneer")
        document.getElementsByClassName('preItemDoneer')[0].id = "-";
        // Add Id en verwijder Class
        document.getElementById('Donations').classList.add("preItemDoneer")
        document.getElementsByClassName('preItemDoneer')[1].id = "-";
        // Add Id en verwijder Class
        document.getElementById('mainDoneer').classList.add("preMainDoneer")
        document.getElementsByClassName('preMainDoneer')[0].id = "-";

        //Setting other HTML elemtns like forms
        document.querySelector("#formDoneer>h1").style.display = "block";
        document.querySelector("form").style.justifyContent = "center";

        hasDonated = false;
    });
}