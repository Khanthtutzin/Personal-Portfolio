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



