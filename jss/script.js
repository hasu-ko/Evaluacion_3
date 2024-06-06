function validar() {
    var resultado_nombre = validar_nombre();
    console.log("Resultado nombre:", resultado_nombre);

    var resultado_contraseña = validar_contraseña();
    console.log("Resultado contraseña:", resultado_contraseña);

    var contraseña = document.getElementById("input-contraseña").value;
    var resultado_validar_contra = validar_la_contraseña(contraseña);
    console.log("Resultado validar contraseña:", resultado_validar_contra);

    var resultado_direccion = validar_direccion();
    console.log("Resultado dirección:", resultado_direccion);

    var resultado_telefono = validar_telefono();
    console.log("Resultado teléfono:", resultado_telefono);

    var resultado_correo = validar_correo();
    console.log("Resultado correo:", resultado_correo);

    var resultado_hobbies = validarHobbies();
    console.log("Resultado hobbies:", resultado_hobbies);

    var resultado_web = validar_paginaWeb();
    console.log("Resultado página web:", resultado_web);

    var retorno_comuna = validar_comuna();
    console.log("Resultado comuna:", retorno_comuna);

    return resultado_nombre && resultado_contraseña && resultado_validar_contra && resultado_direccion && resultado_telefono && resultado_correo && resultado_hobbies && resultado_web && retorno_comuna;
}
function validar_nombre() {
    var input_nombre = document.getElementById("input-nombre").value;
    var div_error_nombre = document.getElementById("error-nombre");

    if (input_nombre === "") {
        div_error_nombre.innerHTML = "El nombre no puede estar vacío";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_nombre.innerHTML = "";
        div_error_nombre.className = "";
        return true;
    }
}



function validar_comuna() {
    var comuna = document.getElementById("select-comuna").value;
    var errorComuna = document.getElementById("error-comuna");
    var checkValidIconComuna = document.getElementById("checkValidIconComuna");

    if (comuna === "") {
        errorComuna.style.display = "block";
        checkValidIconComuna.innerHTML = "<i class='fas fa-times text-danger'></i>"; // Mostrar una x de error
        return false;
    } else {
        errorComuna.style.display = "none";
        checkValidIconComuna.innerHTML = "<i class='fas fa-check text-success'></i>"; // Agregar el icono de check
        return true;
    }
}

