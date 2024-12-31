// Fecha objetivo (5 de enero de 2025)
var countDownDate = new Date("Jan 5, 2025 14:30:00").getTime();

// Actualiza el temporizador cada segundo
var x = setInterval(function() {

    // Obtiene la fecha y hora actuales
    var now = new Date().getTime();

    // Calcula la distancia entre la fecha objetivo y la fecha actual
    var distance = countDownDate - now;

    // Calcula el tiempo restante en días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos";

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Ya es el día!";
    }
}, 1000);