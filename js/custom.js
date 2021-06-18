
document.addEventListener('DOMContentLoaded', () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});

function copytext(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  document.execCommand("copy");
};






