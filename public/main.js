const update = document.querySelector('#update-button')
const messageDiv = document.querySelector('#message')
update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'chelsey',
            quote: 'I find your lack of faith disturbing.'
        })
    })
})

const deleteButton = document.querySelector('#delete-button')
deleteButton.addEventListener('click', _ => {
    const nameToDelete = prompt('Enter the name of the quote you want to delete')
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nameToDelete
        })
    })
    .then(res => {
        if (res.ok) return res.json()
        else throw new Error('Network response was not ok')
    })
    .then(res => {
        if (res === 'No quote to delete') {
          messageDiv.textContent = 'No quote to delete'
        } else {
          window.location.reload(true)
        }
      })
      .catch(console.error)
})
