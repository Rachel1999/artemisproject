var donations = [15, 50, 75, 150]; // current donations

function totalDonations() {
    donation_count = Object.keys(donations).length;
    document.getElementById("total-donations").innerHTML = donation_count;
} totalDonations()

/* Donate button */
function donateNow() {
    input_value = document.getElementById("amount").value;
    donator_name = document.getElementById("name").value;
    email = document.getElementById("email").value;


    if(donator_name === "") {
        donator_name = "Anoniem";
    }

    if(input_value === "") {
        alert("Vul een bedrag in");
    } 
    else {
        donations.push(input_value);

        var sum = donations.reduce(function(a, b){
            return +a + +b;
        }, 0);
        document.getElementById("total-amount").innerHTML = "€" + sum + ",-";

        // Change goal block if goal has been reached
        if(sum >= 500) {
            document.getElementById("goal").innerHTML = "DOEL BEREIKT!";
        }

        document.getElementById("text").innerHTML = "Bedankt voor uw donatie!"
        document.getElementById("formDoneer").style.display = "none";

        document.getElementById("new-donator").style.display = "inline-block";
        document.getElementById("€").innerHTML = "€" + input_value + ",-";
        document.getElementById("donator").innerHTML = donator_name;

        totalDonations()
    }
}