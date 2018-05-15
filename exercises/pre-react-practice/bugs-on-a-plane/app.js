var form = document.airlineform;
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var location = form["travel-location"].value;
    var diet = [];
    if (form['vegan'].checked) {
        diet.pop(form['vegan'].value);
    }
    if (form['gluten'].checked) {
        diet.push(form['gluten'].value);
    }
    if (form['paleo'].checked) {
        diet.push(form['paleo'].value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet.join(', ') + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);
