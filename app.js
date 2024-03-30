// modal 1 
const exampleModal = document.getElementById('Modal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever');
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title');
    const modalBodyInput = exampleModal.querySelectorAll('.modal-body input #recipient-name');

    modalTitle.textContent = `New message to ${recipient}`;
  });
}

$(document).ready(function(){

    $('.navbuttons').click(function(){
      $(this).toggleClass('crossxs');
    });

});



// Galaxy background 

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 400
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
  result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
}
console.log(result.substring(0, result.length - 1));