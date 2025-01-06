import { baseUrl } from "./baseUrl";



let form = document.getElementById("form");
form.addEventListener("submit" function(){
    event.preventDefault();
    let email =form.email.value;
    let password =form.password.value;



    fetch(`{baseUrl}/users`)
    .then((res)=>res.json())
    .then((data)=>{
        let user =data.filter((el,i)=> el.email==email);
        if(user.length !=0) {
            if(user[0].password==password){
                alert("login sucesss");
                localStorage.setItem("loginData",JSON.stringify(user[0]))
                window.location.href = "home.html"
            }else {
                alert("password is wrong,please login with right password")
            }
        }else {
            alert("user not registred,please signup");
            window.location.href="signup.html"
        }
    })
    .catch((err)=>{
        console.log(err);
        alert ("something went wrong,please try again later")
    });
});