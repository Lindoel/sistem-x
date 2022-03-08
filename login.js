
class Supervisor {
    constructor() {
        this.supervisors = []
    }

    generate_supervisor() {
        let supervisor = this.get_data_from_supervisor()

        this.validate_supervisor(supervisor)

        if (this.validate_supervisor(supervisor)) {
            this.add_supervisor(supervisor)

            document.querySelector('#name_register_supervisor').value = ''
            document.querySelector('#id_register_supervisor').value = ''
            document.querySelector('#password_register_supervisor').value = ''
            document.querySelector('.tools_login_menu').style.display = 'none'
            document.querySelector('.menu_checkboxes').style.display = 'none'
        }
    }
    
    get_data_from_supervisor() {
        let supervisor = {}

        supervisor.name = document.querySelector('#name_register_supervisor').value
        supervisor.id = document.querySelector('#id_register_supervisor').value
        supervisor.password = document.querySelector('#password_register_supervisor').value

        return supervisor
    }

    validate_supervisor(supervisor) {
        let msg = ''
        if (supervisor.name == '') {
            msg += 'Preencha o nome do supervisor \n'
        }
        if (supervisor.id == '') {
            msg += 'Informe um ID válido \n'
        }
        if (supervisor.password == '') {
            msg += 'Informe uma senha'
        }
        
        if (msg != '') {
            alert(msg)
            return false
        } else {
            return true
        }
    }

    add_supervisor(supervisor) {
        this.supervisors.push(supervisor)
        console.log(this.supervisors)
    }

}

let supervisor = new Supervisor()















function tools_login_menu() {
    document.querySelector('.tools_login_menu').style.display = 'block'

}

function tools_login_menu_none() {
    document.querySelector('.tools_login_menu').style.display = 'none'
}

function register_supervisor() {
    document.querySelector('.menu_checkboxes').style.display = 'block'
}

function new_user_cancel() {
    document.querySelector('.tools_login_menu').style.display = 'none'
    document.querySelector('.menu_checkboxes').style.display = 'none'
}