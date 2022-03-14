let myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", comments1);

function comments1(){
    // event.preventDefault();

    let userName = document.querySelector("#person1");
    let userEmail = document.querySelector("#person2");
    let userComment = document.querySelector("#person3");
    let feedBack = document.querySelector("#frow2");
    let feed = document.querySelector("#frow1");

    let name = userName.value;
    let email = userEmail.value;
    let comment = userComment.value;

    validate(name, email);

      
}
function validate(name, email){
    if(name == ""){
       return alert("Please enter your name");
    }
    else if(email == ""){
        return alert("Eneter your email address");
     }
     else{
        alert("thank you"  + " " + name + " " + ",for reaching out to us, your details have submitted successfully.");             
    }
    return myForm.reset(); 
}




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
        $("#append1").show();
        
    }).mouseout(function(){
        $("#append1").hide();

    });
    $("#col2").mouseover(function(){
        $("#append2").show();
        
    }).mouseout(function(){
        $("#append2").hide();

    });
    $("#col3").mouseover(function(){
        $("#append3").show();
        
    }).mouseout(function(){
        $("#append3").hide();

    });
    $("#col4").mouseover(function(){
        $("#append4").show();
        
    }).mouseout(function(){
        $("#append4").hide();

    });
    $("#col5").mouseover(function(){
        $("#append5").show();
        
    }).mouseout(function(){
        $("#append5").hide();

    });
    $("#col6").mouseover(function(){
        $("#append6").show();
        
    }).mouseout(function(){
        $("#append6").hide();

    });
    $("#col7").mouseover(function(){
        $("#append7").show();
        
    }).mouseout(function(){
        $("#append7").hide();

    });
    $("#col8").mouseover(function(){
        $("#append8").show();
        
    }).mouseout(function(){
        $("#append8").hide();

    });
});
