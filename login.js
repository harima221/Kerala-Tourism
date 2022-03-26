let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error1 = document.getElementById("error");
function validate(){
            let regExp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3}?)$/
            if(regExp.test(email.value)){
             return true; 
            }
else{
    error1.innerHTML = "Invalid";
    error1.style.color = "red";
    return false;
}
}
 let timeout;
    let password = document.getElementById('PassEntry')
    let strengthBadge = document.getElementById('StrengthDisp')
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    
    function StrengthChecker(PasswordParameter){
       

        if(strongPassword.test(PasswordParameter)) {
            strengthBadge.style.color = 'green'
            strengthBadge.textContent = 'Strong'
        } else if(mediumPassword.test(PasswordParameter)){
            strengthBadge.style.color = 'orange'
            strengthBadge.textContent = 'Medium'
        } else{
            strengthBadge.style.color = 'red'
            strengthBadge.textContent = 'Weak'
        }
    }

    

    password.addEventListener("input", () => {

        

        strengthBadge.style.display= 'block'
        clearTimeout(timeout);
        timeout = setTimeout(() => StrengthChecker(password.value), 500);
        if(password.value.length !== 0){
            strengthBadge.style.display != 'block'
        } else{
            strengthBadge.style.display = 'none'
        }
    });