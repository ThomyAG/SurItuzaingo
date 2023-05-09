// const inputDay = document.getElementsByClassName("inputDay");
// const resetBtn = document.getElementById("resetBtn");

// let dias = {
//     lunes: '',
//     martes: '',
//     miercoles: '',
//     jueves: '',
//     viernes: '',
//     sabado: '',
//     domingo: '',
//     otros: ''
// };

// Obtener los elementos input
const inputs = document.querySelectorAll('.inputDay');

// Objeto que almacenará los valores de los inputs
    let values = {
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: '',
    sabado: '',
    domingo: '',
    otros: ''
    };

    // Obtener los valores almacenados en el localStorage, si existen
    const storedValues = JSON.parse(localStorage.getItem('values'));
    if (storedValues) {
    values = storedValues;
    
    // Actualizar los valores de los inputs con los valores almacenados en el localStorage
    inputs.forEach(input => {
        const inputId = input.id;
        input.value = values[inputId];
    });
    }

    // Agregar un event listener para el evento input a cada elemento input
    inputs.forEach(input => {
    input.addEventListener('input', handleInput);
    });

    // Función que se ejecuta cuando se produce un evento input
    function handleInput(event) {
    // Obtener el valor del input que desencadenó el evento
    const inputValue = event.target.value;
    
    // Obtener el id del input que desencadenó el evento
    const inputId = event.target.id;
    
    // Actualizar el valor correspondiente en el objeto values
    values[inputId] = inputValue;
    
    // Guardar todo el objeto values en el localStorage
    localStorage.setItem('values', JSON.stringify(values));
    }