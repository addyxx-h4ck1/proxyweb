const sendButton = document.querySelector('.submit')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

  const data = Object.fromEntries(new FormData(form).entries())
  console.log(data);


// https://github.com/github/fetch
fetch("https://formsubmit.co/ajax/proxxyweb@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(res =>{
        form.reset()
        location.href = "https://proxxyweb.netlify.app/forms/servicebookedpage.html"
    })
    .catch(error => console.log(error));
})


