function formValidation(event) {
    event.preventDefault();
    let myform = document.getElementById ("myform");
    let myalert = document.getElementById("alert");
    let card = document.getElementById ("inputCard");
    let cvc = document.getElementById ("inputCVC");
    let amount = document.getElementById ("inputAmount");
    let name = document.getElementById ("inputName");
    let lastName = document.getElementById ("inputLastName");
    let city = document.getElementById ("inputCity");
    let state = document.getElementById ("inputState");
    let postalCode = document.getElementById ("inputZip");
    let cardType = document.getElementsByName ("inlineRadioOption");
    let checkInput = document.getElementById ("checkInput");
    let message = document.getElementById ("floatingMessage");
    let submitForm = false;

    if(!(card.value.length == 16)){
        myalert.style.display = "block";
        myalert.textContent = "Card must have 16 digits";
        card.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(cvc.value.length != 3){
        myalert.style.display = "block";
        myalert.textContent = "CVC must have 3 digits";
        cvc.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(amount.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Enter the amount of money";
        amount.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(name.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Enter your name";
        name.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(lastName.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Enter your last name";
        lastName.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(city.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Enter your city";
        city.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(state.value == "Pick a State"){
        myalert.style.display = "block";
        myalert.textContent = "Pick a state";
        state.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(postalCode.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Enter your postal code";
        postalCode.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }

    if(message.value.length == 0){
        myalert.style.display = "block";
        myalert.textContent = "Enter a message";
        message.style.backgroundColor = "rgb(236, 205, 208)";
        submitForm = false;
    } else {
        submitForm = true;
    }
}

