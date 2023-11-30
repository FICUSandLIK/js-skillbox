let password= "245-" //"_-a"

if(password.length >=4 &&  (password.includes('-') ||password.includes('_') )){
    console.log("Пароль надёжный")
}
else{
    console.log("Пароль недостаточно надёжный")
}