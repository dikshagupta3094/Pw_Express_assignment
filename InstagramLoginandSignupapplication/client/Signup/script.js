const formSubmit = document.getElementById('signu-btn')

formSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    const name = document.getElementById('name').value
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const bio = document.getElementById('bio').value
   
  const userData = {
     name,
     username,
     email,
     password,
     bio
  }

  register(userData)
})

async function register(formData){
  try {
    let response = await fetch('http://localhost:3000/api/v1/users/Signup',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  response = await response.json()
  console.log(response);

  if(response.message === 'User register successfully'){
      window.location.href = 'http://localhost:5500/client/Login/index.html'
  }
  } catch (error) {
    alert('Some internall error occurred, Please try again')
  }
}

