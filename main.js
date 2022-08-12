/*navbar*/ 
let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.mynavbar');
let tobButton = document.getElementById("myBtn");

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

  /* subscribe email pop-up form*/ 
  function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
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

/*end loader*/

/*Scroll Back To Top btn*/

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    tobButton.style.display = "block";
  } else {
    tobButton.style.display = "none";
  }
}

// scroll to the top of the document when btn clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome
}



