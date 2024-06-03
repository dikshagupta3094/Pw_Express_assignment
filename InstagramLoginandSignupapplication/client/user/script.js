
const userData = async() =>{
       try {
        let resp = await fetch("http://localhost:3000/api/v1/users",{
            method:"GET",
            credentials:"include"
        });
         resp = await resp.json();
        if(resp.message === 'Your are not authorized'){
            alert('Please Login!!')
            window.location.href="http://localhost:5500/client/Login/index.html"
        }
        else{
            if(resp.message === 'PLEASE LOGIN AGAIN TO ACCESS THIS PAGE'){
                alert('Please Login!!')
                window.location.href="http://localhost:5500/client/Login/index.html"
            }
        }
        const userName = document.getElementById("userName")
        const userEmail = document.getElementById("userEmail")
        const userBio = document.getElementById("userBio")
        userName.innerText=resp.user.username;
        userEmail.innerText=resp.user.email;
        userBio.innerText=resp.user.bio
        
       } catch (error) {
            console.log(error.message)
            alert('Some internall error occurred')
            window.location.href="http://localhost:5500/client/Login/index.html"
       }
    } 

    userData()

  