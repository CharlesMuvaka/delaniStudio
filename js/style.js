$(document).ready(function(){

    $("#pen1").click(function(){
        $(".hide1").show();
    });
    $(".hide1").click(function(){
        $(".hide1").hide();
    });

    $("#pen2").click(function(){
        $(".hide2").show();
    });
    $(".hide2").click(function(){
        $(".hide2").hide();
    });

    $("#pen3").click(function(){
        $(".hide3").show();
    });
    $(".hide3").click(function(){
        $(".hide3").hide();
    });

    $("#col1").mouseover(function(){
        $("#append1").toggle();
        
    });
    $("#col2").mouseover(function(){
        $("#append2").toggle();
        
    });
    $("#col3").mouseover(function(){
        $("#append3").toggle();
        
    });
    $("#col4").mouseover(function(){
        $("#append4").toggle();
        
    });
    $("#col5").mouseover(function(){
        $("#append5").toggle();
        
    });
    $("#col6").mouseover(function(){
        $("#append6").toggle();
        
    });
    $("#col7").mouseover(function(){
        $("#append7").toggle();
        
    });
    $("#col8").mouseover(function(){
        $("#append8").toggle();
        
    });
    

});

let myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", comments1);

function comments1(event){
    event.preventDefault();

    let userName = document.querySelector("#person1");
    let userEmail = document.querySelector("#person2");
    let userComment = document.querySelector("#person3");

    let name = userName.value;
    let email = userEmail.value;
    let comment = userComment.value;

    validate(name, email);
    
    
}

function validate(name, email){
    if(name == ""){
       return alert("name required");
    }
    else if(email == ""){
        return alert("email required");
     }
    else{
        alert("Details submitted successfully");
     }

     return myForm.reset();

    
}