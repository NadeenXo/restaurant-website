/*navbar*/ 
let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.mynavbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

/*email validation*/
function submitEmail(){
   /*  console.log(document.getElementById("InputEmail").value); */
    let inp = document.getElementById("InputEmail");
    if(inp.checkValidity()){
        /* document.getElementById("nomail").innerHTML =inp.validationMessage; */
        alert("great .. you have been one of us!");
        inp.value="";
    }else{
        document.getElementById("nomail").innerHTML =inp.validationMessage;
       
    }
    
}