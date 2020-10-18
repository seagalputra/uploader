const fileInput = document.querySelector('#image-upload');
fileInput.addEventListener('change', (event) => {
  const imageFile = event.target.files[0];

  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const formData = new FormData();
  formData.append('authenticity_token', token)
  formData.append('bucket[filename]', imageFile.name)
  formData.append('bucket[size]', imageFile.size)
  formData.append('bucket[images]', imageFile)

  fetch('/buckets', {
    method: 'POST',
    body: formData
  })
  .then(data => console.log(data))
})