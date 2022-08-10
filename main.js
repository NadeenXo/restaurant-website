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
        closeForm();

      //  Swal.fire("Our First Alert", "With some body text and success icon!", "success");

            
       
        inp.value="";
    }else{
        document.getElementById("nomail").innerHTML =inp.validationMessage;
       
    }
    
}

/*loader*/
/* function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  } */
  function fadeOut(){
  /*   setInterval(loader, 3000); */
    setInterval(()=>{
        document.querySelector('.loader-container').classList.add('fade-out');
    } , 2000);
  }
  
  window.onload = fadeOut();

  /**/ 
  function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
