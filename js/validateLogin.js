document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    /* --------------- */
    const showError = (input, msg) => {
        const divContainer = input.parentNode;
        const errorText = divContainer.querySelector('.error-text');
        divContainer.classList.add('error')
        errorText.innerText = msg;
    }

    /* --------------- */
    const eliminarError = input => {
        const divContainer = input.parentNode;
        divContainer.classList.remove('error');
        const errorText = divContainer.querySelector('.error-text')
        errorText.innerText = '';
    }
    /* --------------- */
    formulario.querySelectorAll('input').forEach(input =>{
        input.addEventListener('change',()=>{
            const valor  = input.value.trim();
            if (valor  !== '') {
                eliminarError(input)
            }
        })
    })
    /* --------------- */
    function isEmail(email) {
        const expresionRegular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return expresionRegular.test(email);
    }
    /* --------------- */
    function validateEmail(campoId, msg) {
        const campo = document.getElementById(campoId);
        const email = campo.value.trim();
        if (email === '') {
            showError(campo, 'el email es obligatorio')
            return false;
        } else if (!isEmail(email)) {
            showError(campo, msg);
        } else {
            eliminarError(campo);
            return true;
        }
    }
    /* --------------- */
    function validateCampo(campoId, msg) {
        const campo = document.getElementById(campoId);
        const value = campo.value.trim();
        if (value == '') {
            showError(campo, msg)
            return false;
        } else {
            eliminarError(campo);
            return true;
        }
    }
    /* --------------- */
    const validateForm = () => {
        let validate = true;
        validate = validateEmail('email', 'el email no es valido') && validate;
        validate = validateCampo('password', 'la contraseña es obligatoria') && validate;
        return validate;
    }
    /* --------------- */
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        if (!validateForm()) {
            event.preventDefault()
            console.log('el formulario no es valido');
        } else {
            event.preventDefault();
            console.log('formulario enviado');
        }
    })



})