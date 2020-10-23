const copyButton = document.querySelector('#copy-clipboard')

copyButton.addEventListener('click', () => {
  const fileUrlInput = document.querySelector('#bucket_file_url')

  fileUrlInput.select()

  document.execCommand('copy')
})