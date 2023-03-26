// Show Hidden Password

const showHiddenPass = (loginPass, loginEye) => { 
    const input = document.getElementById(loginPass),
        iconeye = document.getElementById(loginEye)
    
    iconeye.addEventListener("click", () => { 
        // Change password to text
        if (input.type == 'password') {
            // Switch to text
            input.type = 'text'

            // Icon Change
            iconeye.classList.add('ri-eye-line')
            iconeye.classList.remove('ri-eye-off-line')
        }
        else { 
            // Change to Password
            input.type = 'password'

            // Icon Change
            iconeye.classList.remove('ri-eye-line')
            iconeye.classList.add('ri-eye-off-line')
        }
        
    })
}

showHiddenPass('login-pass','login-eye')