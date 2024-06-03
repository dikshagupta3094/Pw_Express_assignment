const formSubmit = document.getElementById('login-btn')

formSubmit.addEventListener('click',()=>{
    const username = document.getElementById('Username').value
    const password = document.getElementById('password').value
   
    const userData = {
        username,
        password
    }

    login(userData)
})

async function login(formData){
   try {
    let response = await fetch('http://localhost:3000/api/v1/users/login',{
        method: 'POST',
        credentials:"include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })

    response = await response.json()
   console.log("token",response.cookie);
   if(response.message === 'username or password not matched') {
      alert('Invalid Username and password')
   }
   else if(response.message === 'Login successfully'){
    console.log("Cookie",document.cookie)
    window.location.href = 'http://localhost:5500/client/user/index.html'
   }
   else if(response.message === 'User not registered, PlEASE SIGNUP FIRST'){
    alert('Provided Username and password is not registered, PLEASE SIGNUP FIRST')
   }
   else{
    alert('Some error occurred please try again')
   }
   } catch (error) {
    console.log(error);
     alert('Some internall error occurred')
   }
}

document.addEventListener('DOMContentLoaded', () => {
    if (getCookie('authToken')) {
        console.log("auth token", authToken);
        window.location.href = 'http://localhost:5500/client/user/index.html';
    }
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

