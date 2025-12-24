function validarFormulario(formId) {
    const form = document.getElementById(formId);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valido = true;
        form.querySelectorAll('input, textarea').forEach(input => {
            if (!input.value) {
                valido = false;
                input.style.border = '1px solid red';
            } else {
                input.style.border = '1px solid #ccc';
            }
        });

        const password = form.querySelector('#password');
        const password2 = form.querySelector('#password2');
        if (password && password2 && password.value !== password2.value) {
            alert('Las contraseñas no coinciden');
            valido = false;
        }

        if (valido) {
            form.submit(); 
        }
    });
}

if(document.getElementById('registro-form')) validarFormulario('registro-form');
if(document.getElementById('login-form')) validarFormulario('login-form');
if(document.getElementById('contacto-form')) validarFormulario('contacto-form');