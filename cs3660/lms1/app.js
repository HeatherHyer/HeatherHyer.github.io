$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();
$('.popover-dismiss').popover({
  trigger: 'focus'
})

function deleteRow(id) {
  const container = document.getElementById(id);
  const teamName = container.childNodes[3].textContent;
  const teamId = container.childNodes[1].textContent;
  const modalBody = document.getElementById('deleteModalBody');
  const modalYesBtn = document.getElementById('deleteModalYesBtn');

  modalBody.textContent = teamName + ", (" + teamId + ")";

  modalYesBtn.addEventListener("click", function() {
    container.remove();
  });
}
