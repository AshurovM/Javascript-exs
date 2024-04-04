const name = prompt("Loginni kiriting")

if(name == "admin"){
    const password = prompt("parolni kiriting:")
 if(password == "12345678"){
    document.write("Xush kelibsiz")
} else if(password == null){
    document.write("Canceled")
} else{
    document.write("Parol noto'g'ri")
}
} else if(password == null){
    document.write("Canceled")
} else{
    document.write("Login noto'g'ri")
}