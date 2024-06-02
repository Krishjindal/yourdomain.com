function togglePopup() { 
    const overlay = document.getElementById('popupOverlay'); 
    overlay.classList.toggle('show'); 
    } 

    function openWebpage() {
        window.location.href = 'https://www.fylehq.com/';
    }
   const one=document.getElementById('first');
   const two=document.getElementById("sec");
   const three=document.getElementById("third");
     const imag=document.getElementById('imag');


   function oneclick(){
      one.style.backgroundColor="red";
      one.style.color="white";
      two.style.backgroundColor="floralwhite";
      two.style.color="black";
      third.style.backgroundColor="floralwhite";
      third.style.color="black";
    changeBackground('mount.jpg');   
   }
   function twoclick(){
    one.style.backgroundColor="floralwhite";
      one.style.color="black";
      two.style.backgroundColor="red";
      two.style.color="white";
      third.style.backgroundColor="floralwhite";
      third.style.color="black";
      changeBackground('sec3i.png')
   }
   function thirdclick(){
    one.style.backgroundColor="floralwhite";
    one.style.color="black";
    two.style.backgroundColor="floralwhite";
    two.style.color="black";
    third.style.backgroundColor="red";
    third.style.color="white";
    changeBackground('trees.jpg')
   }
   function changeBackground(image) {
    imag.style.backgroundImage = `url(${image})`;
}

function highlight(divId) {
  var divs = document.querySelectorAll('.box-img');

  divs.forEach(function(div) {
      div.classList.remove('highlighted');
  });
  var div = document.getElementById(divId);
  div.classList.add('highlighted');
}




