function openModal(title, url) {
   document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-frame').src = url;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modal-frame').src = '';
}
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      closeModal();
  }
}
