var inputemail=document.getElementById("input-email");
var message=document.getElementById("message");

function vaildeamil(){
    if(inputemail.value.indexOf("@gamil") != -1){
        message.innerHTML="Thanks For You";
        inputemail.style.borderColor=``;
        message.className="active";
        inputemail.setAttribute("placeholder","Your email address")
        inputemail.value="";

    }else{
        message.innerHTML="Please provide availd email address";
        inputemail.style.borderColor=`hsl(354, 100%, 66%)`;
        message.className="active";
        inputemail.setAttribute("placeholder","example@email/come")
        inputemail.value="";
    }
}
