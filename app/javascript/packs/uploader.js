import { DirectUpload } from '@rails/activestorage'

class Uploader {
  constructor(file, url) {
    this.upload = new DirectUpload(file, url, this)
  }

  uploadFile() {
    const loading = document.querySelector('#loading')
    const uploadZone = document.querySelector('#upload-zone')

    uploadZone.classList.add('hidden')
    loading.classList.remove('hidden')

    this.upload.create((error, blob) => {
      if (error) {
        console.log(error)
      } else {
        const uploadForm = document.querySelector('#upload-form')

        const data = {
          filename: blob.filename,
          size: blob.byte_size,
          file_url: `rails/active_storage/blobs/${blob.signed_id}/${blob.filename}`,
        }

        Object.entries(data).forEach((entry) => {
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

  directUploadWillStoreFileWithXHR(request) {
    request.upload.addEventListener('progress', (event) =>
      this.directUploadDidProgress(event)
    )
  }

  directUploadDidProgress(event) {
    const progressBar = document.querySelector('#progress-bar')
    const uploadProgress = (event.loaded / event.total) * 100

    progressBar.style['width'] = `${uploadProgress}%`
  }
}

const fileChooser = document.querySelector('#buckets_images_attachments')

fileChooser.addEventListener('change', (event) => {
  event.preventDefault()

  const imageFile = event.target.files[0]

  const url = fileChooser.dataset.directUploadUrl

  const fileUploader = new Uploader(imageFile, url)

  fileUploader.uploadFile()
})
