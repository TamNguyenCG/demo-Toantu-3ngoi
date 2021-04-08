let login = prompt('')
let message
(login == 'Employee') ?
    message = 'Hello' :
    (login == 'Director') ?
        message = 'Greetings' :
        (login == '') ?
            message = 'No login' :
            '';
alert(message)

