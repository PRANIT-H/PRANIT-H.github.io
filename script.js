let email = document.querySelector("#email");
let passWord  =document.querySelector("#pass");
const logbtn  =document.querySelector("#lg");

logbtn.addEventListener("click", () => 
{
    if(email.value == "pranithalapanavar@gmail.com" && passWord.value == "12345")
    {
        
        window.location.href = "log.html";
    }
    else
    {
        alert("invalid input");
        email.value = "";
        passWord.value = "";

    }
    

});
