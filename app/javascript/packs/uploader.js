const fileInput = document.querySelector('#image-upload');
fileInput.addEventListener('change', (event) => {
  const imageFile = event.target.files[0];

  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const formData = new FormData();
  formData.append('authenticity_token', token)
  formData.append('user[images]', imageFile)

  fetch('/users', {
    method: 'POST',
    body: formData
  })
  .then(data => console.log(data))
})