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