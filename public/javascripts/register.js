"use strict"

var frame,email,pass,conf_pass ;

document.getElementById("regis").addEventListener("click", function(){
    console.log("button");
    postData();
});
async function postData(){

    email =document.getElementById("a_email").value;
    pass =document.getElementById("a_pass").value;
    conf_pass =document.getElementById("a_confirm_pass").value;

    console.log(conf_pass);
    email=email.toString();
    pass=pass.toString();
    conf_pass= conf_pass.toString();
    
    frame={a_email : email , a_pass : pass, a_conf_pass:conf_pass};
    let response = await fetch('https://iot-server-365.herokuapp.com/register',{
        method: 'post',
        mode: 'cors', 
        headers:{
            //'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(frame)
    });
    let datum= await response;
    console.log(datum);
    if(datum.redirected)
    {
        window.location.replace( "/login");
    }
    else{
        console.log("error");
        document.getElementById("status").innerHTML="Account is exist or confim your password is incorrect";
    }
}