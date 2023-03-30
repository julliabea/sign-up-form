const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confimation')

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    checkForm()
})

username.addEventListener('blur', () =>{
    checkInputUsername()
})

email.addEventListener('blur', () =>{
    checkInputEmail()
})

password.addEventListener('blur', () =>{
    checkInputPassword()
})

function checkInputUsername(){
    const usernameValue = username.value

    if(usernameValue  === ''){
        errorInput(username, 'Preencha com um nome de usuário.')
    }else{
        const formItem = username.parentElement
        formItem.className = 'form-content'
    }
}

function checkInputEmail(){
    const emailValue = email.value

    if(emailValue  === ''){
        errorInput(email, 'Email obrigatório.')
    }else{
        const formItem = email.parentElement
        formItem.className = 'form-content'
    }
}

function checkInputPassword(){
    const passwordValue = password.value

    if(passwordValue === ''){
        errorInput(password, 'Senha obrigatória.')
    }else if(passwordValue.length < 8){
        errorInput(password, 'A senha precisa ter no mínimo 8 caracteres.')
    }else{
        const formItem = password.parentElement
        formItem.className = 'form-content'
    }
}

function checkInputPasswordConfirmation(){
    const passwordConfirmationValue = passwordConfirmation.value
    const passwordValue = password.value

    if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, 'As senhas informadas são diferentes')
    }else if(passwordConfirmationValue === ''){
        errorInput(passwordConfirmation, 'Confirmação de senha obrigatória.')
    }else{
        const formItem = passwordConfirmation.parentElement
        formItem.className = 'form-content'
    }
}

function checkForm(){
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItems = form.querySelectorAll('.form-content')
    
    const isValid = [...formItems].every( (item) =>{
        return item.className === 'form-content'
    })

    if(isValid){
        alert('Cadastrado com sucesso!')
    }
}

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector('a')

    textMessage.innerText = message;

    formItem.className = 'form-content error' 
}