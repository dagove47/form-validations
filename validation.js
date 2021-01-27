function formValidation(event) {
    event.preventDefault();
    let card = document.getElementById ("inputCard").value;
    let myalert = document.getElementById("alert");

    if(!(card.length == 16)){
        myalert.style.display = "block"
    }
}

