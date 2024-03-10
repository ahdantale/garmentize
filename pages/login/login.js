function login() {
    event.preventDefault()
    const email = event.target.email.value.trim()
    const password = event.target.password.value.trim()
    if(email === "admin@admin.com" && password === "123456"){
        alert("Login Successful")
    } else {
        alert("Incorrect email or password")
    }
}