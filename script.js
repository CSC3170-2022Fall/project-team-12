const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


var myUserName = new Array();
var myUserEmail = new Array();
var myUserPassword = new Array();


const name = document.getElementById("name")
name.onkeyup = function(){
    console.log(name.value)
}

var email = document.getElementById("email")
email.onkeyup = function(){
    console.log(email.value)
}

var password = document.getElementById("password")
password.onkeyup = function(){
    console.log(password.value)
}

var confirmPassword = document.getElementById("confirmPassword")
confirmPassword.onkeyup = function(){
    console.log(confirmPassword.value)
    if(confirmPassword.value != password.value){
        console.log("different")
        const incorrect =document.getElementById("incorrect")
        incorrect.style.display='block';
    }
    else{
        const incorrect =document.getElementById("incorrect")
        incorrect.style.display='none';
        myUserName.push(name.value)
        myUserEmail.push(email.value)
        myUserPassword.push(password.value)
    }
}

var tempEmail = document.getElementById("tempEmail")
tempEmail.onkeyup = function(){
    console.log(tempEmail.value)
    console.log(myUserEmail.indexOf(tempEmail.value))
    if (myUserEmail.indexOf(tempEmail.value)==-1){
        console.log("emailNotFound")
        const emailNotFound =document.getElementById("emailNotFound")
        emailNotFound.style.display='block';
    }
    else{
        const emailNotFound =document.getElementById("emailNotFound")
        emailNotFound.style.display='none';
    }
}


var tempPassword = document.getElementById("tempPassword")
tempPassword.onkeyup = function(){
    console.log(passwordNotMatch.value)
    console.log(myUserEmail.indexOf(tempEmail.value))
    console.log(myUserPassword.indexOf(tempPassword.value))
    if (myUserPassword.indexOf(tempPassword.value)!=myUserEmail.indexOf(tempEmail.value)){
        console.log("passwordNotMatch")
        const passwordNotMatch =document.getElementById("passwordNotMatch")
        passwordNotMatch.style.display='block';
    }
    else{
        const passwordNotMatch =document.getElementById("passwordNotMatch")
        passwordNotMatch.style.display='none';
    }
}





