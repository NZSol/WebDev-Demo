function tempBtnPress(){
    alert("You clicked me!");
}


function submitFields(event, style){
    event.preventDefault();
    let forms = document.getElementById(form);
    console.log(forms);
    // var formLength = forms.elements;
    // console.log(formLength);

    

    var passInput = form.elements[1].value;
    var confPassInput = form.elements[2].value;

    if(passInput === confPassInput){
        alert("Passwords Match");
    }
    else{
        alert("Password mismatch");
    }

}

function Rearrange(style, event){
    event.preventDefault();
    console.log(style);
    let item = document.getElementById("submitBtn");
    item.style.backgroundColor = "black";
    item.style.display = "block";
}