function validar_contraseña() {
    var input_cont = document.getElementById("input-contraseña");
    var div_error_contra = document.getElementById("error-contraseña");
    var cont = input_cont.value;

    console.log("Contraseña ingresada:", cont);

    if (cont === "") {
        div_error_contra.innerHTML = "La contraseña no puede estar en blanco";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else if (cont.length < 3 || cont.length > 6) {
        div_error_contra.innerHTML = "La contraseña debe tener entre 3 a 6 caracteres";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else if (!(/[A-Za-z]/.test(cont) && /\d/.test(cont))) {
        div_error_contra.innerHTML = "La contraseña debe contener al menos una letra y un dígito";
        div_error_contra.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_contra.innerHTML = "";
        return true;
    }
}

function validar_la_contraseña(validar_contraseña) {
    var input_validar_contraseña = document.getElementById("input-contraseña_validar");
    var div_error_validar_contra = document.getElementById("error-contraseña_validacion");
    var cont = input_validar_contraseña.value.trim();

    console.log("Contraseña ingresada:", cont);
    console.log("Contraseña de validación:", validar_contraseña.trim());

    if (cont === "") {
        div_error_validar_contra.innerHTML = "Debe verificar la contraseña";
        div_error_validar_contra.className = "text-danger small mt-1";
        return false;
    } else if (cont !== validar_contraseña.trim()) {
        div_error_validar_contra.innerHTML = "Las contraseñas no son iguales";
        div_error_validar_contra.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_validar_contra.innerHTML = "";
        return true;
    }
}

function validar_contraseñas() {
    var contraseña = document.getElementById("input-contraseña").value;
    var contraseña_valida = validar_contraseña();
    if (!contraseña_valida) {
        return false;
    }
    return validar_la_contraseña(contraseña);
}

function validar_telefono() {
    var input_telefono = document.getElementById("input-telefono").value.trim();
    var div_error_telefono = document.getElementById("error-telefono");

    // Verificar si el número de teléfono está vacío
    if (input_telefono === "") {
        div_error_telefono.innerHTML = "El teléfono no puede estar vacío";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } 
    // Verificar si el número de teléfono tiene entre 8 y 9 caracteres
    else if (input_telefono.length < 8 || input_telefono.length > 9) {
        div_error_telefono.innerHTML = "El teléfono debe tener entre 8 y 9 caracteres";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } 
    // Verificar si el número de teléfono comienza con "9"
    else if (input_telefono.charAt(0) !== '9') {
        div_error_telefono.innerHTML = "El teléfono debe empezar con '9'";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } 
    // Si todas las condiciones anteriores son verdaderas, el número de teléfono es válido
    else {
        div_error_telefono.innerHTML = "";
        div_error_telefono.className = "";
        return true;
    }
}


function validar_direccion() {
    var validar_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = validar_direccion.value;

    if (direccion == "") {
        div_error_direccion.innerHTML = "La direccion no puede estar vacio";
        div_error_direccion.className = "text-danger small mt-1"
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_correo() {
    var input_email = document.getElementById("input-correo");
    var div_error_email = document.getElementById("error-correo");
    var correo = input_email.value;

    if (correo.trim() === "") {
        div_error_email.innerHTML = "El correo electrónico es obligatorio";
        div_error_email.className = "text-danger small mt-1";
        return false;
    } else {
        // indexOf retorna el indice de la posicion en la que se encuentra "@"
        var pos_arroba = correo.indexOf("@");
        // lastIndexOf retorna el indice de la ultima posicion en la que se encuentra "."
        var pos_punto = correo.lastIndexOf(".");
        // split crea un array de subcadenas resultantes de la division una principal
        var arr_correo = correo.split(".");
        var extension = arr_correo[arr_correo.length - 1];
        
        if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
            div_error_email.innerHTML = "";
            return true;
        } else {
            div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
            div_error_email.className = "text-danger small mt-1";
            return false;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("agregarAficion").addEventListener("click", function() {
        var aficion = document.getElementById("input-aficion").value.trim();
        if (aficion !== "") {
            agregarAficionLista(aficion);
            document.getElementById("input-aficion").value = "";
        }
    });

    document.getElementById('addHobbyButton').addEventListener('click', function() {
        const hobbyInput = document.getElementById('hobbyInput');
        const hobbiesList = document.getElementById('hobbiesList');
        const hobby = hobbyInput.value.trim();

        if (hobby) {
            const li = document.createElement('li');
            li.textContent = hobby;
            li.className = 'list-group-item';
            hobbiesList.appendChild(li);
            hobbyInput.value = '';
        }
    });

    function agregarAficionLista(aficion) {
        var listaAficiones = document.getElementById("listaAficiones");
        var nuevaAficion = document.createElement("li");
        nuevaAficion.textContent = aficion;
        nuevaAficion.className = "list-group-item";
        listaAficiones.appendChild(nuevaAficion);
    }
});


function validarHobbies() {
    var hobbiesList = document.getElementById('hobbiesList').children;
    var divErrorHobbies = document.getElementById('error-hobbies');

    if (hobbiesList.length >= 2) {
        divErrorHobbies.innerHTML = "";
        return true;
    } else {
        divErrorHobbies.innerHTML = "Debe agregar al menos 2 aficiones";
        divErrorHobbies.className = "text-danger small mt-1";
        return false;
    }
}


document.getElementById('addHobbyButton').addEventListener('click', function() {
    const hobbyInput = document.getElementById('hobbyInput');
    const hobbiesList = document.getElementById('hobbiesList');
    const hobby = hobbyInput.value.trim();

    if (hobby) {
        const li = document.createElement('li');
        li.textContent = hobby;
        li.className = 'list-group-item';
        hobbiesList.appendChild(li);
        hobbyInput.value = '';
    }
});

function validar_paginaWeb() {
    var paginaWeb = document.getElementById("input-paginaWeb").value;
    var errorPaginaWeb = document.getElementById("error-paginaWeb");

    var isValid = true;

    var startsWithHttp = paginaWeb.startsWith("http://");
    var startsWithHttps = paginaWeb.startsWith("https://");
    var startsWithWww = paginaWeb.startsWith("www.");
    var endsWithCom = paginaWeb.endsWith(".com");

    if ((!startsWithHttp && !startsWithHttps && !startsWithWww) || !endsWithCom) {
        errorPaginaWeb.style.display = "block";
        errorPaginaWeb.textContent = "Ingrese una URL válida (http://www.example.com)";
        isValid = false;
    } else {
        errorPaginaWeb.style.display = "none";
    }

    return isValid;
}

