import { DirectUpload } from '@rails/activestorage'

const fileChooser = document.querySelector('#buckets_images_attachments')

const uploadFile = (file) => {
  const url = fileChooser.dataset.directUploadUrl
  const upload = new DirectUpload(file, url)

  upload.create((error, blob) => {
    if (error) {
      console.log('Upload error! Please try again.')
    } else {
      const uploadForm = document.querySelector('#upload-form')

      const data = {
        filename: blob.filename,
        size: blob.byte_size,
        file_url: `rails/active_storage/blobs/${blob.signed_id}/${blob.filename}`
      }
      
      Object.entries(data).forEach(entry => {
        const [keys, value] = entry
    
        const hiddenField = document.createElement('input')
        hiddenField.setAttribute('type', 'hidden')
        hiddenField.setAttribute('value', value)
        hiddenField.name = `bucket[${keys}]`
        uploadForm.appendChild(hiddenField)
      })

      uploadForm.submit()
    }
  })
}

fileChooser.addEventListener('change', (event) => {
  event.preventDefault();

  const imageFile = event.target.files[0]

  uploadFile(imageFile)
})